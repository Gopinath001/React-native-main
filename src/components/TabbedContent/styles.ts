import {
	colorBorders,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { css } from "@emotion/react"

export const tabWrapper = css({
	justifyContent: "center",
	textAlign: "center",
	marginLeft: 0,
	marginRight: 0,
})

export const containerStyles = css({
	minWidth: "100%",
	maxWidth: "100%",
	paddingLeft: sizeRhythmHorizontal / 2,
	paddingRight: sizeRhythmHorizontal / 2,
})

export const tabStyles = (active: boolean, color: string) =>
	css({
		width: "90%",
		height: "100%",
		borderBottomWidth: 5,
		borderBottomColor: active ? color : colorBorders,
		marginRight: sizeRhythmHorizontal / 2,
		marginLeft: sizeRhythmHorizontal / 2,
		marginBottom: sizeRhythmVertical,
	})
export const tabTextStyles = (active: boolean) =>
	css({
		fontSize: 14,
		margin: 0,
		marginTop: 6,
		marginBottom: 6,
		[active ? "color" : ""]: colorBorders,
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
		color: active ? "" : colorBorders,
	})

export const secondaryTabStyles = (active: boolean, color: string) => [
	tabStyles(active, color),
	secondaryStyles,
]
