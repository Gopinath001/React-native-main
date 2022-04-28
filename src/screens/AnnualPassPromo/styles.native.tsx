import { css } from "@emotion/native"
import {
	colorBackgroundSecondary,
	colorBrandPrimary,
	sizeBorderRadius,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"

export const bodyStyles = css({
	backgroundColor: colorBackgroundSecondary,
	paddingTop: sizeRhythmVertical * 2,
	paddingBottom: sizeRhythmVertical,
	borderRadius: sizeBorderRadius,
	flexGrow: 0,
})

export const bodyContentStyles = css({
	paddingLeft: sizeRhythmHorizontal,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical,
	paddingRight: sizeRhythmHorizontal,
	textAlign: "center",
})

export const buttonStyles = css({
	marginTop: sizeRhythmVertical,
	flexGrow: 0,
})

export const headerStyles = css({
	color: colorBrandPrimary,
	textAlign: "center",
	marginBottom: 0,
})

export const medalStyles = css({
	paddingVertical: sizeRhythmVertical,
})
