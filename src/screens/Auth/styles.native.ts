import { css } from "@emotion/native"
import { sizeRhythmVertical, sizeRhythmHorizontal } from "@rap-theme"
import { Dimensions } from "react-native"

const dimensions = Dimensions.get("screen")

export const buttonStyles = css({
	width: "100%",
	textAlign: "center",
	marginBottom: sizeRhythmVertical / 2,
})

export const containerStyles = css({
	height: "100%",
	width: "100%",
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
})

export const logoStyles = css({
	width: dimensions.width,
	marginBottom: sizeRhythmVertical * 5,
	alignContent: "flex-end",
})

export const headingStyles = css({
	marginTop: sizeRhythmVertical * 2,
	marginBottom: sizeRhythmVertical,
})

export const overlayStyles = css({
	opacity: 0.5,
	backgroundColor: "black",
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
})
