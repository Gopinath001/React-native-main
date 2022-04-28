import { GenericContainerProps } from "../GenericContainer/types"
import { TextProps } from "./types"
import { TextGeneric } from "./TextGeneric"
import { css } from "@emotion/react"
import {
	typographyMobilePrimaryLight,
	typographyWebPrimary,
	typographyWebSecondary,
	typographyWebPrimaryBold,
	typographyWebButtons,
	typographyWebAdditional,
	colorBrandPrimary,
	sizeRhythmHorizontal,
} from "../../@rap-theme"
import { Link } from "components/Link"

const fontFamilyFromVariant = (
	variant: TextProps["variant"],
	bold: boolean = false,
	italic: boolean = false,
):
	| typeof typographyMobilePrimaryLight
	| typeof typographyWebPrimary
	| typeof typographyWebSecondary
	| typeof typographyWebAdditional
	| typeof typographyWebPrimaryBold => {
	switch (variant) {
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5": {
			
			if (bold || italic) return typographyWebPrimaryBold
			return typographyWebPrimary
		}
		case "button":
			return typographyWebButtons
		case "paragraph":
		case "inline":
		default:
			return typographyWebSecondary
	}
}

const P = ({
	className,
	children,
	variant,
	href,
	title,
	onPress,
}: GenericContainerProps<TextProps>): JSX.Element => {
	switch (variant) {
		case "link":
			return (
				<Link href={href!} title={title!} onClick={onPress!}>
					{children}
				</Link>
			)
		case "inline":
			return (
				<span className={className} onClick={onPress}>
					{children}
				</span>
			)
		case "paragraph":
		default:
			return (
				<p className={className} onClick={onPress}>
					{children}
				</p>
			)
		case "h1":
			return (
				<h1 className={className} onClick={onPress}>
					{children}
				</h1>
			)
		case "h2":
			return (
				<h2 className={className} onClick={onPress}>
					{children}
				</h2>
			)
		case "h3":
			return (
				<h3 className={className} onClick={onPress}>
					{children}
				</h3>
			)
		case "h4":
			return (
				<h4 className={className} onClick={onPress}>
					{children}
				</h4>
			)
		case "h5":
			return (
				<h5 className={className} onClick={onPress}>
					{children}
				</h5>
			)
	}
}

export const Text = (props: GenericContainerProps<TextProps>): JSX.Element => {
	const fonts = css({
		fontFamily: fontFamilyFromVariant(props.variant, props.bold, false),
		fontWeight: props.bold ? 700 : props.light ? 200 : 500,
		textTransform: props.variant?.startsWith("h") ? "uppercase" : undefined,
	})
	const accent = props.accent
		? css({
				borderLeftWidth: 5,
				borderLeftColor: colorBrandPrimary,
				borderLeftStyle: "solid",
				paddingLeft: sizeRhythmHorizontal / 2,
		  })
		: null
	const margin =
		typeof props.margin !== "undefined" && !props.margin
			? css({
					margin: 0,
			  })
			: null
	return (
		<TextGeneric<TextProps>
			{...props}
			withComponent={P}
			css={[margin, accent, fonts, props.css]}
		/>
	)
}
