import { css, Interpolation, Theme } from "@emotion/react"
import {
	sizeBorderRadius,
	sizeRhythmVertical,
	colorBackgroundPrimary,
	sizeBreakpointsMedium,
} from "@rap-theme"
import { verticalRhythmPadding, horizontalRhythmPadding } from "utils"
import { FloatingCardProps } from "./types"

export const absStyles = css({
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	zIndex: 5,
})
export const contentStyles = (props: FloatingCardProps) =>
	css({
		overflow: "auto",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#FFFFFF",
		height: !props.open ? 0 : props.openHeight,
		zIndex: 5,
		borderRadius: sizeBorderRadius,
		...verticalRhythmPadding,
		...horizontalRhythmPadding,
		paddingTop: sizeRhythmVertical * 2,
	})
export const overlayStyles = (_open: Boolean) =>
	css({
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#ECF4F5",
		opacity: 0.8,
		zIndex: 4,
	})

export const buttonStyles = css({
	position: "absolute",
	top: 30,
	right: 24,
	width: 32,
	height: 32,
	borderRadius: 20,
	backgroundColor: colorBackgroundPrimary,
})

export const desktopWidthLimit = css`
	@media (min-width: ${sizeBreakpointsMedium}px) {
		max-width: 50%;
		left: 50%;
		transform: translate(-50%, 0);
	}
`

export const innerContent = css({
	height: "100%",
	width: "100%",
})

export const backgroundOverlayStyles = (open: Boolean = false) => [
	absStyles,
	overlayStyles(open),
]
export const floatingContentStyles = (
	props: FloatingCardProps & { css?: Interpolation<Theme> },
) => [contentStyles(props), desktopWidthLimit, props.css]
