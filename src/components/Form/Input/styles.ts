import {
	sizeRhythmVertical,
	colorBorders,
	colorBrandPrimary,
	typographyWebSecondary,
	sizeFontBase,
	colorBrandAlternative,
} from "@rap-theme"
import { css } from "@emotion/react"
import { InputProps } from "./types"

export const styles = (
	value: string | boolean,
	inputType: InputProps["type"],
) =>
	css({
		marginBottom: sizeRhythmVertical,
		color: value ? "" : colorBorders,
		borderWidth: 0,
		borderColor: value ? colorBrandPrimary : colorBorders,
		fontFamily: typographyWebSecondary,
		fontSize: sizeFontBase,
		borderBottomWidth: 1,
		appearance:
			inputType !== "radio" && inputType !== "checkbox" ? "none" : undefined,
		paddingTop: sizeRhythmVertical / 2,
		paddingBottom: sizeRhythmVertical / 2,
		backgroundColor: "transparent",
		width: "100%",
	})

export const dateStyles = (props: InputProps) =>
	css({
		"::before": {
			content: `"${props.label ?? ""}"`,
			display: "block",
		},
		":focus:before": {
			content: `""`,
		},
		":valid:before": {
			content: `""`,
		},
	})

export const errorStyles = css({
	borderBottomColor: colorBrandAlternative,
})
