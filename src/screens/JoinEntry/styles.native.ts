import { css } from "@emotion/native"
import {
	sizeRhythmVertical,
	colorBrandPrimary,
	sizeRhythmHorizontal,
} from "@rap-theme"

export const containerStyles = css({
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})

export const optionsWrapperStyles = css({
	width: "100%",
	paddingTop: sizeRhythmVertical,
})

export const optionBoxStyles = css({
	backgroundColor: "white",
	marginBottom: sizeRhythmVertical,
	flexGrow: 0,
})

export const lightText = css({
	color: "white",
	paddingTop: sizeRhythmVertical,
})

export const optionHeaderStyles = css({
	color: colorBrandPrimary,
	textTransform: "uppercase",
	margin: 0,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical / 2,
	flexWrap: "wrap",
})
export const optionTextStyles = css({
	paddingRight: sizeRhythmHorizontal,
})

export const imageColumnStyles = css({
	flexBasis: "30%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical,
})

export const textColumnStyles = css({
	flexBasis: "70%",
	paddingLeft: sizeRhythmHorizontal / 2,
	paddingRight: sizeRhythmHorizontal / 2,
	paddingBottom: sizeRhythmVertical,
})
