import { css } from "@emotion/react"
import { colorBorders, sizeRhythmVertical } from "@rap-theme"

export const plusStyles = css({
	backgroundColor: colorBorders,
	borderRadius: 25,
	width: 50,
	height: 50,
	textAlign: "center",
	alignItems: "center",
	justifyContent: "center",
	maxWidth: 50,
})

export const addProfileRowStyles = css({
	marginBottom: sizeRhythmVertical,
	width: "100%",
})

export const addProfileTextStyles = css({
	color: colorBorders,
	textTransform: "uppercase",
	alignSelf: "center",
})
