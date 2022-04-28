import { css } from "@emotion/native"
import {
	colorPairingsLightOnDarkForeground,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"

export const imageBox = css({
	marginLeft: "auto",
	marginRight: "auto",
	height: 160,
})

export const confirmationText = css({
	color: colorPairingsLightOnDarkForeground,
	textAlign: "center",
	width: "100%",
})

export const subConfirmationText = css({
	color: colorPairingsLightOnDarkForeground,
	fontWeight: "300",
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
