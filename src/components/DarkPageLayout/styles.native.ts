import { css } from "@emotion/native"
import { Dimensions } from "react-native"

const dimensions = Dimensions.get("screen")

export const backgroundStyles = css({
	backgroundColor: "black",
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	zIndex: -1,
	width: dimensions.width,
	height: dimensions.height,
})
