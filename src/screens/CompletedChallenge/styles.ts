import { css } from "@emotion/react"
import {
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
} from "@rap-theme"

export const containerStyles = css({
	position: "relative",
})
export const contentStyles = css({
	position: "absolute",
	paddingLeft: "10%",
	paddingRight: "10%",
	textAlign: "center",
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
	fontWeight: 300,
	textAlign: "center",
})

export const congratsTextStyles = css({
	marginBottom: sizeRhythmVertical,
})
