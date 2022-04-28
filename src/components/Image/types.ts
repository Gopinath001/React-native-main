import { SerializedStyles } from "@emotion/react"

export type ImageProps = {
	src: string

	
	alt: string

	
	circular?: boolean

	width?: number | string
	height?: number | string

	
	forceSquare?: boolean

	css?: SerializedStyles
}
