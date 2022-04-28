import { css } from "@emotion/react"
import { colorBrandPrimary } from "@rap-theme"

export const textStyles = () =>
	css({
		borderRadius: "50%",
		width: 50,
		height: 50,
		color: "white",
		textAlign: "center",
		margin: 0,
		padding: 0,
		textDecoration: "none",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		flexDirection: "column",
	})

export const boxStyles = (style?: { width?: number; height?: number }) =>
	css({
		borderRadius: 25,
		backgroundColor: colorBrandPrimary,
		maxHeight: style?.height || 50,
		minHeight: style?.height || 50,
		maxWidth: style?.width || 50,
		minWidth: style?.width || 50,

		":hover": {
			cursor: "pointer",
		},
	})
