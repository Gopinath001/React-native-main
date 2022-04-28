import { Avatar } from "components/Avatar"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { UserContext } from "providers/User"
import { useContext, useState } from "react"
import { Redirect, useHistory, useLocation, useParams } from "react-router"
import { css } from "@emotion/react"
import { normalizeId } from "utils"
import { colorBrandAlternative, sizeRhythmHorizontal } from "@rap-theme"
import { Button } from "components/Buttons"
import { UserProfile, useUpdateUserMutation } from "@rap-api/core"
import { Loading } from "components/Loading"
import { ChallengeRouteParams } from "../types"
import { AddIcon } from "icons/Add"
import { AddNewProfile } from "components/AddNewProfile"
import { DOBInput } from "components/Form/Input/DOB"
import { RouterState } from "routes"
import { View } from "react-native"
import { addProfileRowStyles, addProfileTextStyles, plusStyles } from "./styles"

const pluralToSingle = (
	plural?:
		| string
		| "running"
		| "swimming"
		| "cycling"
		| "steps"
		| "wheelchair"
		| "walking",
): string => {
	switch (plural) {
		case "walking":
		case "wheelchair":
		case "steps":
			return "journey"
		case "cycling":
			return "ride"
		case "swimming":
			return "swim"
		case "running":
			return "run"
		default:
			return "it"
	}
}

