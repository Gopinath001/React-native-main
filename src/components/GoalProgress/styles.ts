import { css } from "@emotion/react"
import {
	colorPairingsLightOnDarkBackground,
	colorPairingsLightOnDarkForeground,
	colorPairingsProgressBackground,
	colorPairingsProgressForeground,
	sizeFontHeading4,
	// sizeFontSmall,
} from "@rap-theme"

export const containerStyles = css({
	position: "relative",
	width: "100%",
	maxHeight: 12,
	backgroundImage: `linear-gradient(${colorPairingsProgressForeground}, ${colorPairingsProgressForeground}), linear-gradient(${colorPairingsProgressBackground}, ${colorPairingsProgressBackground})`,

	backgroundRepeat: "no-repeat",
})

export const progressIndicatorStyles = css({
	height: "100%",
	textAlign: "right",
	borderRadius: 35,
})

export const markContainerStyles = css({
	position: "absolute",
	top: 0,
	left: 0,
	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	width: "calc(100% + 1px)",
	// display: "flex",
	flexDirection: "row",
	// width: "100%",
	height: "100%",
})

export const markStyles = css({
	borderWidth: 1,
	borderColor: "#fff",
})

export const textStyles = css({
	position: "absolute",
	top: "50%",

	backgroundColor: colorPairingsLightOnDarkBackground,
	color: colorPairingsLightOnDarkForeground,
	borderRadius: 17.5,
	width: 35,
	height: 35,
	textAlign: "center",
	margin: 0,
	padding: 0,
	paddingTop: 6,
	fontSize: sizeFontHeading4,
})

export const markInnerContainerStyles = (_progressPercent: number) => null
