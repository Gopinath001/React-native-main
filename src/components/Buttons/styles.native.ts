import { css } from "@emotion/native"
import {
	colorBrandPrimary,
	colorBrandAlternative,
	typographyMobilePrimary,
} from "@rap-theme"
import { BaseButtonProps } from "./types"
import { getColourVariant, getFontColourFromVariant } from "./utils"
import { StyleSheet } from "react-native"

export const buttonStyles = ({
	fullWidth,
	variant,
	outlined,
}: BaseButtonProps) =>
	css({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		backgroundColor: outlined ? "transparent" : getColourVariant(variant),
		borderWidth: outlined ? 2 : 0,
		borderColor: getColourVariant(variant),
		borderRadius: 2,
		textAlign: "center",
		padding: 10,
		width: fullWidth ? "100%" : undefined,
		textTransform: "uppercase",
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
		fontFamily: typographyMobilePrimary,
		color: outlined
			? getColourVariant(variant)
			: getFontColourFromVariant(variant),
		margin: 0,
		textAlign: "center",
		textTransform: "uppercase",
	})

export const baseButtonStyles = (props: BaseButtonProps) =>
	StyleSheet.flatten([
		buttonStyles(props),
		props.variant?.startsWith("bordered") ? borderedStyle : undefined,
		props.variant === "bordered-primary" ? borderedPrimary : undefined,
		props.variant === "bordered-alternative" ? borderedAlternative : undefined,
		props.css,
		
	])
