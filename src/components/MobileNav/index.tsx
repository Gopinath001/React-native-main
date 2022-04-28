import { Box } from "../Box"
import { colorBorders, colorBrandAlternative } from "../../@rap-theme"
import { PropsWithChildren, useContext, useState } from "react"
import { Text } from "../Text"
import { Logo } from "../Logo"
import { ResponsiveContext } from "providers/Responsive"
import { HomeOutlinedIcon } from "icons/HomeOutlined"
import { StarsOutlinedIcon } from "icons/StarsOutlined"
import { ControlPointOutlinedIcon } from "icons/ControlPointOutlined"
import { GroupOutlinedIcon } from "icons/GroupOutlined"
import { Link } from "components/Link"
import {
	brandButtonStyles,
	brandContainerStyles,
	linkStyles,
	navStyles,
	mobileNavStyles,
} from "./styles"
import { css } from "@emotion/react"
import { useLocation } from "react-router"
import { RouterState } from "../../routes"
function NavButton({ to, children }: PropsWithChildren<{ to: string }>) {
	return (
		<Box
			grid
			column
			small={2}
			medium={2}
			large={2}
			css={navStyles}
			alignContent="center"
			verticallyAlignContent="center"
		>
			<Link css={linkStyles} href={to} title={to}>
				<Box grid column alignContent="center" verticallyAlignContent="center">
					{children}
				</Box>
			</Link>
		</Box>
	)
}

function BrandButton() {
	const currentResponsiveMode = useContext(ResponsiveContext)

	return (
		<Box
			grid
			small={2}
			medium={2}
			alignContent="center"
			css={{ width: "100%", position: "relative" }}
		>
			<Box css={brandContainerStyles(currentResponsiveMode)}>
				<Box
					grid
					css={css({
						width: "125%",
						height: "100%",
						position: "absolute",
						top: "56.1%",
						left: -3,
						backgroundColor: "#FFFFFF",
						zIndex: 1,
					})}
				/>
				<Box
					grid
					css={brandButtonStyles}
					alignContent="center"
					verticallyAlignContent="center"
				>
					<Link href="/tracker" title="Tracker">
						<Logo height={30} width={50} text={false} color="#FFFFFF" />
					</Link>
				</Box>
			</Box>
		</Box>
	)
}

export function MobileNav() {
	const location = useLocation<RouterState>()
	return (
		<Box grid row nowrap css={mobileNavStyles} verticallyAlignContent="center">
			<NavButton to="/">
				<HomeOutlinedIcon
					fill={
						location.pathname == "/" || location.pathname == "/auth"
							? colorBrandAlternative
							: colorBorders
					}
				/>
				<Text
					css={{
						color:
							location.pathname == "/" || location.pathname == "/auth"
								? colorBrandAlternative
								: colorBorders,
					}}
				>
					Home
				</Text>
			</NavButton>
			<NavButton to="/challenges">
				<StarsOutlinedIcon
					fill={
						location.pathname == "/challenges"
							? colorBrandAlternative
							: colorBorders
					}
				/>
				<Box row>
					<Text
						css={{
							color:
								location.pathname == "/challenges"
									? colorBrandAlternative
									: colorBorders,
						}}
					>
						Challenges
					</Text>
				</Box>
			</NavButton>
			<BrandButton />
			<NavButton to="/join/entry">
				<ControlPointOutlinedIcon
					fill={
						location.pathname == "/join/entry"
							? colorBrandAlternative
							: colorBorders
					}
				/>
				<Text
					css={{
						color:
							location.pathname == "/join/entry"
								? colorBrandAlternative
								: colorBorders,
					}}
				>
					Join
				</Text>
			</NavButton>
			<NavButton to="/groups">
				<GroupOutlinedIcon
					fill={
						location.pathname == "/groups"
							? colorBrandAlternative
							: colorBorders
					}
				/>
				<Text
					css={{
						color:
							location.pathname == "/groups"
								? colorBrandAlternative
								: colorBorders,
					}}
				>
					Groups
				</Text>
			</NavButton>
		</Box>
	)
}
