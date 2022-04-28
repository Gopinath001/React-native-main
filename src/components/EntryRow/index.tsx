import { Image } from "components/Image"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { RemoveButton } from "components/Buttons/RemoveButton"
import {
	CartEntryLineItemEdge,
	CartProductLineItemEdge,
	useRemoveCartEntryLineItemMutation,
	UserProfile,
} from "@rap-api/core"
import { Loading } from "components/Loading"

import { normalizeId, apiMonthToName } from "utils"
import { Avatar } from "components/Avatar"

import { CurrencyText } from "../CurrencyText"
import { MedalImage } from "components/MedalImage"
import { PropsWithChildren, useState } from "react"
import {
	entryLineDetailStyles,
	entryLineItemStyles,
	iconImageStyles,
	iconStyles,
	moreButtonStyles,
	personalisedMedalTextStyles,
	priceStyles,
} from "./styles"
import { View } from "react-native"
import { sizeRhythmVertical } from "@rap-theme"
import { blueTextStyles } from "components/ConfirmProductRow/styles"

type EntryRowProps = {
	entryLineItem: CartEntryLineItemEdge
	
	priceBreakdown: any
	lineItems: CartProductLineItemEdge[]
	quantity: number
	onDelete: () => void
}

const Blue = ({ children }: PropsWithChildren<{}>) => (
	<Text variant="inline" css={blueTextStyles}>
		{children}
	</Text>
)
export function EntryRow({
	entryLineItem,
	priceBreakdown,
	lineItems,
	quantity,
	onDelete,
}: EntryRowProps) {
	const [removed, setRemoved] = useState(false)
	const entryLineItemPrice = (
		prices: { lineItems: { edges: any[] } },
		id: string,
	) => {
		return prices.lineItems?.edges?.find(
			(lineItem: { node: { customAttributes: any[] } }) =>
				lineItem?.node?.customAttributes.find(
					(customAttribute) => customAttribute.key == "ID",
				)?.value === id,
		)
	}

	const priceInfo = entryLineItemPrice(
		priceBreakdown,
		normalizeId(entryLineItem?.node?.id ?? ""),
	)?.node

	const [removeCartEntryLineItem, { loading: removingCartEntryLineItem }] =
		useRemoveCartEntryLineItemMutation()

	if (!entryLineItem?.node?.id) return <Loading />

	const handleSubmit = async (cartItemId: string) => {
		await removeCartEntryLineItem({
			variables: {
				cartEntryLineItemId: cartItemId,
			},
		})
		setRemoved(true)
		onDelete()
	}

	if (removingCartEntryLineItem || removed) return <Loading />

	const image = entryLineItem?.node?.challengeTarget?.type?.iconFullPath ? (
		<Image
			width={50}
			height={50}
			src={entryLineItem?.node?.challengeTarget?.type?.iconFullPathWhite}
			alt={entryLineItem?.node?.challengeTarget?.type?.displayName}
			css={iconImageStyles}
		/>
	) : null

	return (
		<Box key={entryLineItem?.node?.id} grid row css={entryLineItemStyles}>
			<View style={{ flex: 0.3 }}>
				<MedalImage
					year={entryLineItem?.node?.year!}
					month={entryLineItem?.node?.month!}
					type={entryLineItem?.node?.challengeTarget?.type?.name!}
				/>
			</View>
			<View style={{ flex: 0.7 }}>
				<Box grid row>
					<Text variant="h4">
						{apiMonthToName(entryLineItem?.node?.month)}{" "}
						{entryLineItem?.node?.year} Challenge
					</Text>
				</Box>
				<Box grid column css={entryLineDetailStyles}>
					<View
						style={{ width: "100%", flexDirection: "row", paddingVertical: 10 }}
					>
						<Box grid column small={2} medium={2} large={2} css={iconStyles}>
							{image}
						</Box>
						<Box
							grid
							column
							small={8}
							medium={8}
							large={8}
							verticallyAlignContent="flex-start"
							alignContent="flex-start"
							css={{ justifyContent: "center" }}
						>
							<Text variant="h4" css={personalisedMedalTextStyles}>
								{entryLineItem?.node?.challengeTarget?.displayName}
								{!!entryLineItem?.node?.personalisedMedal
									? " with personalised medal"
									: ""}
							</Text>
						</Box>
					</View>
					<Box grid column nowrap small={10} medium={10} large={10}>
						{lineItems.map((lineItem) => (
							<Box grid row nowrap key={lineItem?.node?.id}>
								<Box grid column small={5} medium={5} large={5}>
									<Avatar
										user={
											// TODO Fix whatever this is.
											(
												lineItem.node as typeof lineItem["node"] & {
													profile: UserProfile
												}
											)?.profile
										}
									/>
								</Box>
								<Box grid column small={5} medium={5} large={5}>
									<View
										style={{
											alignItems: "flex-end",
											width: "100%",
										}}
									>
										<RemoveButton
											fullWidth
											onPress={() => {
												handleSubmit(lineItem!.node!.id!)
											}}
											variant="none"
											noHoverShadow
											css={moreButtonStyles}
										/>
									</View>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
				<Box grid row>
					<Box grid column small={6} medium={6} large={6}>
						<Box
							grid
							row
							css={{
								paddingTop: sizeRhythmVertical,
							}}
						>
							<Text verticalMargin={false}>
								QTY: <Blue>{quantity}</Blue>
							</Text>
						</Box>
						<Box grid row>
							<CurrencyText
								variant="h2"
								amount={priceInfo?.variant?.priceV2?.amount}
								css={priceStyles}
								isoCode={priceInfo?.variant?.priceV2?.currencyCode}
							/>
							{quantity > 1 ? <Text> each</Text> : null}
						</Box>
					</Box>
				</Box>
			</View>
		</Box>
	)
}
