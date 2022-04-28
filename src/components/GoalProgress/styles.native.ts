import { css } from "@emotion/native"
import {
	colorPairingsLightOnDarkBackground,
	colorPairingsLightOnDarkForeground,
	colorPairingsProgressBackground,
	colorPairingsProgressForeground,
	sizeFontHeading4,
} from "@rap-theme"

export const containerStyles = css({
	maxHeight: 12,
	maxWidth: "100%",
	marginLeft: 8,
	marginRight: 8,
})

export const markContainerStyles = css({
	position: "absolute",
	top: 0,
	left: 0,
	backgroundColor: colorPairingsProgressBackground,
	display: "flex",
	flexDirection: "row",
	width: "100%",
	height: "100%",
})

export const markInnerContainerStyles = (progressPercent: number) =>
	css({
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1,
		backgroundColor: colorPairingsProgressForeground,
		width: `${Math.min(progressPercent, 100)}%`,
		height: "100%",
	})

export const markStyles = css({
	height: 12,
	width: 12,
	borderWidth: 1,
	borderColor: "#fff",
	zIndex: 2,
})

export const progressIndicatorStyles = css({
	position: "absolute",
	backgroundColor: colorPairingsLightOnDarkBackground,
	borderRadius: 17.5,
	width: 35,
	height: 35,
	margin: 0,
	padding: 0,
	alignItems: "center",
	justifyContent: "center",
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
	textAlign: "center",
	fontSize: sizeFontHeading4,
})
