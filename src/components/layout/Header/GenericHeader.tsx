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
	) : null

	const location = useLocation()

	return (
		<Box
			{...props}
			css={[headerStyles, props.css, props.style]}
			grid
			row
			small={10}
			medium={10}
			large={10}
		>
			<Box
				grid
				column
				small={3.3}
				medium={3.3}
				large={3.3}
				alignContent="flex-start"
				verticallyAlignContent="flex-start"
			>
				{user && location.pathname != "/" && location.pathname !== "/auth" && (
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
				)}
			</Box>
			<Box
				grid
				column
				small={3.3}
				medium={3.3}
				large={3.3}
				verticallyAlignContent="center"
				alignContent="center"
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
				grid
				column
				small={3.3}
				medium={3.3}
				large={3.3}
				verticallyAlignContent="center"
				alignContent={"flex-end"}
			>
				<Box grid row nowrap>
					<Box
						grid
						column
						small={3.3}
						medium={3.3}
						large={3.3}
						alignContent={"flex-end"}
					>
						{avatarOrLink}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
