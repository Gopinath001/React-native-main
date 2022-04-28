import { css } from "@emotion/react"
import {
	colorBorders,
	colorBrandPrimary,
	colorBrandAlternative,
} from "@rap-theme"
import { BaseButtonProps } from "./types"
import { getColourVariant, getFontColourFromVariant } from "./utils"

export const buttonStyles = ({
	noHoverShadow,
	fullWidth,
	variant,
	outlined,
}: BaseButtonProps) =>
	css({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: outlined ? "transparent" : getColourVariant(variant),
		borderWidth: outlined ? 2 : 0,
		borderColor: getColourVariant(variant),
		borderRadius: 2,
		textAlign: "center",
		padding: 10,
		width: fullWidth ? "100%" : undefined,

		boxShadow: noHoverShadow ? "" : "0 0 0 rgba(0, 0, 0, 0.15)",
		textTransform: "uppercase",

		":hover": {
			cursor: "pointer",
		},

		":disabled": {
			opacity: 0.5,
			backgroundColor: colorBorders,
		},
	})

export const borderedStyle = css({
	borderStyle: "solid",
	borderWidth: 2,
	borderColor: "transparent",
})

export const borderedPrimary = css({
	borderColor: colorBrandPrimary,
})

export const borderedAlternative = css({
	borderColor: colorBrandAlternative,
})
export const buttonTextStyles = ({ variant, outlined }: BaseButtonProps) =>
	css({
		fontFamily: "Oswald",
		color: outlined
			? getColourVariant(variant)
			: getFontColourFromVariant(variant),
		margin: 0,
		padding: 0,
	})

export const baseButtonStyles = (props: BaseButtonProps) => [
	buttonStyles,
	props.variant?.startsWith("bordered") ? borderedStyle : undefined,
	props.variant === "bordered-primary" ? borderedPrimary : undefined,
	props.variant === "bordered-alternative" ? borderedAlternative : undefined,
	props.css,
]
