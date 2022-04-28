import { Text } from "components/Text"
import { Box } from "components/Box"
import { UserContext } from "providers/User"
import { useContext, useState } from "react"
import { Redirect, useHistory, useLocation, useParams } from "react-router"
import { Loading } from "components/Loading"
import {
	useUpdateCartMutation,
	useCreateUserAddressMutation,
} from "@rap-api/core"
import { Button } from "components/Buttons"
import { denormalizeId } from "utils"
import {
	colorBrandPrimary,
	sizeBorderRadius,
	sizeFontHeading4,
	sizeFontRegular,
	colorPairingsLightOnDarkForeground,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { css } from "@emotion/react"
import { RouterState } from "../routes"
import {
	AddressForm,
	AddressFormProps,
} from "../components/Form/collections/Address"
import { AddressList } from "../components/AddressList"
import { ChallengeRouteParams } from "components/ChallengeFlow/types"
import { View } from "react-native"

type FormState = {
	email: string
	manualAddress: boolean
	addressId: string
	manualFormValid: boolean
} & AddressFormProps["address"]

export default function ChallengeAddressScreen() {
	const { user } = useContext(UserContext)
	const nav = useHistory()
	const routerState = useLocation<RouterState>().state
	const [formState, setFormState] = useState<FormState>({
		manualAddress: false,
		email: user?.email!,
		addressId: "",
		address1: "",
		address2: "",
		city: "",
		zip: "",
		province: "",
		country: "GB",
		manualFormValid: false,
	})
	const params = useParams<ChallengeRouteParams>()
	const [updateCart, { loading: updateLoading }] = useUpdateCartMutation()
	const [createAddress, { loading: createAddressLoading }] =
		useCreateUserAddressMutation()

	if (routerState?.guestIntent)
		return (
			<Redirect
				to={{
					pathname: `/join/${params.kidsOrGrownUp}/${params.month}/${params.year}/${params.challengeId}/${params.targetId}/extras/${params.cartId}/confirm`,
					state: routerState,
				}}
			/>
		)

	const handleSubmit = async () => {
		if (!formState.manualAddress) {
			await updateCart({
				variables: {
					input: {
						id: denormalizeId(params.cartId, "carts"),
						address: formState.addressId,
					},
				},
			})
			nav.push(
				`/join/${params.kidsOrGrownUp}/${params.month}/${params.year}/${params.challengeId}/${params.targetId}/extras/${params.cartId}/confirm`,
				routerState,
			)
			return
		}
		const address = await createAddress({
			variables: {
				input: {
					user: user?.id!,
					address1: formState.address1,
					address2: formState.address2,
					country: formState.country,
					zip: formState.zip,
					province: formState.province,
					city: formState.city,
				},
			},
		})

		await updateCart({
			variables: {
				input: {
					syncWithShopify: true,
					id: denormalizeId(params.cartId, "carts"),
					address: address.data?.createUserAddress?.userAddress?.id,
				},
			},
		})

		nav.push(`${nav.location.pathname}/confirm`, routerState)
	}

	// Skip addresses for guest users.
	if (routerState?.guestIntent && routerState?.guestDOB) {
		nav.push(`${nav.location.pathname}/confirm`, routerState)
		return null
	}

	if (updateLoading || createAddressLoading) return <Loading />

	const addressBoxStyles = css({
		// padding: sizeRhythmVertical,
		textAlign: "center",
		borderRadius: sizeBorderRadius,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: colorBrandPrimary,
		backgroundColor: colorBrandPrimary,
		marginBottom: sizeRhythmHorizontal,
		maxHeight: 50,
		minHeight: 50,
		alignItems: "center",
	})
	const addressTextStyles = css({
		fontSize: sizeFontRegular,
		color: colorPairingsLightOnDarkForeground,
		margin: 0,
	})

	const addressForm = formState.manualAddress ? (
		<AddressForm
			address={formState}
			onChange={(address) => {
				setFormState({
					...formState,
					address1: address.address1,
					address2: address.address2,
					zip: address.zip,
					country: address.country,
					city: address.city,
					province: address.province,
				})
			}}
			onValidityChange={(valid) => {
				console.log("VALID?", valid)
				setFormState({ ...formState, manualFormValid: valid })
			}}
		/>
	) : null

	const buttonDisabled =
		!(formState.manualAddress && formState.manualFormValid) &&
		formState.addressId.length === 0

	return (
		<View
			style={{
				paddingBottom: sizeRhythmVertical * 2,
				flex: 1,
				width: "100%",
			}}
		>
			<Text accent variant="h2">
				Your details
			</Text>
			<Text light variant={"h4"} bold accent>
				Select or enter your address
			</Text>
			<AddressList
				selectedAddressId={formState.addressId}
				onSelect={(id) => {
					setFormState({
						...formState,
						addressId: formState.addressId === id ? "" : id,
						manualAddress: false,
					})
				}}
			/>
			{!formState.manualAddress && (
				<Box
					grid
					column
					key="new-address-button"
					css={addressBoxStyles}
					verticallyAlignContent="center"
					onPress={() =>
						setFormState({
							...formState,
							addressId: "",
							manualAddress: true,
							manualFormValid: false,
						})
					}
				>
					<Text
						css={[
							addressTextStyles,
							{
								fontSize: sizeFontHeading4,
								alignSelf: "center",
								width: "100%",
								textAlign: "center",
							},
						]}
					>
						Add a new address
					</Text>
				</Box>
			)}

			{addressForm}

			<Button
				variant="secondary"
				fullWidth
				onPress={handleSubmit}
				disabled={buttonDisabled}
				css={{ maxHeight: 45 }}
			>
				{formState.manualAddress ? "Save and continue" : "Next"}
			</Button>
		</View>
	)
}
