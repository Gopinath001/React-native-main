import { PropsWithChildren, useContext } from "react"
import { Box } from "../../Box"
import { Header } from "../Header"
import { GenericHeaderProps } from "../Header/types"
import { ResponsiveContext } from "providers/Responsive"
import {
	bodyStyles,
	guestHamburgerStyles,
	headerBackground,
	imageHeight,
	layoutStyles,
	wavyBackgroundStyles,
} from "./styles.native"
import WavyBackground from "components/WaveyBackground"
import { UserContext } from "providers/User"
import { colorBackgroundSecondary, colorBrandPrimary } from "@rap-theme"
import { Button } from "components/Buttons"
import { MobileSidebar } from "components/MobileSidebar"
import { MobileSidebarGuest } from "components/MobileSidebarGuest"
import { HamburgerIcon } from "icons/Hamburger"
import { SidebarContext } from "providers/Sidebar"
import { LayoutThemeContext } from "providers/LayoutTheme"
import MenuDrawer from "react-native-side-drawer"
import LinearGradient from "react-native-linear-gradient"

export type PageLayoutProps = PropsWithChildren<GenericHeaderProps>

export function PageLayout({
	children,
	variant,
	...headerProps
}: PageLayoutProps) {
	const sidebarContext = useContext(SidebarContext)
	const { theme } = useContext(LayoutThemeContext)
	const { user } = useContext(UserContext)

	const avatarOrLink = user ? (
		<MobileSidebar
			user={user}
			isOpen={sidebarContext.open}
			onClose={() => sidebarContext.setSidebarOpen(!sidebarContext.open)}
		/>
	) : (
		<MobileSidebarGuest
			isOpen={sidebarContext.open}
			onClose={() => sidebarContext.setSidebarOpen(!sidebarContext.open)}
			anchorEl={
				<Box
					grid
					column
					small={1}
					medium={1}
					large={1}
					css={guestHamburgerStyles}
				>
					<Button
						onPress={() => {
							sidebarContext.setSidebarOpen(!sidebarContext.open)
						}}
						variant="transparent"
					>
						<HamburgerIcon
							fill={
								variant == "dark" ? colorBackgroundSecondary : colorBrandPrimary
							}
						/>
					</Button>
				</Box>
			}
		/>
	)
	const currentResponsiveMode = useContext(ResponsiveContext)

	const backgroundImage =
		(theme ?? variant) === "dark" ? (
			<WavyBackground css={wavyBackgroundStyles} height={imageHeight} />
		) : null

	return (
		<>
			<LinearGradient colors={["#ffffff", "#edf4f5"]}>
				<Box
					css={[
						layoutStyles,
						{ paddingBottom: (theme ?? variant) === "dark" ? undefined : 48 },
					]}
					grid
					column
					nowrap
				>
					<Box css={headerBackground(headerProps, currentResponsiveMode)}>
						<Header {...headerProps} variant={variant} />
					</Box>
					<Box grid row css={bodyStyles}>
						{children}
					</Box>
					{backgroundImage}
				</Box>
				<MenuDrawer
					open={sidebarContext.open}
					drawerContent={avatarOrLink}
					drawerPercentage={85}
					animationTime={250}
					overlay={sidebarContext.open}
					opacity={0.5}
					position="right"
				/>
			</LinearGradient>
		</>
	)
}
