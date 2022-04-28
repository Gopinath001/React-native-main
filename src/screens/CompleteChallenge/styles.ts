import {
	colorBrandPrimary,
	sizeRhythmVertical,
	colorBrandAlternative,
} from "@rap-theme"
import { css } from "@emotion/react"

export const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	padding: 5,
	width: 32,
	height: 32,
})

export const iconImageStyles = css({
	filter:
		"invert(100%) sepia(0%) saturate(7500%) hue-rotate(10deg) brightness(97%) contrast(114%)",
})

export const profileWrapper = css({
	marginTop: sizeRhythmVertical,
})

export const detailStyles = css({
	paddingTop: sizeRhythmVertical,
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

export const contentStyles = css({})
export const textStyles = css({})
export const progressStyles = css({
	width: "100%",
})
export const distanceStyles = css({})
export const switchColumnStyles = css({})
export const collapseRow = css({})
