import { css } from "@emotion/react"
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
	marginBotton: sizeRhythmVertical,
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
})

export const headerStyles = css({
	color: colorBrandPrimary,
	textAlign: "center",
	marginBottom: 0,
})

export const medalStyles = css({
	marginVertical: sizeRhythmVertical,
})
