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

const headerStyles = css({
	paddingBottom: 20,
})

const subTextStyles = css({
	marginBottom: 20,
})

const coloredSubTextStyles = css({
	marginBottom: 20,
	color: colorBrandAlternative,
})
const inputContainerStyles = css({
	width: "100%",
	flex: 1,
	flexDirection: "column",
})
const inputWrapperStyles = {
	maxHeight: 50,
}
const buttonStyles = css({ maxHeight: 50 })
const dobWrapperStyles = {
	maxHeight: 100,
}

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
	const [dobValid, setDobValid] = useState(false)
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
			openHeight="85%"
			closeButton
			onClose={() => onClose()}
		>
			<Box css={[addProfileBoxStyles]}>
				<Text css={headerStyles} variant="h2">
					Add a profile
				</Text>

				<Text css={subTextStyles}>
					Want your family to join in? You can create additional profiles for
					them here.
				</Text>
				<Text css={coloredSubTextStyles}>
					Note: Profiles are part of your account and are managed by you.
				</Text>
				{creatingUserProfile ? (
					<Loading />
				) : (
					<Box css={inputContainerStyles}>
						<Box css={inputWrapperStyles}>
							<Input
								type="text"
								name="firstName"
								required
								autofocus
								value={addProfileData.firstName!}
								onChange={(value: string) => {
									setAddProfileData({ ...addProfileData, firstName: value })
								}}
								label="First Name"
							/>
						</Box>
						<Box css={inputWrapperStyles}>
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
						</Box>
						<Box css={dobWrapperStyles}>
							<DOBInput
								label="Date of birth"
								required
								day={dob !== "" ? dob.getDate().toString() : ""}
								month={dob !== "" ? dob.getMonth().toString() : ""}
								year={dob !== "" ? dob.getFullYear().toString() : ""}
								max={new Date()}
								onChange={({ day, month, year }, dateValid) => {
									setAddProfileData({
										...addProfileData,
										dateOfBirth:
											day !== "" && month !== "" && year !== ""
												? `${year}/${month}/${day}`
												: "",
									})
									setDobValid(!!dateValid)
								}}
							/>
						</Box>
						<Box>
							<Button
								css={buttonStyles}
								fullWidth
								onPress={handleProfileCreation}
								variant="secondary"
								disabled={
									!dobValid ||
									!addProfileData.firstName.length ||
									!addProfileData.lastName.length
								}
							>
								Finish
							</Button>
						</Box>
					</Box>
				)}
			</Box>
		</FloatingCard>
	)
}
