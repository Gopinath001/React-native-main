import { ReactNativeStyle } from "@emotion/native"
import { Interpolation, Theme } from "@emotion/react"

export type IconProps = {
	width?: number | string
	height?: number | string
	fill?: string
	css?: Interpolation<Theme>
	style?: ReactNativeStyle
}
