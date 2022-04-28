import { Dispatch, SetStateAction } from "react"

export enum AuthIntent {
	None = "none",
	SignIn = "sign-in",
	SignUp = "sign-up",
	Refresh = "refresh",
}

export type ContextShape = {
	token?: string | null
	authRedirectTo?: string
	currentIntent?: AuthIntent
	clearForceTo: () => void
	setCurrentIntent?: Dispatch<SetStateAction<AuthIntent>>
	setToken?: Dispatch<SetStateAction<string | null | undefined>>
	refreshUserToken: (onToken: (jwt: string) => Promise<void>) => Promise<void>
}
