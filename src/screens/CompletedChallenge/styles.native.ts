import { css } from "@emotion/native"
import {
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
} from "@rap-theme"

export const containerStyles = css({
	// position: "relative",
})
export const contentStyles = css({
	width: "100%",
	paddingHorizontal: "10%",
	
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
	fontWeight: "300",
	textAlign: "center",
	flexGrow: 0,
})

export const congratsTextStyles = css({
	marginBottom: sizeRhythmVertical,
})
