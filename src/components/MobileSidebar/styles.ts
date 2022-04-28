import {
	colorBackgroundPrimary,
	colorBorders,
	colorBrandAlternative,
	colorBrandPrimary,
	sizeFontHeading4,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "../../@rap-theme"
import { css } from "@emotion/react"

export const styles = css({
	position: "relative",
})

export const sidebarStyles = (sidebarOpen: boolean) =>
	css({
		position: "absolute",
		zIndex: 2,
		top: 0,
		right: sidebarOpen ? "-100%" : 0,
		height: "100%",
		width: "85%",
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
})

export const userStyles = css({
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
	margin: "auto 0",
	marginLeft: sizeRhythmHorizontal,
})

export const linkStyles = css({
	display: "block",
	color: colorBrandAlternative,
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical / 2,
	margin: 0,
	cursor: "pointer",
})

export const secondarylinkRowStyles = css({
	paddingVertical: 10,
})
export const secondarylinkStyles = css({
	display: "block",
	color: colorBrandPrimary,
	fontSize: sizeFontHeading4,
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical / 2,
	cursor: "pointer",
})

export const rowStyles = css({
	borderTop: `1px solid ${colorBorders}`,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical / 2,
})

export const secondaryRowStyles = css({
	
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical / 2,
})

export const profileSectionStyles = css({})
export const headerStyles = css({})
