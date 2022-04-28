import {
	colorFontButtonLight,
	colorBrandAlternative,
	colorBrandPrimary,
	colorFontButtonDark,
	colorBackgroundSecondary,
} from "@rap-theme"
import { BaseButtonProps } from "./types"

export const getFontColourFromVariant = (
	variant: BaseButtonProps["variant"],
): string => {
	switch (variant) {
		case "primary":
		case "secondary":
			return colorFontButtonLight
		case "bordered-alternative":
		case "transparent":
			return colorBrandAlternative
		case "bordered-primary":
			return colorBrandPrimary
		case "none":
		default:
			return colorFontButtonDark
	}
}
export const getColourVariant = (
	variant: BaseButtonProps["variant"],
): string => {
	switch (variant) {
		case "none":
		default:
			return "transparent"
		case "primary":
			return colorBrandPrimary
		case "secondary":
			return colorBrandAlternative
		case "transparent":
			return colorBackgroundSecondary
		case "bordered-primary":
		case "bordered-alternative":
			return "transparent"
	}
}
