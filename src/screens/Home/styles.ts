import { css } from "@emotion/react"
import {
	colorBrandPrimary,
	colorPairingsLightOnDarkBackground,
	colorPairingsLightOnDarkForeground,
	sizeBorderRadius,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
	typographyWebPrimary,
} from "@rap-theme"

export const headingStyles = css({
	fontFamily: "Oswald",
	fontWeight: 500,
	marginLeft: sizeRhythmHorizontal / 2,
	marginRight: sizeRhythmHorizontal / 2,
	marginBottom: sizeRhythmVertical / 2,
})

export const noOverflowContainer = css({
	overflow: "hidden",
	marginLeft: sizeRhythmVertical / 2,
	marginRight: sizeRhythmVertical / 2,
})
export const overflowWrapper = css({
	marginRight: -8,
})
export const overflowStyles = css({
	maxWidth: "100%",
	marginTop: sizeRhythmVertical,
	margin: `0 -${sizeRhythmVertical / 2}px`,
})
export const cellStyles = css({
	// backgroundColor: colorBrandPrimary,
	minWidth: `calc(50% - ${sizeRhythmHorizontal / 2}px)`,
	padding: 8,
	height: "100%",
	scrollSnapAlign: "start",
	position: "relative",
	overflow: "hidden",
	":before": {
		content: "''",
		position: "absolute",
		backgroundColor: colorBrandPrimary,
		height: `calc(100% - ${sizeRhythmVertical}px)`,
		width: `calc(100% - ${sizeRhythmVertical}px)`,
		zIndex: -1,
	},
})
export const cellInnerStyles = css({
	backgroundColor: colorBrandPrimary,
	minWidth: "100%",
	maxWidth: "100%",
})
export const iconStyles = css({
	backgroundColor: colorPairingsLightOnDarkBackground,
	width: 30,
	padding: 5,
	borderRadius: sizeBorderRadius / 2,
	position: "absolute",
	top: sizeRhythmVertical,
	right: sizeRhythmHorizontal,
})
export const iconImageStyles = css({
	width: 20,
	height: 20,
})
export const genericTextStyles = css({
	color: colorPairingsLightOnDarkForeground,
	margin: 0,
	padding: 0,
})
export const dividendStyle = css({
	fontSize: 48,
	paddingLeft: "15%",
	textAlign: "left",
})
export const divisorStyle = css({
	fontSize: 42,
	paddingRight: "15%",
	textAlign: "right",
})
export const slashStyles = css({
	transform: "rotate(-25deg)",
	width: "50%",
	borderBottomWidth: 3,
	borderBottomColor: colorPairingsLightOnDarkBackground,
	margin: "0 auto",
	padding: 0,
})
export const boxWrapperStyles = css({
	position: "relative",
	borderRadius: 2,
	overflow: "hidden",
	marginTop: sizeRhythmVertical * 2,
	paddingTop: sizeRhythmVertical * 1.5,
	paddingBottom: sizeRhythmVertical * 1.5,
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
	backgroundImage: `url(/running-autumn.jpg)`,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundColor: colorBrandPrimary,
	backgroundBlendMode: "luminosity",

	":before": {
		content: '""',
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		backgroundImage:
			"linear-gradient(to right, rgb(0, 64, 74), rgb(0, 64, 74))",
		opacity: 0.6,
		zIndex: 0,
	},
})
export const boxStyles = css({
	position: "relative",
	zIndex: 1,
})
export const boxTextStyles = css({
	fontFamily: typographyWebPrimary,
	color: "#fff",
	margin: 0,
	lineHeight: 1.2,
})
export const chevronStyles = css({
	backgroundColor: "#fff",
	borderRadius: 30,
	width: 56,
	height: 56,
})

export const bodyStyles = css({
	padding: 24,
})
