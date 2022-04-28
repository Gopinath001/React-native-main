import { PropsWithChildren, useContext } from "react"
import { Box } from "../../Box"
import { Header } from "../Header"
import { GenericHeaderProps } from "../Header/types"
import { ResponsiveContext } from "providers/Responsive"
import {
	bodyStyles,
	headerBackground,
	imageHeight,
	layoutStyles,
	wavyBackgroundStyles,
} from "./styles"
import WavyBackground from "components/WaveyBackground"

export type PageLayoutProps = PropsWithChildren<GenericHeaderProps>

export function PageLayout({
	children,
	variant,
	...headerProps
}: PageLayoutProps) {
	const currentResponsiveMode = useContext(ResponsiveContext)

	const backgroundImage =
		variant === "dark" ? (
			<WavyBackground css={wavyBackgroundStyles} height={imageHeight} />
		) : null

	return (
		<>
			{backgroundImage}
			<Box css={layoutStyles} column>
				<Box
					grid
					row
					css={headerBackground(headerProps, currentResponsiveMode)}
				>
					<Header {...headerProps} />
				</Box>
				<Box grid column css={bodyStyles}>
					{children}
				</Box>
			</Box>
		</>
	)
}
