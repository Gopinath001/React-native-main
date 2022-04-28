import { Linking, Pressable, Text as RNText, ViewProps } from "react-native"
import { GenericContainerProps } from "../GenericContainer/types"
import { TextProps } from "./types"
import { TextGeneric } from "./TextGeneric"
import {
	colorBrandPrimary,
	sizeFontHeading1,
	sizeFontHeading2,
	sizeFontHeading3,
	sizeFontHeading4,
	sizeFontHeading5,
	sizeRhythmHorizontal,
	typographyMobilePrimary,
	typographyMobilePrimaryBold,
	typographyMobilePrimaryLight,
	typographyMobileSecondary,
} from "@rap-theme"
import { css } from "@emotion/native"
import { PropsWithChildren } from "react"
import { useHistory } from "react-router"

const fontFamilyFromVariant = (
	variant: TextProps["variant"],
	bold: boolean = false,
	light: boolean = false,
):
	| typeof typographyMobilePrimary
	| typeof typographyMobileSecondary
	| typeof typographyMobilePrimaryBold => {
	switch (variant) {
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5":
			// @ts-ignore
			if (light) return typographyMobilePrimaryLight
			return typographyMobilePrimaryBold
		case "paragraph":
		case "inline":
		case "button":
		default:
			if (bold) return typographyMobilePrimaryBold
			// FIXME
			// @ts-ignore
			if (light) return typographyMobilePrimaryLight
			return typographyMobileSecondary
	}
}

const fontSizeFromVariant = (variant: TextProps["variant"]): number => {
	switch (variant) {
		case "h1":
			return sizeFontHeading1
		case "h2":
			return sizeFontHeading2
		case "h3":
			return sizeFontHeading3
		case "h4":
			return sizeFontHeading4
		case "h5":
		case "paragraph":
		case "inline":
		case "button":
		default:
			return sizeFontHeading5
	}
}

const accessibilityRoleFromVariant = (
	variant: TextProps["variant"],
): ViewProps["accessibilityRole"] => {
	switch (variant) {
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5":
			return "header"
		case "paragraph":
		case "inline":
		case "button":
		default:
			return "text"
	}
}
const accessibilityLevelFromVariant = (
	variant: TextProps["variant"],
): number => {
	switch (variant) {
		case "h1":
			return 1
		case "h2":
			return 2
		case "h3":
			return 3
		case "h4":
			return 4
		case "h5":
			return 5
		case "paragraph":
		case "inline":
		case "button":
		default:
			return 1
	}
}

export function Text(
	props: GenericContainerProps<TextProps & ViewProps>,
): JSX.Element {
	const nav = useHistory()
	const accent = props.accent
		? css({
				borderLeftWidth: 5,
				borderLeftColor: colorBrandPrimary,
				paddingLeft: sizeRhythmHorizontal,
		  })
		: null
	const Wrapper = props.href
		? ({ children }: PropsWithChildren<{}>) => {
				return (
					<Pressable
						onPress={() => {
							if (!props.href) return
							if (props.href.startsWith("http")) Linking.openURL(props.href)
							else nav.push(props.href)
						}}
					>
						{children}
					</Pressable>
				)
		  }
		: ({ children }: PropsWithChildren<{}>) => <>{children}</>

	return (
		<Wrapper>
			<TextGeneric<TextProps>
				{...props}
				aria-level={accessibilityLevelFromVariant(props.variant)}
				style={[
					{
						fontFamily: fontFamilyFromVariant(
							props.variant,
							!!props.bold,
							!!props.light,
						),
						fontSize: fontSizeFromVariant(props.variant),
						flexShrink: 1,
						maxWidth: "100%",
						flexWrap: "wrap",
						textTransform:
							props.variant === "button" || props.variant?.startsWith("h")
								? "uppercase"
								: "none",
					},
					props.style,
					accent,
					props.style,
				]}
				withComponent={RNText}
			/>
		</Wrapper>
	)
}