export function ChallengeProfileSelector() {
	const { user, refreshUser } = useContext(UserContext)
	const nav = useHistory()
	const params = useParams<ChallengeRouteParams>()
	const [updateUser, { loading: updateUserLoading }] = useUpdateUserMutation()
	const { state: routerState } = useLocation<RouterState>()
	const [selected, setSelected] = useState<Set<String>>(new Set([]))
	const [missingData, setMissingData] = useState<
		Record<string, Record<string, string>>
	>({})
	const [showAddProfile, setShowAddProfile] = useState(false)
	const [hideAddProfile, setHideAddProfile] = useState(false)

	const changeHideProfile = (value: boolean) => {
		if (hideAddProfile == value) {
			return
		}
		setHideAddProfile(value)
	}

	if (!routerState?.guestIntent && !user) {
		return (
			<Redirect
				to={{
					pathname: "/auth",
					search: "returnTo=" + escape(nav.location.pathname),
					state: {
						...(routerState ?? {}),
						returnTo: nav.location.pathname,
					},
				}}
			/>
		)
	}

	if (routerState?.guestIntent) {
		return (
			<Redirect
				to={{
					pathname: `${nav.location.pathname}/extras`,
					state: {
						...routerState,
						challengers: [],
					},
				}}
			/>
		)
	}

	const rowStyles = css({
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
	})
	const unselectedRowStyles = css({})
	const selectedRowStyles = css({
		opacity: 1,
	})
	const textStyles = css({
		textTransform: "uppercase",
		margin: "auto",
		marginLeft: sizeRhythmHorizontal,
		fontSize: 20,
		alignSelf: "center",
	})

	const handleRowPress = (id: string) => () => {
		if (selected.has(id)) {
			setSelected(
				new Set([...selected].filter((selectedId) => selectedId !== id)),
			)
		} else {
			setSelected(new Set([...selected, id]))
		}
	}

	const handleNext = async () => {
		if (selected.size === 0) {
			alert(
				"Please select at least one profile to take part in this challenge.",
			)
			return
		}
		
		nav.push(`${nav.location.pathname}/extras`, {
			...routerState,
			challengers: [...selected].map(
				(id) =>
					user?.profiles?.edges?.find(
						(profile) => normalizeId(profile?.node?.id as string) === id,
					)?.node,
			),
		})
	}

	return (
		<Box style={{ width: "100%", flexGrow: 0 }}>
			<Text accent variant="h2">
				{routerState.challengeType?.name ? (
					<>
						Who&apos;s up for the{" "}
						{pluralToSingle(routerState.challengeType?.name?.toLowerCase())}?
					</>
				) : (
					<>Who&apos;s taking part?</>
				)}
			</Text>
			<Box grid column>
				<Text>Tap or click the names of those who will be taking part.</Text>
			</Box>
			<Box column>
				{user?.profiles?.edges
					?.filter((profile) => {
						if (params.kidsOrGrownUp === "child") return profile?.node?.isChild
						else return true
					})
					?.map((profile) => {
						if (!profile?.node) return null

						const aviStyles = css({
							borderWidth: 2,
							borderStyle: "solid",
							borderColor: selected.has(
								profile?.node?.id ? normalizeId(profile?.node?.id) : "none",
							)
								? colorBrandAlternative
								: "white",
						})
						const isMissingData = !!profile?.node?.requirements?.length
						changeHideProfile(isMissingData)

						const requiredInfoFields = isMissingData ? (
							<Box column css={{ marginTop: 10 }}>
								<Box grid column>
									<Text css={{ marginBottom: 10 }}>
										Looks like this profile needs some more information to enter
										challenges!
									</Text>
								</Box>
								<Box grid column>
									<DOBInput
										label="Date of birth"
										day={
											missingData[profile.node.id]?.dob
												? new Date(missingData[profile.node.id]?.dob)
														.getDate()
														.toString()
												: ""
										}
										month={
											missingData[profile.node.id]?.dob
												? new Date(missingData[profile.node.id]?.dob)
														.getMonth()
														.toString()
												: ""
										}
										year={
											missingData[profile.node.id]?.dob
												? new Date(missingData[profile.node.id]?.dob)
														.getFullYear()
														.toString()
												: ""
										}
										onChange={({ year, month, day }) => {
											setMissingData({
												...missingData,
												[profile.node?.id as string]: {
													dob: `${year}/${month}/${day}`,
												},
											})
										}}
									/>
								</Box>
								<Box grid column>
									<Button
										variant="secondary"
										fullWidth
										onPress={async () => {
											const id = profile.node?.id as string

											await updateUser({
												variables: {
													input: {
														id,
														dateOfBirth: missingData[id]?.dob,
													},
												},
											})
											refreshUser && refreshUser()
											changeHideProfile(false)
										}}
									>
										{updateUserLoading ? <Loading size={20} /> : "Save"}
									</Button>
								</Box>
							</Box>
						) : null

						return (
							<Box
								column
								key={profile?.node?.id}
								css={
									selected.has(normalizeId(profile?.node?.id!)) || isMissingData
										? [rowStyles, selectedRowStyles]
										: [rowStyles, unselectedRowStyles]
								}
								onPress={
									isMissingData
										? () => null
										: handleRowPress(normalizeId(profile?.node?.id ?? ""))
								}
							>
								<Box
									grid
									row
									css={{
										alignSelf: "flex-start",
									}}
								>
									<Avatar css={aviStyles} user={profile?.node as UserProfile} />
									<Text css={textStyles}>{profile?.node?.name}</Text>
								</Box>
								{requiredInfoFields}
							</Box>
						)
					})}

				{hideAddProfile ? null : (
					<Box
						row
						onPress={() => setShowAddProfile(true)}
						css={addProfileRowStyles}
					>
						<Box grid row>
							<Box column css={plusStyles}>
								<View
									style={{
										justifyContent: "center",
										alignItems: "center",
										flex: 1,
										width: "100%",
									}}
								>
									<AddIcon fill="#FFFFFF" />
								</View>
							</Box>
							<Text variant="inline" css={[textStyles, addProfileTextStyles]}>
								Add profile
							</Text>
						</Box>
					</Box>
				)}
			</Box>
			{hideAddProfile ? null : (
				<Button
					fullWidth
					disabled={selected.size < 1}
					variant="secondary"
					onPress={handleNext}
					css={{ width: "100%", minWidth: "100%" }}
				>
					Lets go!
				</Button>
			)}
			<AddNewProfile
				showAddProfile={showAddProfile}
				onClose={() => {
					setShowAddProfile(false)
					refreshUser()
				}}
			/>
		</Box>
	)
}
