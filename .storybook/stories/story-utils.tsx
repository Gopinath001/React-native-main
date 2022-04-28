import React, { PropsWithChildren } from "react"
import { RapThemeProvider } from "providers/theme"

export const DimensionsSizeEnumSelect = {
	control: {
		type: "radio",
		options: [0, 8, 16],
	},
}

export const PaddingArgTypes = {
	padding: DimensionsSizeEnumSelect,
	paddingH: DimensionsSizeEnumSelect,
	paddingV: DimensionsSizeEnumSelect,
}

export const MarginArgTypes = {
	margin: DimensionsSizeEnumSelect,
	marginH: DimensionsSizeEnumSelect,
	marginV: DimensionsSizeEnumSelect,
}

export const StyleVariantBools = {
	backgroundColor: {
		type: "color",
	},
	rounded: {
		type: "boolean",
		value: false,
		default: false,
	},
}

export const StorybookProviders = ({
	children,
}: PropsWithChildren<{}>): JSX.Element => (
	<RapThemeProvider>{children}</RapThemeProvider>
)
