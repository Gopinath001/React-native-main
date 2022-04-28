import { css } from "@emotion/native"
import {
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
} from "@rap-theme"

export const containerStyles = css({
	paddingHorizontal: "10%",
})
export const contentStyles = css({
	textAlign: "center",
})

export const headingStyles = css({
	color: colorPairingsLightOnDarkForeground,
	textTransform: "uppercase",
	marginTop: 0,
	marginBottom: sizeRhythmVertical * 1.5,
	textAlign: "center",
	width: "100%",
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
	// textTransform: "uppercase",
	textAlign: "center",
	marginTop: 0,
	marginBottom: sizeRhythmVertical,
})

export const buttonStyles = css({
	marginTop: sizeRhythmVertical,
})

export const noGrow = css({
	flexGrow: 0,
})
