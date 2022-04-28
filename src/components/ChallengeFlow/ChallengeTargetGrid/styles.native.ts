import { css } from "@emotion/native"

import {
	sizeRhythmVertical,
	colorBrandAlternative,
	colorPairingsLightOnDarkForeground,
	sizeRhythmHorizontal,
	colorBrandPrimary,
	sizeBorderRadius,
} from "@rap-theme"

export const buttonContainerStyles = css({
	paddingLeft: sizeRhythmVertical / 4,
	paddingRight: sizeRhythmVertical / 4,
	paddingTop: sizeRhythmVertical / 4,
	paddingBottom: sizeRhythmVertical / 4,
	width: "33%",
	height: 122,
})

export const buttonStyles = css({
	backgroundColor: colorBrandAlternative,
	textAlign: "center",
	borderRadius: 4,
	paddingLeft: 8,
	paddingRight: 8,
})

export const textStyles = css({
	fontSize: 20,
	// fontWeight: "700",
	textTransform: "uppercase",
	color: colorPairingsLightOnDarkForeground,
})

export const headerWrapperStyles = css({
	flexDirection: "row",
	// alignContent: "flex-end",
	alignItems: "center",
	justifyContent: "space-between",
	paddingBottom: sizeRhythmVertical,
})

export const headerStyles = css({
	textTransform: "uppercase",
	paddingLeft: sizeRhythmHorizontal / 2,
})

export const headerMargin = css({
	marginLeft: sizeRhythmHorizontal / 2,
	paddingBottom: sizeRhythmVertical,
})

export const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	color: "#FFFFFF",
	padding: 4,

	marginRight: sizeRhythmHorizontal / 2,
	borderRadius: sizeBorderRadius / 2,
	alignItems: "flex-end",
	flexDirection: "column",
	minWidth: 40,
	maxWidth: 40,
	minHeight: 40,
	maxHeight: 40,
})
export const iconImageStyles = css({
	display: "flex",
	width: 40,
	height: 40,
})

export const targetGridContainerStyles = css({
	flex: 1,
	flexWrap: "wrap",
	flexDirection: "row",
	width: "100%",
	alignItems: "flex-start",
})
