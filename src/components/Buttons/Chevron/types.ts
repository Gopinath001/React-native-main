import { BaseButtonProps } from "../types"
import { Interpolation, Theme } from "@emotion/react"
import { ReactNativeStyle } from "@emotion/native"

export enum ChevronButtonDirection {
	LEFT,
	RIGHT,
	UP,
	DOWN,
}

export type ChevronButtonProps = {
	direction: ChevronButtonDirection
	fill?: string
	css?: Interpolation<Theme>
	style?: ReactNativeStyle
} & BaseButtonProps
