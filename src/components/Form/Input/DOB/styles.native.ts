import { css } from "@emotion/native"
import {
	colorPairingsProgressForeground,
	typographyWebPrimaryLight,
	sizeRhythmHorizontal,
	colorBorders,
	colorBrandAlternative,
} from "@rap-theme"
import { StyleSheet } from "react-native"

export const containerStyles = css({
	paddingLeft: 8,
})

export const pillStyle = css({
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: colorPairingsProgressForeground,
	borderRadius: 4,
	// alignItems: "center",
	paddingTop: 4,
	paddingBottom: 4,
	paddingLeft: 8,
	paddingRight: 8,
	
})

export const avatarStyles = css({
	width: 24,
	height: 24,
})

export const textStyles = css({
	fontFamily: typographyWebPrimaryLight,
	fontWeight: "300",
	margin: 0,
	
})

export const evidenceTextStyles = css({
	color: colorBorders,
	display: "flex",
	alignItems: "center",
})

export const evidenceSvgStyles = css({
	fontSize: 20,
	marginRight: 4,
})
export const imageStyles = css({
	width: "100%",
	height: "auto",
})

export const monthStyles = css({
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})
export const exampleStyles = css({
	width: "100%",
	fontStyle: "italic",
	marginTop: 0,
})
export const errorTextStyles = css({
	color: colorBrandAlternative,
})

export const fieldsetStyles = (tooHigh: boolean, tooLow: boolean) =>
	StyleSheet.flatten([
		css({
			borderWidth: 0,
			padding: 0,
		}),
		tooHigh || tooLow
			? css({ borderLeftColor: colorBrandAlternative })
			: undefined,
	])
export const dobContainerStyles = css({
	flex: 1,
	flexDirection: "row",
	width: "100%",
	minWidth: 100,
})
