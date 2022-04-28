import { css } from "@emotion/native"
import {
	colorBrandPrimary,
	colorPairingsLightOnDarkBackground,
	colorPairingsLightOnDarkForeground,
	// sizeBorderRadius,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
	// colorBrandAlternative,
	typographyMobilePrimary,
} from "@rap-theme"

export const headingStyles = css({
	fontFamily: typographyMobilePrimary,
	marginRight: sizeRhythmHorizontal,
	marginBottom: sizeRhythmVertical / 2,
})

export const noOverflowContainer = css({
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	// minWidth: "50%",
	minWidth: "100%",
	maxWidth: "100%",
	overflow: "hidden",
	paddingBottom: sizeRhythmVertical * 2,
	flexGrow: 0,
})

export const overflowWrapper = css({
	width: "100%",
	marginTop: sizeRhythmVertical,
	flexGrow: 0,
})

export const cellStyles = css({
	width: "50%",
	height: 120,
	marginBottom: sizeRhythmVertical,
	position: "relative",
	overflow: "hidden",
})

export const cellInnerStyles = css({
	backgroundColor: colorBrandPrimary,
})

export const iconStyles = css({
	position: "absolute",
	top: 12,
	right: 12,
	backgroundColor: colorPairingsLightOnDarkBackground,
	height: 30,
	width: 30,
})

export const iconImageStyles = css({
	width: 20,
	height: 20,
})

export const linkWrapperStyles = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	top: 0,
	left: 0,
	minHeight: "100%",
	maxHeight: "100%",
	minWidth: "100%",
	maxWidth: "100%",
})

export const genericTextStyles = css({
	minWidth: "100%",
	color: colorPairingsLightOnDarkForeground,
	// margin: 0,
	padding: 0,
	width: "100%",
	textAlign: "center",
})

export const divisorStyle = css({
	fontSize: 48,
	paddingRight: "40%",
})

export const dividendStyle = css({
	fontSize: 32,
	paddingLeft: "40%",
})

export const slashStyles = css({
	transform: [{ rotate: "-25deg" }],
	maxHeight: 0,
	minWidth: 64,
	maxWidth: 64,
	borderBottomWidth: 2,
	borderBottomColor: colorPairingsLightOnDarkBackground,
	marginTop: 0,
	marginBottom: 0,
	marginRight: "auto",
	marginLeft: "auto",
	padding: 0,
})

export const boxWrapperStyles = css({
	borderRadius: 2,
	overflow: "hidden",
	backgroundColor: colorBrandPrimary,
	width: "100%",
	display: "flex",
	flex: 1,
})

export const boxStyles = css({
	display: "flex",
	width: "100%",
	paddingTop: sizeRhythmVertical * 1.5,
	paddingBottom: sizeRhythmVertical * 1.5,
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})

export const boxTextStyles = css({
	fontFamily: typographyMobilePrimary,
	color: "#fff",
	flexWrap: "wrap",
})

export const chevronStyles = css({
	backgroundColor: "#fff",
	borderRadius: 30,
	minWidth: 56,
	maxWidth: 56,
	minHeight: 56,
	maxHeight: 56,
	alignSelf: "flex-end",
})
export const bodyStyles = css({
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})
