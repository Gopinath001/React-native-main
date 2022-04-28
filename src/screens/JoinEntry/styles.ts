import { css } from "@emotion/react"
import {
	sizeRhythmVertical,
	colorBrandPrimary,
	sizeRhythmHorizontal,
} from "@rap-theme"

export const containerStyles = css({})

export const optionsWrapperStyles = css({})

export const optionBoxStyles = css({
	backgroundColor: "white",
	marginBottom: sizeRhythmVertical,
})
export const lightText = css({
	color: "white",
})
export const optionHeaderStyles = css({
	color: colorBrandPrimary,
	textTransform: "uppercase",
	margin: 0,
	paddingTop: sizeRhythmVertical,
})
export const optionTextStyles = css({
	paddingRight: sizeRhythmHorizontal,
})
export const linkStyles = css({
	display: "flex",
	flexDirection: "row",
})
export const imageColumnStyles = css({
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical,
})

export const textColumnStyles = css({})
