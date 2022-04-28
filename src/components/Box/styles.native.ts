import { css, CSSInterpolation, ReactNativeStyle } from "@emotion/native"
import {
	GenericContainerProps,
	GenericContainerPropsWithComponent,
} from "components/GenericContainer/types"
import { BoxProps } from "./types"
import { StyleSheet } from "react-native"

export const styles = (
	props: GenericContainerProps<BoxProps>,
): ReactNativeStyle =>
	css({
		padding: props.padding,
		paddingTop: props.paddingV,
		paddingBottom: props.paddingV,
		paddingLeft: props.paddingH,
		paddingRight: props.paddingH,
		margin: props.margin,
		marginTop: props.marginV,
		marginBottom: props.marginV,
		marginLeft: props.marginH,
		marginRight: props.marginH,
	})

export const flexStyles = ({
	alignContent,
	nowrap,
	verticallyAlignContent,
}: BoxProps) =>
	css({
		display: "flex",
		flexGrow: 1,
		flexShrink: 0,
		flexWrap: nowrap ? "nowrap" : "wrap",
		alignItems: alignContent,
		justifyContent: verticallyAlignContent,
	})

export const rowStyles = ({ row }: BoxProps) =>
	row
		? css({
				flexDirection: "row",
				maxWidth: "100%",
				alignItems: "flex-start",
				flexWrap: "wrap",
		  })
		: null

export const columnStyles = ({ column }: BoxProps) =>
	column
		? css({
				flexDirection: "column",
				maxWidth: "100%",
		  })
		: null

export const smallStyles = ({ small }: BoxProps) =>
	css`
		flex: ${small ?? 10};
		width: ${(small ?? 10) * 10}%;
	`

export const allStyles = (
	props: GenericContainerPropsWithComponent<BoxProps>,
) => {
	const combined = StyleSheet.flatten([
		styles(props),
		flexStyles(props),
		rowStyles(props),
		columnStyles(props),
		smallStyles(props),
		props.style as CSSInterpolation,
	])

	
	if (
		typeof combined === "object" &&
		combined &&
		!Array.isArray(combined) &&
		!combined.flex
	)
		combined.flex = 1

	return combined
}
