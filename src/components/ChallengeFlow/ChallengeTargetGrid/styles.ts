import { css } from "@emotion/react"
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
})

export const buttonStyles = css({
	backgroundColor: colorBrandAlternative,
	flexDirection: "column",
	textAlign: "center",
	justifyContent: "center",
	borderRadius: 4,
	paddingLeft: 8,
	paddingRight: 8,
	width: "100%",
})

export const textStyles = css({
	fontSize: 20,
	// fontWeight: 700,
	color: colorPairingsLightOnDarkForeground,
})

export const headerWrapperStyles = css({})

export const headerStyles = css({
	textTransform: "uppercase",
})
export const headerMargin = css({
	marginLeft: sizeRhythmHorizontal / 2,
})
export const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	color: "#FFFFFF",
	padding: 4,
	marginTop: 4,
	marginRight: sizeRhythmHorizontal / 2,
	borderRadius: sizeBorderRadius / 2,
	alignSelf: "flex-end",
	justifyContent: "center",
	display: "flex",
	width: "50%",
})
export const iconImageStyles = css({})
export const targetGridContainerStyles = css({})
export const headerTextContainerStyles = css({
	width: "80%",
})
