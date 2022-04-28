import { css } from "@emotion/native"
import {
	sizeFontHeading4,
	colorBrandPrimary,
	sizeRhythmHorizontal,
	colorBrandAlternative,
	sizeRhythmVertical,
	colorBorders,
} from "@rap-theme"

export const dateStyles = css({
	fontSize: sizeFontHeading4,
	margin: 0,
})

export const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	padding: 5,
	minWidth: 40,
	minHeight: 40,
	marginRight: sizeRhythmHorizontal / 1.5,
	flexGrow: 0,
})

export const chevronButtonStyles = css({
	borderRadius: 16,
	maxWidth: "auto",
	width: 32,
	maxHeight: 32,
})
export const moreStyles = css({
	width: 32,
	height: 32,
	margin: 0,
	padding: 0,
})
export const moreButtonStyles = css({
	borderWidth: 2,
	borderStyle: "solid",
	borderColor: colorBrandAlternative,
	borderRadius: 16,
	margin: 0,
	padding: 0,
	maxWidth: 32,
	maxHeight: 32,
})
export const timelineHeadingStyle = css({
	margin: 0,
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical,
})

export const avatarStyles = css({
	width: 40,
	height: 40,
})
export const iconImageStyles = css({})

export const challengeRowStyles = css({
	width: "100%",
	marginBottom: sizeRhythmVertical,
})

export const progressWrapper = css({
	width: "100%",
	marginTop: sizeRhythmVertical / 2,
	marginBottom: sizeRhythmVertical,
	display: "flex",
})
export const progressColumn = css({
	position: "relative",
	height: 35,
	borderRadius: 35,
	width: "100%",
	paddingLeft: sizeRhythmHorizontal / 2,
	paddingRight: sizeRhythmHorizontal / 2,
})

export const displayStyles = css({
	textTransform: "uppercase",
	color: colorBrandPrimary,
})

export const buttonStyles = css({
	marginLeft: sizeRhythmHorizontal * 2,
	borderBottomWidth: 1,
	borderBottomColor: colorBorders,
})

export const labelStyles = css({
	color: colorBrandPrimary,
	margin: 0,
	textTransform: "uppercase",
})

export const accordionRowTitleStyles = css({
	display: "flex",
	flexDirection: "row",
	alignContent: "center",
	justifyContent: "center",
	height: "100%",
})
