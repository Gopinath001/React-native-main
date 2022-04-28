import { css } from "@emotion/native"
import { colorBrandPrimary } from "@rap-theme"

export const boxStyles = (style?: { width?: number; height?: number }) =>
	css({
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 25,
		backgroundColor: colorBrandPrimary,
		maxHeight: style?.height || 50,
		minHeight: style?.height || 50,
		maxWidth: style?.width || 50,
		minWidth: style?.width || 50,
	})



export const textStyles = css({
	color: "white",
	textAlign: "center",
	width: "100%",
})
