import { css } from "@emotion/react"
import {
	typographyWebPrimary,
	typographyWebPrimaryLight,
	sizeFontHeading4,
	colorBrandPrimary,
	sizeRhythmHorizontal,
	colorBrandAlternative,
	sizeRhythmVertical,
	colorBorders,
	colorPairingsProgressForeground,
} from "@rap-theme"

export const dateStyles = css({
	fontFamily: typographyWebPrimary,
	fontSize: sizeFontHeading4,
	lineHeight: 1.1,
})

export const chevronButtonStyles = css({
	borderRadius: 16,
	maxWidth: "auto",
	width: 32,
	height: 32,
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
	width: 32,
	height: 32,
})
export const timelineHeadingStyle = css({
	margin: 0,
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical,
})
export const avatarStyles = css({
	width: 24,
	height: 24,

	p: {
		fontSize: 10,
		width: 24,
		height: 24,
	},
})

export const challengeRowStyles = css({
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
	margin: "auto 0",
	textTransform: "uppercase",
	color: colorBrandPrimary,
	fontFamily: "Oswald",
})

export const buttonStyles = css({
	":not(:last-child)": {
		marginRight: sizeRhythmHorizontal * 2,
		marginLeft: sizeRhythmHorizontal * 2,
		borderBottomWidth: 1,
		borderBottomColor: colorBorders,
	},
	p: {
		fontSize: 20,
	},
})

export const containerStyles = css({
	paddingLeft: 8,
	justifyContent: "flex-start",
})

export const pillStyle = css({
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: colorPairingsProgressForeground,
	borderRadius: 4,
	alignItems: "center",
	paddingTop: 4,
	paddingBottom: 4,
	paddingLeft: 6,
	paddingRight: 6,
})

export const cardAvatarStyles = css({
	width: 48,
	height: 48,

	p: {
		fontSize: 16,
		width: 24,
		height: 24,
	},
})

export const textStyles = css({
	fontFamily: typographyWebPrimaryLight,
	fontWeight: 300,
	margin: 0,
	marginLeft: sizeRhythmHorizontal / 2,
})

export const gridStyles = css({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: sizeRhythmHorizontal,
})

export const labelStyles = css({
	color: colorBrandPrimary,
	margin: 0,
})

export const valueStyles = css({
	margin: 0,
})

export const evidenceTextStyles = css({
	color: colorBorders,
	display: "flex",
	alignItems: "center",
	svg: {
		fontSize: 20,
		marginRight: 4,
	},
})

export const headingStyles = css({
	fontWeight: 900,
	marginBottom: sizeRhythmVertical * 2,
})

export const iconStyles = css({
	// display: "inline-flex",
	backgroundColor: colorBrandPrimary,
	padding: 5,
	width: 32,
	height: 32,
})

export const iconImageStyles = css({
	
})

export const detailStyles = css({
	borderBottom: `1px solid ${colorBorders}`,
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical * 1.5,
	marginBottom: sizeRhythmVertical,
	
})

export const actionsStyles = css({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: sizeRhythmHorizontal / 2,
	marginTop: sizeRhythmVertical * 2,
})

export const previewImageStyles = css({
	position: "absolute",
	zIndex: 10,
	left: "50%",
	top: "50%",
	maxWidth: "100%",
	maxHeight: "80vh",
	transform: "translate(-50%, -50%)",
})
export const accordionRowTitleStyles = css({
	display: "flex",
	flexDirection: "row",
	alignContent: "center",
	justifyContent: "center",
	height: "100%",
})
