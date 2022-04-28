import {
	colorBackgroundPrimary,
	sizeRhythmVertical,
	colorBorders,
	colorBrandPrimary,
	sizeRhythmHorizontal,
	colorPairingsProgressBackground,
} from "@rap-theme"
import { css } from "@emotion/native"

export const productContainerStyles = css({
	flexDirection: "row",
	justifyContent: "flex-start",
	alignContent: "flex-start",
	backgroundColor: colorBackgroundPrimary,
	marginVertical: sizeRhythmVertical,
	width: "100%",
})

export const padding = css({
	padding: sizeRhythmVertical,
})

export const selectStyles = css({
	width: "100%",
})
export const selectPlusStyles = css({
	minHeight: 40,
	minWidth: 40,
})

export const cartActionBoxStyles = css({
	padding: 0,
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
	paddingTop: sizeRhythmVertical,
})

export const quantityTextStyles = css({
	textAlign: "center",
	width: "100%",
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})

export const controllessQuantityTextStyles = css({
	color: colorBrandPrimary,
	margin: 0,
})

export const imageColumn = css({
	flex: 1,
	flexBasis: "50%",
})
export const metaColumn = css({
	flex: 1,
	flexBasis: "50%",
})
export const disabledPlusButton = css({
	minHeight: 40,
	minWidth: 40,
	backgroundColor: colorPairingsProgressBackground,
})
