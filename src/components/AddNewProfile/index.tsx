import { Text } from "components/Text"
import { Box } from "components/Box"
import { UserContext } from "providers/User"
import { useContext, useState } from "react"
import { css } from "@emotion/react"
import { horizontalRhythmPadding, verticalRhythmPadding } from "utils"
import { Button } from "components/Buttons"
import { useCreateProfileMutation } from "@rap-api/core"
import { Loading } from "components/Loading"
import { FloatingCard } from "components/FloatingCard"
import { colorBrandAlternative } from "@rap-theme"
import { Input } from "components/Form/Input"
import { DOBInput } from "components/Form/Input/DOB"

const addProfileBoxStyles = css({
	...horizontalRhythmPadding,
	...verticalRhythmPadding,
})

export function AddNewProfile({
	showAddProfile,
	refresh,
	onClose,
}: {
	showAddProfile: boolean
	refresh?: () => void
	onClose: () => void
}) {
	const { user } = useContext(UserContext)
	const [createUserProfile, { loading: creatingUserProfile }] =
		useCreateProfileMutation()
	const [addProfileData, setAddProfileData] = useState<{
		firstName: string
		lastName: string
		dateOfBirth: string
	}>({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
	})

	const handleProfileCreation = async () => {
		if (!addProfileData.firstName?.length) {
			alert("Please enter a first name")
			return
		}
		if (!addProfileData.lastName?.length) {
			alert("Please enter a last name")
			return
		}
		if (!addProfileData.dateOfBirth?.length) {
			alert("Please enter a date of birth")
			return
		}

		await createUserProfile({
			variables: {
				dateOfBirth: addProfileData.dateOfBirth!,
				name: `${addProfileData.firstName} ${addProfileData.lastName}`,
				user: user!.id,
			},
		})
		refresh && refresh()
		onClose && onClose()
	}

	const dob = addProfileData.dateOfBirth
		? new Date(addProfileData.dateOfBirth)
		: ""

	return (
		<FloatingCard
			open={showAddProfile}
			closeButton
			openHeight="85%"
			onClose={() => onClose()}
		>
			<Box grid column css={addProfileBoxStyles}>
				<Text variant="h2">Add a profile</Text>
				<Text>
					Want your family to join in? You can create additional profiles for
					them here.
				</Text>
				<Text css={{ color: colorBrandAlternative }}>
					Note: Profiles are part of your account and are managed by you.
				</Text>
				{creatingUserProfile ? (
					<Loading />
				) : (
					<>
						<Input
							type="text"
							name="firstName"
							required
							autofocus
							value={addProfileData.firstName!}
							onChange={(value: string) =>
								setAddProfileData({ ...addProfileData, firstName: value })
							}
							label="First Name"
						/>
						<Input
							type="text"
							name="lastName"
							required
							value={addProfileData.lastName!}
							onChange={(value: string) =>
								setAddProfileData({ ...addProfileData, lastName: value })
							}
							label="Last Name"
						/>
						<DOBInput
							label="Date of birth"
							required
							day={dob !== "" ? dob.getDate().toString() : ""}
							month={dob !== "" ? dob.getMonth().toString() : ""}
							year={dob !== "" ? dob.getFullYear().toString() : ""}
							max={new Date()}
							onChange={({ day, month, year }) =>
								setAddProfileData({
									...addProfileData,
									dateOfBirth:
										day !== "" && month !== "" && year !== ""
											? `${year}/${month}/${day}`
											: "",
								})
							}
						/>
						<Button
							fullWidth
							onPress={handleProfileCreation}
							variant="secondary"
							disabled={
								addProfileData.dateOfBirth.length <= 4 ||
								!addProfileData.firstName.length ||
								!addProfileData.lastName.length
							}
						>
							Finish
						</Button>
					</>
				)}
			</Box>
		</FloatingCard>
	)
}
