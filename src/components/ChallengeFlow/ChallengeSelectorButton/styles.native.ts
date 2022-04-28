import { css } from "@emotion/native"
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
	position: "absolute",
	left: 0,
	right: 0,
	bottom: 0,
})

export const imageStyles = css({
	top: 0,
	bottom: 0,
	width: "100%",
	height: "100%",
})

export const buttonStyles = css({
	backgroundColor: colorBrandAlternative,
	borderWidth: 0,
	overflow: "hidden",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-evenly",
})

export const textStyles = css({
	color: colorPairingsLightOnDarkForeground,
})
