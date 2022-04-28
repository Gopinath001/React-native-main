import { css } from "@emotion/react"
import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { RemoveButton } from "components/Buttons/RemoveButton"
import { Loading } from "components/Loading"
import { Text } from "components/Text"
import {
	colorBrandAlternative,
	sizeFontRegular,
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
	colorBrandPrimary,
	sizeBorderRadius,
	sizeRhythmHorizontal,
} from "@rap-theme"
import {
	useAddressesQuery,
	useDeleteAddressByIdMutation,
	UserAddress,
} from "@rap-api/core"
import { useState } from "react"
import { FloatingCard } from "components/FloatingCard"

type AddressListProps = {
	selectedAddressId?: string
	onSelect: (id: string) => void
}
const selectedAddressStyles = css({
	borderColor: colorBrandAlternative,
	backgroundColor: colorBrandAlternative,
})

const addressSubrowTextStyles = css({
	fontSize: sizeFontRegular,
	color: colorPairingsLightOnDarkForeground,
	margin: 0,
	marginTop: sizeRhythmVertical / 2,
})
const addressesRowsStyles = css({
	width: "100%",
	// paddingRight: sizeRhythmHorizontal,
	marginBottom: sizeRhythmVertical,
	// marginTop: -(sizeRhythmVertical / 2),
})
const addressBoxStyles = css({
	position: "relative",
	padding: sizeRhythmVertical,
	textAlign: "left",
	borderRadius: sizeBorderRadius,
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: colorBrandPrimary,
	backgroundColor: colorBrandPrimary,
	marginBottom: sizeRhythmHorizontal,
})
const addressTextStyles = css({
	fontSize: sizeFontRegular,
	color: colorPairingsLightOnDarkForeground,
	margin: 0,
})
const removeButtonStyles = css({
	position: "absolute",
	top: sizeRhythmVertical / 2,
	right: sizeRhythmHorizontal / 2,
})
const buttonBox = css({
	marginTop: sizeRhythmVertical,
})

export function AddressList({ onSelect, selectedAddressId }: AddressListProps) {
	const [confirmAddress, setConfirmId] = useState<UserAddress | false>(false)
	const [deleteAddressById, { loading: deletingAddress }] =
		useDeleteAddressByIdMutation()
	const {
		data: addresses,
		loading: loadingAddresses,
		refetch,
	} = useAddressesQuery()
	if (loadingAddresses) return <Loading />
	return (
		<>
			<Box css={addressesRowsStyles}>
				{addresses?.userAddresses?.edges
					?.filter((addressEdge) => addressEdge && addressEdge?.node)
					?.map((addressEdge) => addressEdge?.node as UserAddress)
					?.map((address) => (
						<Box
							grid
							column
							key={address.id}
							css={[
								addressBoxStyles,
								selectedAddressId && selectedAddressId === address.id
									? selectedAddressStyles
									: undefined,
							]}
							onPress={() => {
								onSelect(address.id)
							}}
						>
							<RemoveButton
								fill="#FFFFFF"
								css={removeButtonStyles}
								onPress={() => setConfirmId(address)}
							/>
							<Box>
								<Text css={addressTextStyles}>{address.address1},</Text>
								<Text css={addressSubrowTextStyles}>
									{address.address2 ? <>{address.address2}, </> : null}
									{address.city ? <>{address.city}, </> : null}
								</Text>
								<Text css={addressSubrowTextStyles}>
									{address.zip ? <>{address.zip}, </> : null}
									{address.country ? <>{address.country}</> : null}
								</Text>
							</Box>
						</Box>
					))}
			</Box>
			{confirmAddress && (
				<FloatingCard
					openHeight="70%"
					open={!!confirmAddress}
					closeButton={false}
					contentStyles={{
						width: "100%",
						padding: 10,
					}}
				>
					<Text variant="h2">Remove address</Text>
					<Text css={{ marginVertical: 10 }}>
						Are you sure you want to remove this address from your account?
					</Text>

					<Box grid column css={addressBoxStyles}>
						<Box css={{ marginVertical: 10 }}>
							<Text css={addressTextStyles}>{confirmAddress.address1},</Text>
							<Text css={addressSubrowTextStyles}>
								{confirmAddress.address2 ? (
									<>{confirmAddress.address2}, </>
								) : null}
								{confirmAddress.city ? <>{confirmAddress.city}, </> : null}
							</Text>
							<Text css={addressSubrowTextStyles}>
								{confirmAddress.zip ? <>{confirmAddress.zip}, </> : null}
								{confirmAddress.country ? <>{confirmAddress.country}</> : null}
							</Text>
						</Box>
					</Box>
					<Text css={{ color: colorBrandAlternative, textAlign: "center" }}>
						This cannot be undone
					</Text>
					<Box css={buttonBox}>
						<Button
							variant={"secondary"}
							disabled={!!deletingAddress}
							onPress={async () => {
								if (deletingAddress) return

								await deleteAddressById({
									variables: {
										id: confirmAddress.id,
									},
								})

								setConfirmId(false)
								refetch()
							}}
						>
							{deletingAddress ? <Loading size={25} /> : "remove address"}
						</Button>
					</Box>

					<Box css={buttonBox}>
						<Button
							variant="bordered-alternative"
							outlined
							onPress={() => {
								setConfirmId(false)
							}}
						>
							<Text css={{ color: colorBrandAlternative + " !important" }}>
								Cancel
							</Text>
						</Button>
					</Box>
				</FloatingCard>
			)}
		</>
	)
}
