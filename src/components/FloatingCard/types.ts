import { Interpolation, Theme } from "@emotion/react"
import { LayoutEvent } from "components/GenericContainer/types"

export type FloatingCardProps = {
	dismissable?: boolean
	open?: boolean
	openHeight: number | string
	backgroundOverlay?: boolean
	dragToDismiss?: boolean
	closeButton?: boolean
	onClose?: () => void
	contentStyles?: Interpolation<Theme>
	onLayout?: (event: LayoutEvent) => void
}
