import { Interpolation, Theme } from "@emotion/react"
import { PropsWithChildren } from "react"

export type BaseButtonProps = PropsWithChildren<{
	
	onPress?: (...args: any[]) => void

	
	variant?:
		| "primary"
		| "secondary"
		| "transparent"
		| "none"
		| "white"
		| "bordered-primary"
		| "bordered-alternative"
	outlined?: boolean
	
	fullWidth?: boolean

	noHoverShadow?: boolean

	disabled?: boolean
	css?: Interpolation<Theme>
}>
