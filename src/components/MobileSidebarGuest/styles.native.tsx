import { css } from "@emotion/native"
import {
	sizeRhythmVertical,
	colorBackgroundPrimary,
	sizeFontHeading4,
	colorBrandAlternative,
	colorBorders,
} from "@rap-theme"
import { Dimensions } from "react-native"

const dimensions = Dimensions.get("screen")

export const styles = css({
	position: "absolute",
	height: "100%",
})

export const guestHeaderStyles = css({
	flex: 1,
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
})

export const closeStyles = css({
	marginLeft: "auto",
	padding: 4,
	maxWidth: 32,
	height: 32,
	borderRadius: 16,
	backgroundColor: colorBackgroundPrimary,
	marginBottom: sizeRhythmVertical,
})

export const userStyles = css({
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
})

export const linkStyles = css({
	display: "flex",
	color: colorBrandAlternative,
	fontSize: sizeFontHeading4,
	textTransform: "uppercase",
	paddingTop: sizeRhythmVertical / 2,
	paddingBottom: sizeRhythmVertical / 2,
	margin: 0,
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
