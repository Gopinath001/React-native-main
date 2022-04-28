import { css } from "@emotion/native"
import { sizeRhythmHorizontal, sizeFontHeading2 } from "@rap-theme"
import { Dimensions } from "react-native"

const dims = Dimensions.get("window")

export const containerStyles = css({
	flex: 1,
	flexWrap: "wrap",
	flexDirection: "row",
	width: "100%",
	alignItems: "flex-start",
	flexGrow: undefined,
})
export const gutterStyles = css({
	paddingTop: sizeRhythmHorizontal / 2,
	paddingBottom: sizeRhythmHorizontal / 2,
	flexBasis: "50%",
	height: dims.width / 2,
})
export const horizontalRhythm = css({})

export const dateStyles = css({
	fontSize: sizeFontHeading2,
})
