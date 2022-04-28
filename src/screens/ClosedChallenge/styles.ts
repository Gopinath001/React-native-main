import { css } from "@emotion/react"
import {
	sizeBreakpointsMedium,
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
} from "@rap-theme"

export const containerStyles = css({
	
})
export const contentStyles = css({
	position: "absolute",
	height: "100%",
	width: "100%",
	maxWidth: sizeBreakpointsMedium,
	left: "50%",
	transform: "translateX(-50%)",
	paddingLeft: "10%",
	paddingRight: "10%",
	textAlign: "center",
})

export const headingStyles = css({
	color: colorPairingsLightOnDarkForeground,
	textTransform: "uppercase",
	marginTop: 0,
	marginBottom: sizeRhythmVertical * 1.5,
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
	// textTransform: "uppercase",
	marginTop: 0,
	marginBottom: sizeRhythmVertical,
	lineHeight: 1.3,
})

export const buttonStyles = css({
	p: { color: "#fff" },
	marginTop: sizeRhythmVertical,
})

export const noGrow = css({
	flexGrow: 0,
})
