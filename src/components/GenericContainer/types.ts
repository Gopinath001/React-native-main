import { ReactNode, Ref } from "react"
import { Interpolation, Theme } from "@emotion/react"
import { ReactNativeStyleType } from "@emotion/native/types/base"

export type WithDeclarativeStyleProps<Props> = Props & {
	
	padding?: number | string

	
	paddingH?: number | string

	
	paddingV?: number | string

	
	margin?: number | string

	
	marginH?: number | string

	
	marginV?: number | string

	
	backgroundColor?: string

	
	rounded?: boolean
}

export type LayoutEvent = {
	nativeEvent: {
		layout: { width: number; height: number; x: number; y: number }
	}
}
export type GenericContainerProps<Props> = WithDeclarativeStyleProps<Props> & {
	css?: Interpolation<Theme>
	style?: ReactNativeStyleType<unknown> | null
	className?: string
	onLayout?: (event: LayoutEvent) => void
	onPress?: () => void
	children?: ReactNode | ((ref: Ref<unknown>) => ReactNode | undefined | null)
}

export type GenericContainerPropsWithComponent<Props> =
	GenericContainerProps<Props> & {
		withComponent: React.ElementType
	}
