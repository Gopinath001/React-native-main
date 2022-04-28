import { css } from "@emotion/react"
import {
	colorBrandPrimary,
	sizeBorderRadius,
	sizeRhythmVertical,
} from "@rap-theme"
import { horizontalRhythmPadding, verticalRhythmPadding } from "utils"

export const addressTextStyle = css({
	margin: 0,
	padding: 0,
})

export const addressBox = css({
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: colorBrandPrimary,
	borderRadius: sizeBorderRadius,
	marginBottom: sizeRhythmVertical,
	...horizontalRhythmPadding,
	...verticalRhythmPadding,
})

export const inputStyles = css({
	width: "100%",
})
