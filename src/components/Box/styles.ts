import { css, SerializedStyles } from "@emotion/react"
import { sizeBreakpointsSmall, sizeBreakpointsMedium } from "@rap-theme"
import {
	GenericContainerProps,
	GenericContainerPropsWithComponent,
} from "components/GenericContainer/types"
import { BoxProps } from "./types"

export const styles = (
	props: GenericContainerProps<BoxProps>,
): SerializedStyles =>
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
	grid,
	alignContent,
	nowrap,
	verticallyAlignContent,
}: BoxProps) =>
	grid
		? css({
				flexWrap: nowrap ? "nowrap" : "wrap",
				display: grid ? "flex" : undefined,
				alignItems: alignContent,
				justifyContent: verticallyAlignContent,
		  })
		: null

export const rowStyles = ({ row }: BoxProps) =>
	row
		? css({
				flexDirection: "row",
		  })
		: null

export const columnStyles = ({ column }: BoxProps) =>
	column
		? css({
				flexDirection: "column",
				flexBasis: "100%",
		  })
		: null

export const smallStyles = ({ small, noMobileCollapse }: BoxProps) =>
	small && !noMobileCollapse
		? css`
				@media (max-width: ${sizeBreakpointsSmall}px) {
					flex-direction: column;
					flex: ${small} 1 ${(small ?? 10) * 10}%;
					max-width: ${(small ?? 10) * 10}%;
				}
		  `
		: null

export const mediumStyles = ({ medium }: BoxProps) =>
	medium
		? css`
				@media (min-width: ${sizeBreakpointsSmall}px) and (max-width: ${sizeBreakpointsMedium}px) {
					flex: ${medium} 1 ${(medium ?? 10) * 10}%;
					max-width: ${(medium ?? 10) * 10}%;
				}
		  `
		: null

export const largeStyles = ({ large }: BoxProps) =>
	large
		? css`
				@media (min-width: ${sizeBreakpointsMedium}px) {
					flex: ${large} 1 ${(large ?? 10) * 10}%;
					max-width: ${(large ?? 10) * 10}%;
				}
		  `
		: null

export const allStyles = (
	props: GenericContainerPropsWithComponent<BoxProps>,
) => [
	flexStyles(props),
	rowStyles(props),
	columnStyles(props),
	smallStyles(props),
	mediumStyles(props),
	largeStyles(props),
	props.css,
	props.style!,
]
