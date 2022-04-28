import { css } from "@emotion/react"
import {
	sizeRhythmHorizontal,
	sizeRhythmVertical,
	typographyWebPrimary,
	sizeFontHeading2,
} from "@rap-theme"

export const containerStyles = css({})
export const gutterStyles = css({
	padding: sizeRhythmHorizontal / 2,
})
export const horizontalRhythm = css({
	lineHeight: 1.1,
	marginBottom: sizeRhythmVertical,
	marginLeft: sizeRhythmHorizontal / 2,
	marginRight: sizeRhythmHorizontal / 2,
})
export const dateStyles = css({
	fontFamily: typographyWebPrimary,
	fontSize: sizeFontHeading2,
})
