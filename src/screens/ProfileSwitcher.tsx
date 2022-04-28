import { Loading } from "components/Loading"
import { UserContext } from "providers/User"
import {
	useAllProfilesQuery,
	UserProfile,
	UserProfileEdge,
} from "@rap-api/core"
import { useContext, useState } from "react"
import { PageLayout } from "../components/PageLayout"
import { Box } from "components/Box"
import { Avatar } from "components/Avatar"
import { Text } from "components/Text"
import { useHistory } from "react-router-dom"
import {
	sizeFontLarge,
	sizeRhythmVertical,
	sizeRhythmHorizontal,
} from "@rap-theme"
import { css } from "@emotion/react"
import { AddNewProfile } from "../components/AddNewProfile"

const avatarStyles = css({
	width: 75,
	height: 75,
	borderRadius: 35,
})

const profileNameStyles = css({
	textTransform: "uppercase",
	fontSize: sizeFontLarge,
	paddingLeft: sizeRhythmHorizontal,
})

const addNewProfileTextStyles = css({
	color: "#AABDC1",
})

const profileRowStyles = css({
	width: "100%",
	marginBottom: sizeRhythmVertical,
	alignItems: "flex-start",
	justifyContent: "flex-start",
	maxHeight: 80,
	flexDirection: "row",
	flex: 1,
})

const textStyles = css({
	backgroundColor: "#AABDC1",
	fontSize: sizeFontLarge,
	borderRadius: 35,
	minWidth: 75,
	maxWidth: 75,
	minHeight: 75,
	maxHeight: 75,
	color: "white",
	textAlign: "center",
	margin: 0,
	padding: 0,
	display: "flex",
	justifyContent: "center",
	alignContent: "center",
	flexDirection: "column",
	alignItems: "center",
})

const profilesContainerStyles = css({ marginTop: sizeRhythmVertical })

export default function ProfileSwitcher() {
	const { data: profiles, loading, refetch } = useAllProfilesQuery()
	const { selectProfile } = useContext(UserContext)
	const nav = useHistory()
	const [showAddProfile, setShowAddProfile] = useState(false)

	if (loading)
		return (
			<PageLayout>
				<Loading />
			</PageLayout>
		)

	const handlePress = (profile: UserProfileEdge) => {
		selectProfile(profile.node as UserProfile)
		nav.push("/")
	}

	const handleAddNewProfile = () => {
		setShowAddProfile(true)
	}

	return (
		<PageLayout>
			<Box
				css={{
					paddingLeft: sizeRhythmHorizontal,
					paddingRight: sizeRhythmHorizontal,
				}}
			>
				<Box
					grid
					column
					css={{
						paddingBottom: sizeRhythmVertical,
						flexGrow: 0,
					}}
				>
					<Text variant="h1" css={{ paddingBottom: sizeRhythmVertical }}>
						Change Profile
					</Text>
					<Text>
						Choose an existing profile below, or tap Add New User to create a
						profile for a family member or friend.
					</Text>
				</Box>
				<Box grid column css={profilesContainerStyles}>
					{profiles?.userProfiles?.edges?.map((profile) => {
						if (!profile?.node) return null
						return (
							<Box
								row
								key={profile?.node?.id!}
								onPress={() => handlePress(profile as UserProfileEdge)}
								css={profileRowStyles}
							>
								<Box css={{ flexBasis: "10%" }}>
									<Avatar
										css={avatarStyles}
										user={profile?.node as UserProfile}
									/>
								</Box>

								<Box
									verticallyAlignContent="center"
									css={{
										paddingLeft: sizeRhythmHorizontal,
										height: "100%",
										flexBasis: "70%",
									}}
								>
									<Text css={profileNameStyles}>{profile?.node?.name}</Text>
								</Box>
							</Box>
						)
					})}
					<Box
						grid
						row
						key={"addNewProfile"}
						onPress={() => handleAddNewProfile()}
						css={profileRowStyles}
					>
						<Box
							grid
							verticallyAlignContent="center"
							css={[
								textStyles,
								{
									flexGrow: 0,
								},
							]}
						>
							<Text
								css={{
									width: "100%",
									textAlign: "center",
									fontSize: sizeFontLarge,
									color: "#fff",
								}}
							>
								+
							</Text>
						</Box>
						<Box
							grid
							column
							small={6}
							medium={6}
							large={6}
							verticallyAlignContent="center"
							css={{
								paddingLeft: sizeRhythmHorizontal,
								height: "100%",
							}}
						>
							<Text css={[profileNameStyles, addNewProfileTextStyles]}>
								Add new profile
							</Text>
						</Box>
					</Box>
				</Box>
				{showAddProfile && (
					<AddNewProfile
						showAddProfile={showAddProfile}
						refresh={async () => await refetch()}
						onClose={() => {
							setShowAddProfile(false)
						}}
					/>
				)}
			</Box>
		</PageLayout>
	)
}
