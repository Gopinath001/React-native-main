import { AriaAttributes } from "react"

export type BoxProps = {
	
	grid?: boolean

	
	row?: boolean

	
	column?: boolean

	
	small?: number

	
	medium?: number

	
	large?: number

	
	noMobileCollapse?: boolean

	nowrap?: boolean

	alignContent?: "flex-start" | "center" | "flex-end"
	verticallyAlignContent?:
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"

	
	debugContainer?: boolean

	
	onPress?: (event: unknown) => void
} & AriaAttributes
