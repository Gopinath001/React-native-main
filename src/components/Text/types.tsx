import { TextProps as RNTextProps } from "react-native"

export type TextProps = {
	bold?: boolean
	light?: boolean
	// italic?: boolean
	center?: boolean
	variant?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "paragraph"
		| "button"
		| "link"
		| "light"
		| "inline"
	href?: string
	title?: string
	accent?: boolean
	verticalMargin?: boolean
	onPress?: (event?: unknown) => void
	style?: RNTextProps["style"]
}
