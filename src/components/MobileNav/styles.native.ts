import { css } from "@emotion/native"
import {
	colorBackgroundSecondary,
	colorBorders,
	colorBrandPrimary,
	sizeRhythmVertical,
} from "@rap-theme"
import { CurrentResponsiveMode } from "providers/Responsive"
import { Dimensions, Platform } from "react-native"

export const NAV_HEIGHT = 60
export const BRAND_BUTTON_SIZE = 64
const dims = Dimensions.get("window")

export const mobileNavStyles = css({
	height: NAV_HEIGHT,
	minHeight: NAV_HEIGHT,
	maxHeight: NAV_HEIGHT,
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
	alignContent: "center",
	height: "100%",
})
export const linkStyles = css({
	display: "flex",
	flexDirection: "row",
	width: "100%",
	flex: 1,
})

export const brandContainerStyles = (
	currentResponsiveMode: CurrentResponsiveMode,
) =>
	css({
		position: "absolute",
		backgroundColor: "white",
		height: BRAND_BUTTON_SIZE,
		width: BRAND_BUTTON_SIZE,
		padding: 4,
		transform:
			currentResponsiveMode !== CurrentResponsiveMode.SMALL
				? [{ translateX: -28 }, { translateY: -(BRAND_BUTTON_SIZE / 2) }]
				: [{ translateX: -28 }, { translateY: -(BRAND_BUTTON_SIZE / 2) }],
		top: -7,
		left: "50%",
		borderWidth: 1,
		borderColor: colorBorders,
		borderRadius: BRAND_BUTTON_SIZE,
	})

export const brandButtonStyles = css({
	position: "absolute",
	zIndex: 1,
	borderRadius: (BRAND_BUTTON_SIZE - 9) / 2,
	backgroundColor: colorBrandPrimary,
	width: BRAND_BUTTON_SIZE - 9,
	height: BRAND_BUTTON_SIZE - 9,
	flex: 1,
	alignContent: "center",
	left: 3.5,
	top: 4,
})
