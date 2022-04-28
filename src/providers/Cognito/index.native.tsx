import { PropsWithChildren, useState, createContext, useEffect } from "react"
import Amplify, { Hub } from "aws-amplify"
import awsconfig from "../../awsconfig/aws"
import { useLocalStorage } from "hooks/useLocalStorage"
import InAppBrowser from "react-native-inappbrowser-reborn"
import authconfig from "../../awsconfig/auth"
import { Linking, Platform } from "react-native"
import { HubCallback } from "@aws-amplify/core"
import { AuthIntent, ContextShape } from "./types"
import { MemoryStorageNew } from "./storage.native"
import { refreshUserToken } from "./utils"

export const CognitoContext = createContext<ContextShape>({
	token: null,
	clearForceTo: console.error,
	refreshUserToken,
})


export function CognitoContextProvider({ children }: PropsWithChildren<{}>) {
	const { setItem } = useLocalStorage()
	const [token, setTokenRaw] = useState<string | null>()
	const [currentIntent, setCurrentIntent] = useState<AuthIntent>(
		AuthIntent.None,
	)
	const [forceTo, setForceTo] = useState<string | undefined>()

	useEffect(() => {
		async function urlOpener(url: string, redirectUrl: string) {
			await InAppBrowser.isAvailable()

			// FIXME
			// @ts-ignore this property, it definitely exists. The typings are wrong.
			const { type, url: newUrl } = await InAppBrowser.openAuth(
				url,
				redirectUrl,
				{
					showTitle: false,
					enableUrlBarHiding: true,
					enableDefaultShare: false,
					enableBarCollapsing: true,
					ephemeralWebSession: Platform.OS === "ios",
					modalEnabled: true,
					modalPresentationStyle: "fullScreen",
				},
			)

			if (type === "success") {
				// Push this URL into whatever stack RN can read from in the event handler.
				Linking.openURL(newUrl)
			}
		}

		const listener = Linking.addListener("url", ({ url }) => {
			if (typeof url === "string") {
				const safeUrl = url.slice(url.lastIndexOf("/"), url.length)
				
				setForceTo(safeUrl.split("?")[0])
			}
		})

		Amplify.configure({
			...awsconfig,
			oauth: {
				...authconfig,
				urlOpener,
			},
		})
		Amplify.Auth.configure({
			...authconfig,
			urlOpener,
			storage: MemoryStorageNew,
		})
		;(async () => {
			// If we have a token, we probably need to refresh it.
			await refreshUserToken(async (jwt: string) => {
				setTokenRaw(jwt)
				setCurrentIntent(AuthIntent.Refresh)
			})
		})()

		return () => listener.remove()
	}, [])

	useEffect(() => {
		const hubListener: HubCallback = async ({ payload: { event, data } }) => {
			switch (event) {
				case "signIn":
					await setItem(
						"cognito_token",
						data.signInUserSession.refreshToken.token,
					)
					setTokenRaw(data.signInUserSession.accessToken.jwtToken)

					if (currentIntent === AuthIntent.SignUp) {
						setForceTo("/terms")
					} else setForceTo("/")

					break
				case "signOut":
					setTokenRaw(null)
					break
				case "signIn_failure":
				case "cognitoHostedUI_failure":
					break
			}
		}

		// Set up listeners.
		Hub.listen("auth", hubListener)
		return () => Hub.remove("auth", hubListener)
	}, [currentIntent])

	return (
		<CognitoContext.Provider
			value={{
				token,
				setToken: setTokenRaw,
				authRedirectTo: forceTo,
				clearForceTo: () => setForceTo(undefined),
				currentIntent,
				setCurrentIntent,
				refreshUserToken,
			}}
		>
			{children}
		</CognitoContext.Provider>
	)
}
