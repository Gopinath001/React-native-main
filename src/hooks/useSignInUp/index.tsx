import { Auth } from "aws-amplify"
import { useLocalStorage } from "hooks/useLocalStorage"
import { CognitoContext } from "providers/Cognito"
import { AuthIntent } from "providers/Cognito/types"
import { useContext } from "react"
import { useHistory } from "react-router"

export function useSignInUp() {
	const nav = useHistory()
	const { setItem } = useLocalStorage()
	const { setCurrentIntent } = useContext(CognitoContext)
	return {
		signIn: async () => {
			setCurrentIntent && setCurrentIntent(AuthIntent.SignIn)
			await setItem("redirectTo", "/")
			Auth.federatedSignIn()
		},
		signUp: async () => {
			setCurrentIntent && setCurrentIntent(AuthIntent.SignUp)
			await setItem("redirectTo", "/terms")
			Auth.federatedSignIn()
		},
		signOut: async () => {
			await setItem("redirectTo", "/")
			await Auth.signOut()
			nav.push("/")
		},
	}
}
