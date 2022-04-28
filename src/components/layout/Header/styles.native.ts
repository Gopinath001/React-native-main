import { css } from "@emotion/native"
import { sizeRhythmVertical } from "@rap-theme"
import { Dimensions } from "react-native"

const dimensions = Dimensions.get("screen")

export const headerStyles = css({
	paddingVertical: 10,
	height: 60,
	justifyContent: "center",
})
export const backButtonStyles = css({
	width: 45,
})
export const svgStyles = css({})
