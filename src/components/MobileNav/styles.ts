import { css } from "@emotion/react"
import {
	colorBackgroundSecondary,
	colorBorders,
	colorBrandPrimary,
	sizeRhythmVertical,
} from "@rap-theme"
import { CurrentResponsiveMode } from "providers/Responsive"

export const NAV_HEIGHT = 100
export const BRAND_BUTTON_SIZE = 64

export const mobileNavStyles = css({
	position: "absolute",
	height: 60,
	bottom: 0,
	left: 0,
	right: 0,
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical / 2,
	borderTopWidth: 1,
	borderTopColor: colorBorders,
	backgroundColor: colorBackgroundSecondary,
})

export const navStyles = css({
	textAlign: "center",
})
export const linkStyles = css({
	p: {
		fontSize: 12,
		color: colorBorders,
		margin: 0,
	},

	"&.active p, &.active svg": {
		color: "inherit",
	},
})

export const brandContainerStyles = (
	currentResponsiveMode: CurrentResponsiveMode,
) =>
	css({
		position: "absolute",
		padding: 8,
		background: "white",
		height: "calc(50% + 24px)",
		transform:
			currentResponsiveMode !== CurrentResponsiveMode.SMALL
				? "translate(-50%, calc(-100% - 7px))"
				: "translate(-50%, calc(-100% - 9px))",
		left: "50%",
		borderRadius: 0,
		borderWidth: 1,
		borderColor: colorBorders,
		borderTopRightRadius: 56,
		borderTopLeftRadius: 56,
		borderBottom: 0,
		":before": {
			content: "''",
			background: "#fff",
			position: "absolute",
			top: 0,
			height: "calc(200% - 7px)",
			width: "100%",
			border: "transparent",
			left: 0,
			borderRadius: 56,
		},
	})

export const brandButtonStyles = css({
	position: "relative",
	zIndex: 1,
	borderRadius: 32,
	backgroundColor: colorBrandPrimary,
	width: 64,
	height: 64,
	":before": {
		content: "''",
		background: colorBrandPrimary,
		position: "absolute",
		top: 0,
		height: "100%",
		width: "100%",
		borderRadius: 56,
		border: "transparent",
		zIndex: -1,
	},
})
