import { css } from "@emotion/native"
import {
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
	sizeBorderRadius,
	colorBrandPrimary,
	sizeRhythmHorizontal,
	sizeFontRegular,
	colorBrandAlternative,
	sizeFontHeading1,
} from "@rap-theme"

export const headerStyles = css({
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical * 2,
	color: colorPairingsLightOnDarkForeground,
	textTransform: "uppercase",
})

export const whiteBoxStyles = css({
	backgroundColor: colorPairingsLightOnDarkForeground,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical,
	borderRadius: sizeBorderRadius,
})

export const advertHeadline = css({
	color: colorBrandPrimary,
	textAlign: "center",
	paddingLeft: sizeRhythmHorizontal / 2,
	paddingRight: sizeRhythmHorizontal / 2,
	fontWeight: "300",
	// textTransform: "uppercase",
})

export const advertNormal = css({
	width: "100%",
	textAlign: "center",
	marginBottom: 0,
	marginTop: 0,
	fontSize: sizeFontRegular * 1.1,
	paddingTop: 4,
	paddingBottom: 4,
})

export const advertFeature = css({
	width: "100%",
	color: colorBrandAlternative,
	textAlign: "center",
	fontSize: sizeFontHeading1 * 3.5,
	// fontWeight: "700",
	margin: 0,
})

export const advertEndline = css({
	width: "100%",
	color: colorBrandAlternative,
	textAlign: "center",
	paddingTop: 4,
	paddingBottom: 4,
})
