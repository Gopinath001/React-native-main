import { useContext } from "react"
import { UserContext } from "providers/User"
import { Avatar } from "../../Avatar"
import { Box } from "../../Box"
import { GenericContainerPropsWithComponent } from "../../GenericContainer/types"
import { Logo } from "../../Logo"
import { GenericHeaderProps } from "./types"
import { useHistory, useLocation } from "react-router-dom"
import { colorBrandPrimary, colorBackgroundSecondary } from "@rap-theme"
import { ChevronButton } from "../../Buttons/Chevron"
import { Link } from "components/Link"
import { backButtonStyles, headerStyles } from "./styles"
import { ChevronButtonDirection } from "components/Buttons/Chevron/types"
import { SidebarContext } from "providers/Sidebar"
import { Button } from "components/Buttons"
import { HamburgerIcon } from "icons/Hamburger"

export function GenericHeader<T>(
	props: GenericContainerPropsWithComponent<GenericHeaderProps & T>,
) {
	const { user, selectedProfile } = useContext(UserContext)
	const sidebarContext = useContext(SidebarContext)
	const history = useHistory()

	const avatarOrLink = selectedProfile ? (
		<Avatar
			user={selectedProfile}
			onPress={() => sidebarContext.setSidebarOpen(!sidebarContext.open)}
		/>
	) : (
		<Button
			onPress={() => sidebarContext.setSidebarOpen(!sidebarContext.open)}
			variant="transparent"
			css={{
				backgroundColor: props.variant === "dark" ?? "transparent",
				maxWidth: 22,
			}}
		>
			<HamburgerIcon
				fill={props.variant === "dark" ? "#fff" : colorBrandPrimary}
			/>
		</Button>
	)

	const location = useLocation()

	return (
		<Box {...props} row css={[headerStyles, props.css, props.style]}>
			<Box
				style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}
			>
				{user && location.pathname != "/" && location.pathname !== "/auth" && (
					<Box>
						<ChevronButton
							fill={
								props.variant == "dark"
									? colorBackgroundSecondary
									: colorBrandPrimary
							}
							css={backButtonStyles}
							direction={ChevronButtonDirection.LEFT}
							onPress={() => history.goBack()}
						/>
					</Box>
				)}
			</Box>
			<Box
				css={{
					justifyContent: "center",
					alignItems: "center",
					alignContent: "center",
				}}
			>
				<Link href="/" title="Race at Your Pace">
					<Logo
						width={29.6}
						height={40}
						text={false}
						color={colorBrandPrimary}
					/>
				</Link>
			</Box>

			<Box
				css={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-end",
					paddingHorizontal: 0,
				}}
			>
				{avatarOrLink}
			</Box>
		</Box>
	)
}
