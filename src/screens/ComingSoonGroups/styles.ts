import { css } from "@emotion/react"
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
	color: colorPairingsLightOnDarkForeground,
})

export const whiteBoxStyles = css({
	backgroundColor: colorPairingsLightOnDarkForeground,
	marginBottom: sizeRhythmVertical * 2,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical,
	borderRadius: sizeBorderRadius,
})

export const advertHeadline = css({
	color: colorBrandPrimary,
	textAlign: "center",
	paddingLeft: sizeRhythmHorizontal / 2,
	paddingRight: sizeRhythmHorizontal / 2,
	fontWeight: 300,
})

export const advertNormal = css({
	textAlign: "center",
	marginBottom: 0,
	marginTop: 0,
	fontSize: sizeFontRegular * 1.1,
})

export const advertFeature = css({
	color: colorBrandAlternative,
	textAlign: "center",
	fontSize: sizeFontHeading1 * 3.5,
	// fontWeight: "700",
	margin: 0,
})

export const advertEndline = css({
	color: colorBrandAlternative,
	textAlign: "center",
})
