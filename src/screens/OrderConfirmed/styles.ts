import { css } from "@emotion/react"
import {
	colorPairingsLightOnDarkForeground,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"

export const imageBox = css({
	marginLeft: "auto",
	marginRight: "auto",
	height: "160px",
})

export const confirmationText = css({
	color: colorPairingsLightOnDarkForeground,
})

export const subConfirmationText = css({
	color: colorPairingsLightOnDarkForeground,
	fontWeight: 300,
	textAlign: "center",
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})

export const finalText = css({
	color: colorPairingsLightOnDarkForeground,
	textAlign: "center",
	paddingBottom: sizeRhythmVertical,
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})
