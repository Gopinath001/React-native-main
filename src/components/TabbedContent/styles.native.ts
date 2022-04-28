import {
	colorBorders,
	colorFontBase,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { css } from "@emotion/native"

export const containerStyles = css({
	minWidth: "100%",
	maxWidth: "100%",
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})

export const tabWrapper = css({
	maxWidth: "100%",
	marginLeft: 0,
	marginRight: 0,
})

export const tabStyles = (active: boolean, color: string) =>
	css({
		textAlign: "center",
		borderBottomWidth: 5,
		width: "100%",
		height: "100%",
		flex: 3.3,
		flexGrow: 1,
		flexShrink: 0,
		justifyContent: "flex-end",
		alignContent: "center",
		borderBottomColor: active ? color : colorBorders,
		marginBottom: sizeRhythmVertical,
		marginLeft: sizeRhythmHorizontal / 2,
		marginRight: sizeRhythmHorizontal / 2,
	})

export const tabTextStyles = (active: boolean) =>
	css({
		width: "100%",
		fontSize: 13,
		margin: 0,
		marginTop: 6,
		marginBottom: 6,
		color: active ? colorFontBase : colorBorders,
		textTransform: "uppercase",
		textAlign: "center",
	})

export const secondaryStyles = css({
	width: "100%",
	marginRight: 0,
})

export const secondaryTabTextStyles = (active: boolean) =>
	css({
		textTransform: "uppercase",
		textAlign: "center",
		marginTop: 6,
		marginBottom: 6,
		width: "100%",
		color: active ? colorFontBase : colorBorders,
	})

export const secondaryTabStyles = (active: boolean, color: string) => [
	tabStyles(active, color),
	secondaryStyles,
]
