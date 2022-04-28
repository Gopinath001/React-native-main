import { css } from "@emotion/native"
import {
	sizeBorderRadius,
	sizeRhythmVertical,
	colorBackgroundPrimary,
} from "@rap-theme"
import { FloatingCardProps } from "./types"
import { StyleSheet } from "react-native"

export const absStyles = css({
	justifyContent: "flex-end",
	marginBottom: 0,
})
export const contentStyles = (props: FloatingCardProps) => {
	return css({
		backgroundColor: "#FFFFFF",
		height: !props.open ? 0 : props.openHeight,
		borderRadius: sizeBorderRadius,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		padding: sizeRhythmVertical,
	})
}
export const overlayStyles = (_open: Boolean = false) => {
	return css({})
}

export const buttonStyles = css({
	position: "absolute",
	top: 10,
	right: 10,
	width: 35,
	height: 35,
	borderRadius: 20,
	backgroundColor: colorBackgroundPrimary,
})

export const innerContent = css({
	height: "100%",
	width: "100%",
})

export const backgroundOverlayStyles = (open: Boolean = false) =>
	StyleSheet.flatten([absStyles, overlayStyles(open)])
export const floatingContentStyles = (props: FloatingCardProps) =>
	StyleSheet.flatten([contentStyles(props), props.contentStyles])
