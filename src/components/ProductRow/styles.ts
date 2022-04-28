import {
	colorBackgroundPrimary,
	sizeRhythmVertical,
	colorBorders,
	colorBrandPrimary,
	sizeRhythmHorizontal,
} from "@rap-theme"
import { css } from "@emotion/react"

export const productContainerStyles = css({
	width: "100%",
	flex: 1,
	backgroundColor: colorBackgroundPrimary,
	marginVertical: sizeRhythmVertical,
})

export const padding = css({
	padding: sizeRhythmVertical,
})

export const selectStyles = css({
	width: "100%",
	flex: 7,
})
export const selectPlusStyles = css({
	flex: 1,
})

export const cartActionBoxStyles = css({
	justifyContent: "space-between",
	width: "100%",
})

export const imageStyles = css({
	width: "100%",
	height: "100%",
})
export const productNameStyles = css({
	textTransform: "uppercase",
	borderBottomWidth: 1,
	borderBottomColor: colorBorders,
})
export const priceStyles = css({
	color: colorBrandPrimary,
	marginTop: sizeRhythmVertical,
})

export const quantityTextStyles = css({
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
	margin: 0,
	height: "100%",
	textAlign: "center",
	justifyContent: "center",
})

export const controllessQuantityTextStyles = css({
	color: colorBrandPrimary,
	margin: 0,
	textAlign: "center",
	justifyContent: "center",
})

export const metaColumn = css({})
export const imageColumn = css({})
export const disabledPlusButton = css({})
