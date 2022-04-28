import {
	colorBrandPrimary,
	sizeRhythmVertical,
	colorBrandAlternative,
	sizeRhythmHorizontal,
	colorBorders,
	sizeFontHeading3,
} from "@rap-theme"
import { css } from "@emotion/native"

export const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	width: 32,
	maxWidth: 32,
	height: 32,
})

export const iconImageStyles = css({
	alignContent: "center",
	justifyContent: "center",
})

export const profileWrapper = css({
	width: "100%",
	marginTop: sizeRhythmVertical,
})
export const dateStyles = css({ fontSize: sizeFontHeading3 })
export const dateContainerStyles = css({
	paddingTop: 5,
	paddingBottom: sizeRhythmVertical,
	borderTopWidth: 1,
	borderColor: colorBorders,
})
export const detailStyles = css({
	borderBottomWidth: 1,
	borderColor: colorBorders,
	paddingBottom: sizeRhythmVertical,
	marginBottom: sizeRhythmVertical,
})

export const helpTextStyles = css({
	color: colorBrandAlternative,
	marginTop: sizeRhythmVertical * 1.5,
	marginBottom: sizeRhythmVertical * 1.5,
})

export const inputStyles = css({
	marginBottom: sizeRhythmVertical * 2,
})

export const contentStyles = css({
	justifyContent: "flex-start",
	paddingHorizontal: sizeRhythmHorizontal,
})

export const textStyles = css({
	marginVertical: sizeRhythmVertical / 2,
})

export const progressStyles = css({
	width: "100%",
	marginRight: -sizeRhythmHorizontal,
	marginTop: 10,
})

export const distanceStyles = css({
	paddingHorizontal: sizeRhythmHorizontal,
	color: colorBrandPrimary,
})

export const switchColumnStyles = css({
	flex: 0,
	flexGrow: 0,
	flexShrink: 1,
	marginHorizontal: sizeRhythmHorizontal,
	alignContent: "center",
	justifyContent: "center",
	alignSelf: "center",
})
export const collapseRow = css({
	flexGrow: 0,
})
