import { css } from "@emotion/react"
import {
	colorBorders,
	colorBrandAlternative,
	colorBrandPrimary,
	sizeFontLarge,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"

export const priceStyles = css({
	color: colorBrandPrimary,
	fontWeight: 300,
	fontSize: sizeFontLarge,
})

export const personalisedMedalTextStyles = css({
	color: colorBrandPrimary,
	fontWeight: 300,
	marginLeft: sizeRhythmHorizontal,
	marginTop: sizeRhythmVertical,
})

export const entryLineItemStyles = css({
	borderBottomWidth: 1,
	borderBottomColor: colorBorders,
	marginBottom: sizeRhythmHorizontal,
})

export const entryLineDetailStyles = css({
	borderBottomWidth: 1,
	borderBottomColor: colorBorders,
	paddingBottom: sizeRhythmHorizontal,
})

export const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	width: 50,
	height: 50,
	maxWidth: 50,
})

export const moreButtonStyles = css({
	borderWidth: 2,
	borderStyle: "solid",
	borderColor: colorBrandAlternative,
	borderRadius: 25,
	margin: 0,
	padding: 0,
	width: 50,
	height: 50,
})

export const iconImageStyles = css({})
