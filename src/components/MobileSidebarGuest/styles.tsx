import { css } from "@emotion/react"
import {
	sizeRhythmHorizontal,
	sizeRhythmVertical,
	colorBackgroundPrimary,
	sizeFontHeading4,
	colorBrandAlternative,
	colorBorders,
} from "@rap-theme"

export const styles = css({
	position: "relative",
	height: 50,
})

export const sidebarStyles = (open: boolean) =>
	css({
		position: "absolute",
		zIndex: 2,
		top: 0,
		right: open ? 0 : "-100%",
		height: "100%",
		width: "85%",
		maxWidth: 500,
		backgroundColor: "white",
		paddingLeft: sizeRhythmHorizontal * 2,
		paddingRight: sizeRhythmHorizontal,
		paddingTop: sizeRhythmVertical * 2,
		paddingBottom: sizeRhythmVertical * 2,
		overflow: "hidden",
	})

export const closeStyles = css({
	marginLeft: "auto",
	padding: 4,
	width: 32,
	height: 32,
	borderRadius: 16,
	backgroundColor: colorBackgroundPrimary,
	cursor: "pointer",
	marginBottom: sizeRhythmVertical,
})

export const userStyles = css({
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
	margin: "auto 0",
})

export const linkStyles = css({
	display: "flex",
	color: colorBrandAlternative,
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical / 2,
	margin: 0,
	cursor: "pointer",
})

export const rowStyles = css({
	borderTopWidth: 1,
	borderTopColor: colorBorders,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical / 2,
})
