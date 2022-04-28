import { css } from "@emotion/native"
import { Dimensions } from "react-native"

const dimensions = Dimensions.get("window")

export const layoutStyles = css({
	justifyContent: "flex-start",
})
export const contentStyles = css({
	width: dimensions.width,
	height: dimensions.height,
})

export const imageHeight = dimensions.height
