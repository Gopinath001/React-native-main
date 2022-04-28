import { css } from "@emotion/native"
import { Dimensions } from "react-native"

const dimensions = Dimensions.get("screen")

export const layoutStyles = css({
	minHeight: dimensions.height,
	width: dimensions.width,
	maxWidth: dimensions.width,
	justifyContent: "flex-start",
	alignItems: "flex-start",
	alignContent: "flex-start",
})


export const headerBackground = (_h: any, _r: any) =>
	css({
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 10,
		paddingRight: 10,
		width: dimensions.width,
		flexGrow: 0,
		zIndex: 1,
	})

export const bodyStyles = css({
	paddingBottom: 30,
	zIndex: 1,
})

export const wavyBackgroundStyles = css({
	position: "absolute",
	top: 0,
	left: -75,
	bottom: 0,
	right: 0,
	zIndex: 0,
})

export const imageHeight = dimensions.height

export const guestHamburgerStyles = css({
	flex: 1,
	flexGrow: 0,
	flexShrink: 1,
	backgroundColor: "transparent",
})
