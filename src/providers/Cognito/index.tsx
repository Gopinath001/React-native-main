import { PropsWithChildren, useState, createContext, useEffect } from "react"
import Amplify, { Auth, Hub } from "aws-amplify"
import awsconfig from "../../awsconfig/aws"
import { useLocalStorage } from "hooks/useLocalStorage"
import authconfig from "../../awsconfig/auth"
import { HubCallback } from "@aws-amplify/core"
import { AuthIntent, ContextShape } from "./types"
import { CognitoUserSession } from "amazon-cognito-identity-js"
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
		console.log(authconfig, awsconfig)
		Amplify.configure({
			...awsconfig,
			oauth: {
				...authconfig,
			},
		})
		;(async () => {
			// If we have a token, we probably need to refresh it.
			try {
				const session = await Auth.currentSession()
				const cognitoUser = await Auth.currentAuthenticatedUser()
				if (cognitoUser)
					cognitoUser.refreshSession(
						session.getRefreshToken(),
						async (err?: Error, session?: CognitoUserSession) => {
							if (err) throw err
							if (session) {
								const jwt = session.getAccessToken().getJwtToken()
								if (jwt) {
									setTokenRaw(jwt)
									setCurrentIntent(AuthIntent.Refresh)
								}
							}
						},
					)
			} catch {}
		})()
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

					if (currentIntent === AuthIntent.SignUp) setForceTo("/terms")
					else setForceTo("/")

					break
				case "signOut":
					setTokenRaw(null)
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
