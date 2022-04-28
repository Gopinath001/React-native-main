import { css } from "@emotion/react"
import {
	colorBrandAlternative,
	colorPairingsLightOnDarkForeground,
} from "@rap-theme"

export const boxStyles = css({
	position: "relative",
	width: 172,
	height: 172,
	marginBottom: 10,
	alignContent: "center",
	borderRadius: 2,
	flex: 1,
	
})

export const absPos = css({
	flex: 1,
	position: "absolute",
	left: 0,
	right: 0,
	width: "100%",
})

export const imageStyles = css({
	width: 172,
	height: 172,
})

export const buttonStyles = css({
	backgroundColor: colorBrandAlternative,
	border: 0,
	overflow: "hidden",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-evenly",
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
})
