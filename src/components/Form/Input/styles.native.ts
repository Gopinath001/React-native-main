import {
	sizeRhythmVertical,
	colorBorders,
	colorBrandPrimary,
	typographyWebSecondary,
	sizeFontBase,
	colorBrandAlternative,
	colorFontBase,
} from "@rap-theme"
import { css } from "@emotion/native"
import { InputProps } from "./types"

export const styles = (
	value: string | boolean,
	_inputType: InputProps["type"],
) =>
	css({
		marginBottom: sizeRhythmVertical,
		color: value ? colorFontBase : colorBorders,
		borderWidth: 0,
		borderColor: value ? colorBrandPrimary : colorBorders,
		fontFamily: typographyWebSecondary,
		fontSize: sizeFontBase,
		borderBottomWidth: 1,
		paddingTop: sizeRhythmVertical / 2,
		paddingBottom: sizeRhythmVertical / 2,
		width: "100%",
	})

export const dateStyles = (_props: InputProps) => css({})

export const errorStyles = css({
	borderBottomColor: colorBrandAlternative,
})
