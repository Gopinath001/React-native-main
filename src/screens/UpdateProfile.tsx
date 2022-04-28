import { css } from "@emotion/react"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { UserContext } from "providers/User"
import { useContext, useState } from "react"
import { Input } from "../components/Form/Input"
import { Select } from "../components/Form/Select"
import { PageLayout } from "../components/PageLayout"
import { useSelectableGendersQuery, useUpdateUserMutation } from "@rap-api/core"
import { Loading } from "components/Loading"
import { Button } from "components/Buttons"
import {
	horizontalRhythmPadding,
	setReturnTo,
	verticalRhythmPadding,
	formatShortDate,
} from "utils"
import { useHistory } from "react-router"
import {
	colorBrandPrimary,
	sizeBorderRadius,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { DOBInput } from "../components/Form/Input/DOB"
import { useEffect } from "react"

type FormState = {
	firstName: string
	lastName: string
	dob: string
	gender: string
}

const addressTextStyle = css({
	margin: 0,
	padding: 0,
})

const addressBox = css({
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: colorBrandPrimary,
	borderRadius: sizeBorderRadius,
	marginBottom: sizeRhythmVertical,
	...horizontalRhythmPadding,
	...verticalRhythmPadding,
})

export default function UpdateProfile() {
	const { user, selectedProfile, refreshUser } = useContext(UserContext)
	const nav = useHistory()
	const [DOBValid, setDOBValid] = useState(false)
	const { data: genders, loading: gendersLoading } = useSelectableGendersQuery()
	const [saveUser, { loading: userLoading }] = useUpdateUserMutation()
	const userProfile = user?.profiles?.edges?.find(
		(profile) => profile?.node?.id === selectedProfile?.id,
	)?.node
	const date = userProfile?.dateOfBirth
		?.split("T")[0]
		.split("-")
		?.map((n) => parseInt(n))

	const names: string[] = userProfile?.name?.split(" ") ?? []

	const [formState, setFormState] = useState<FormState>({
		firstName: names[0]?.toLowerCase() === "raceatyourpace" ? "" : names[0],
		lastName: names[1]?.toLowerCase() === "user" ? "" : names[1],
		dob: date ? formatShortDate(date[0], date[1], date[2]) : "",
		gender: userProfile?.gender?.id ?? "",
	})

	const [errorState, setErrorState] = useState<
		Record<keyof FormState, boolean>
	>({
		firstName: formState.firstName?.length === 0,
		lastName: formState.lastName?.length === 0,
		dob: formState.dob?.length === 0,
		gender: formState.gender?.length === 0,
	})

	const inputStyles = css({
		width: "100%",
	})

	const handleNext = async () => {
		await saveUser({
			variables: {
				input: {
					id: userProfile?.id as string,
					name: `${formState.firstName} ${formState.lastName}`,
					gender: formState.gender,
					dateOfBirth: formState.dob,
				},
			},
		})

		refreshUser && refreshUser()

		nav.push("/")
	}

	useEffect(() => {
		if (!user) {
			setReturnTo(nav.location.pathname)
			nav.push("/auth", { guestsAllowed: false })
		}
	}, [user])

	if (gendersLoading || userLoading) {
		return <Loading />
	}

	const dob =
		formState.dob && formState.dob.length > 0 ? new Date(formState.dob) : false

	const address =
		userProfile?.addresses &&
		userProfile?.addresses?.edges &&
		userProfile?.addresses.edges[0] ? (
			<Box grid column css={addressBox}>
				<Text css={addressTextStyle} verticalMargin={false}>
					{userProfile?.addresses.edges[0]?.node?.address1}
				</Text>
				{userProfile?.addresses.edges[0]?.node?.address2 && (
					<Text css={addressTextStyle} verticalMargin={false}>
						{userProfile?.addresses.edges[0]?.node?.address2}
					</Text>
				)}
				<Text css={addressTextStyle} verticalMargin={false}>
					{userProfile?.addresses.edges[0]?.node?.city}
				</Text>
				<Text css={addressTextStyle} verticalMargin={false}>
					{userProfile?.addresses.edges[0]?.node?.province}
				</Text>
				<Text css={addressTextStyle} verticalMargin={false}>
					{userProfile?.addresses.edges[0]?.node?.zip}
				</Text>
			</Box>
		) : null

	const addressRow = address ? (
		<Box row>
			<Text variant="h4" verticalMargin={false}>
				Current Address
			</Text>
			<Box grid row>
				{address}
			</Box>
			<Box grid row>
				<Text verticalMargin={false} href={"/profile/addresses"}>
					View your addresses
				</Text>
			</Box>
		</Box>
	) : null

	return (
		<PageLayout>
			<Box grid column marginH={sizeRhythmHorizontal}>
				<Text variant="h3">Update your details</Text>
				<Input
					required
					css={inputStyles}
					label="First Name"
					type="text"
					name="firstName"
					value={formState.firstName}
					errored={errorState.firstName}
					onChange={(value) => {
						setFormState({ ...formState, firstName: value })
						setErrorState({ ...errorState, firstName: value.length === 0 })
					}}
				/>
				<Input
					required
					css={inputStyles}
					label="Last Name"
					type="text"
					name="lastName"
					value={formState.lastName}
					errored={errorState.lastName}
					onChange={(value) => {
						setFormState({ ...formState, lastName: value })
						setErrorState({ ...errorState, lastName: value.length === 0 })
					}}
				/>
				<DOBInput
					hideLabel
					required
					label="Date of birth"
					day={dob ? dob.getDate().toString() : ""}
					month={dob ? (dob.getMonth() + 1).toString() : ""}
					year={dob ? dob.getFullYear().toString() : ""}
					errored={errorState.dob}
					onChange={({ day, month, year }, dateValid) => {
						setFormState({ ...formState, dob: `${year}-${month}-${day}` })
						setErrorState({ ...errorState, dob: !dateValid })
						setDOBValid(!!dateValid)
					}}
				/>
				<Select
					required
					css={inputStyles}
					value={formState.gender}
					errored={errorState.gender}
					placeholder="Gender *"
					options={
						genders?.genders?.edges?.map((gender) => ({
							label: gender?.node?.name as string,
							value: gender?.node?.id as string,
						})) ?? []
					}
					onChange={(value) => {
						setFormState({ ...formState, gender: value })
						setErrorState({ ...errorState, gender: !value })
					}}
				/>

				{addressRow}

				<Box row>
					<Button
						fullWidth
						variant="secondary"
						onPress={handleNext}
						disabled={Object.values(errorState).some(Boolean) || !DOBValid}
					>
						Save
					</Button>
				</Box>
			</Box>
		</PageLayout>
	)
}
