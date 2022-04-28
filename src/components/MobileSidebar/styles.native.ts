import {
	colorBackgroundPrimary,
	colorBorders,
	colorBrandAlternative,
	colorBrandPrimary,
	sizeFontHeading4,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "../../@rap-theme"
import { css } from "@emotion/native"
import { Dimensions } from "react-native"

const dims = Dimensions.get("screen")

export const styles = css({
	position: "relative",
	justifyContent: "flex-start",
	zIndex: 200,
})

export const sidebarStyles = (_sidebarOpen: boolean) =>
	css({
		position: "absolute",
		minHeight: dims.height,
		width: dims.width * 0.85,
		backgroundColor: "#FFFFFF",
		paddingLeft: sizeRhythmHorizontal * 2,
		paddingRight: sizeRhythmHorizontal,
		paddingTop: sizeRhythmVertical * 2,
		paddingBottom: sizeRhythmVertical * 2,
		justifyContent: "flex-start",
		zIndex: 1000,
	})

export const closeStyles = css({
	padding: 4,
	width: 32,
	maxWidth: 32,
	height: 32,
	borderRadius: 16,
	backgroundColor: colorBackgroundPrimary,
})

export const userStyles = css({
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
	color: "#000000",
})

export const linkStyles = css({
	color: colorBrandAlternative,
	textTransform: "uppercase",
	paddingVertical: sizeRhythmVertical / 2,
})

export const secondarylinkRowStyles = css({
	display: "flex",
	flexDirection: "row",
	marginBottom: 10,
	flex: 1,
	height: 35,
	flexGrow: 0,
	flexShrink: 1,
})
export const secondarylinkStyles = css({
	color: colorBrandPrimary,
	fontSize: sizeFontHeading4,
})

export const rowStyles = css({
	width: "100%",
	borderTopWidth: 1,
	borderTopColor: colorBorders,
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical / 2,
	marginBottom: 10,
	flexGrow: 0,
	flexShrink: 1,
})

export const secondaryRowStyles = css({
	// marginTop: sizeRhythmVertical,
})
export const profileSectionStyles = css({
	flex: 1,
	flexGrow: 0,
	flexShrink: 1,
})
export const headerStyles = css({
	flex: 1,
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	flexGrow: 0,
	flexShrink: 1,
	marginBottom: sizeRhythmVertical,
})
export const avatarStyles = css({})
