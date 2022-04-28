import { Button } from "components/Buttons"
import {
	CartEntryLineItemConnection,
	Product,
	useCartByIdQuery,
	useChallengeEntryIsProcessedQuery,
	useGetProductsQuery,
} from "@rap-api/core"
import { useHistory, useLocation, useParams } from "react-router"
import { denormalizeId, productByVariantId } from "utils"
import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { Text } from "components/Text"
import { CurrencyText } from "components/CurrencyText"
import { GroupedEntryRows } from "components/GroupedEntryRows"
import { ConfirmProductRow } from "components/ConfirmProductRow"
import { css } from "@emotion/react"
import { sizeRhythmVertical } from "@rap-theme"
import { useEffect, useState } from "react"
import { RouterState } from "routes"
import { totalPriceStyles } from "./styles"
import { View } from "react-native"
import InAppBrowser from "react-native-inappbrowser-reborn"
import BackgroundTimer from "react-native-background-timer"

export default function ChallengeEntryConfirmScreen() {
	const params = useParams<{
		cartId: string
		kidsOrGrownUp: string
		month: string
		year: string
		challengeId: string
		targetId: string
	}>()
	const [poll, setPoll] = useState(false)
	const nav = useHistory()
	const routerState = useLocation<RouterState>().state ?? {}
	const [priceLoading] = useState(false)
	const { refetch: getChallengeEntryById } = useChallengeEntryIsProcessedQuery({
		skip: true,
	})
	const { data, refetch, loading } = useCartByIdQuery({
		skip: !params.cartId,
		variables: { id: denormalizeId(params.cartId, "carts") },
	})
	const [total, setTotal] = useState(0)

	useEffect(() => {
		refetch()
	}, [])

	useEffect(() => {
		setTotal(data?.cart?.priceBreakdown?.totalPrice?.amount)
	}, [data?.cart?.priceBreakdown?.totalPrice?.amount])

	let filter = "1900 01"
	// If there are line entries, override the filter date
	if (
		data?.cart?.entryLineItems?.edges &&
		data?.cart?.entryLineItems?.edges.length > 0 &&
		data.cart.entryLineItems.edges[0]?.node
	) {
		const firstLineItem = data.cart.entryLineItems.edges[0]?.node
		const month = String(firstLineItem.month)
		const paddedMonth =
			month.length == 1 ? "0" + firstLineItem.month : firstLineItem.month
		filter = firstLineItem.year + " " + paddedMonth
	}

	const { data: products, loading: productsLoading } = useGetProductsQuery({
		variables: {
			monthFilter: filter,
		},
	})

	useEffect(() => {
		// Don't poll if the user hasn't pressed continue
		if (!poll) return

		BackgroundTimer.runBackgroundTimer(async function () {
			if (
				data?.cart?.entryLineItems?.edges &&
				data?.cart?.entryLineItems?.edges[0]?.node
			) {
				const { data: entries } = await getChallengeEntryById()
				const hasProcessed = entries?.challengeEntries?.edges?.find((entry) => {
					if (
						!data?.cart?.entryLineItems?.edges ||
						!data?.cart?.entryLineItems?.edges[0]?.node
					) {
						return false
					}

					return (
						entry?.node?.sourceCartEntryLineItem?.id ===
						data?.cart?.entryLineItems?.edges[0]?.node.id
					)
				})

				if (hasProcessed) {
					InAppBrowser.close()
					nav.push(nav.location.pathname + "/confirmed")
					BackgroundTimer.stopBackgroundTimer()
				}
			}
		}, 3000)

		return () => {
			BackgroundTimer.stopBackgroundTimer()
		}
	}, [data, poll])

	const handleConfirmation = async () => {
		setPoll(true)
		await InAppBrowser.isAvailable()
		const { type } = await InAppBrowser.open(
			data?.cart?.checkoutUrl! + `&step=contact_information`,
			{
				showTitle: false,
				enableUrlBarHiding: true,
				enableDefaultShare: false,
				ephemeralWebSession: false,
				modalPresentationStyle: "overFullScreen",
			},
		)

		if (type !== "cancel" && type !== "dismiss")
			nav.push(`${nav.location.pathname}/confirmed`)
	}

	const hasDiscount =
		!!data?.cart?.priceBreakdown?.discountApplications?.edges?.length

	let discountRows = !hasDiscount ? null : (
		<Box grid column>
			<Box grid row>
				<Box grid column small={5} medium={5} large={5}>
					<Text variant="inline">Annual pass(es)</Text>
				</Box>
				<Box grid column small={5} medium={5} large={5} alignContent="flex-end">
					<Text variant="inline">
						-
						<CurrencyText
							variant="inline"
							amount={data!.cart!.priceBreakdown!.discountApplications?.edges?.reduce(
								(
									total: number,
									current: {
										node: { value: { amount: string; currencyCode: string } }
									},
								) => total + Number(current!.node!.value!.amount),
								0,
							)}
							isoCode={
								data?.cart?.priceBreakdown?.discountApplications?.edges[0]?.node
									?.value.currencyCode!
							}
						/>
					</Text>
				</Box>
			</Box>
		</Box>
	)

	if (
		loading ||
		productsLoading ||
		!products?.products?.edges?.length ||
		!data?.cart?.entryLineItems?.edges
	)
		return <Loading />

	return (
		<>
			<Box grid row>
				<Box
					grid
					column
					small={5}
					medium={5}
					large={5}
					css={{ paddingBottom: sizeRhythmVertical * 1.5 }}
				>
					<Text variant="h2">Summary</Text>
				</Box>
				<Box grid column small={5} medium={5} large={5} alignContent="flex-end">
					<View style={{ width: "100%", alignItems: "flex-end" }}>
						{priceLoading ? (
							<Loading size={25} />
						) : (
							<CurrencyText
								variant="h2"
								amount={total}
								css={totalPriceStyles}
								isoCode={data?.cart?.priceBreakdown?.totalPrice?.currencyCode}
							/>
						)}
					</View>
				</Box>
			</Box>
			<Box grid column>
				<GroupedEntryRows
					entryLineItems={
						data.cart.entryLineItems as CartEntryLineItemConnection
					}
					priceBreakdown={data?.cart?.priceBreakdown}
					onDelete={refetch}
				/>
				{data?.cart?.productLineItems?.edges?.map((productLineItem) => {
					const product = productByVariantId(
						products.products?.edges?.map(
							(edge) => edge?.node as Product,
						) as Product[],
						productLineItem?.node?.variantId as string,
					)

					if (!product) return null

					return (
						<ConfirmProductRow
							currency={routerState.currency ?? "GBP"}
							key={productLineItem?.node?.id}
							onDelete={refetch}
							cartLineItemId={productLineItem?.node?.id}
							profileBasket={[
								{
									variantId: productLineItem!.node!.variantId,
									quantity: productLineItem!.node!.quantity,
								},
							]}
							product={product}
						/>
					)
				})}
			</Box>
			{discountRows}
			<Box
				grid
				row
				css={{
					marginTop: sizeRhythmVertical / 2,
					paddingBottom: sizeRhythmVertical,
				}}
			>
				<Box grid column small={5} medium={5} large={5}>
					<Text variant="h2">Subtotal</Text>
				</Box>
				<Box grid column small={5} medium={5} large={5} alignContent="flex-end">
					<View style={{ width: "100%", alignItems: "flex-end" }}>
						{priceLoading ? (
							<Loading size={25} />
						) : (
							<CurrencyText
								css={totalPriceStyles}
								variant="h2"
								amount={total}
								isoCode={data?.cart?.priceBreakdown?.totalPrice?.currencyCode}
							/>
						)}
					</View>
				</Box>
			</Box>
			<Button
				variant="bordered-alternative"
				css={css({
					marginBottom: sizeRhythmVertical,
					minHeight: 50,
					maxHeight: 50,
					marginTop: 10,
				})}
				fullWidth
				onPress={() => {
					nav.push(
						`/join/${params.kidsOrGrownUp}/${params.month}/${params.year}/${params.challengeId}/${params.targetId}/extras`,
						{
							...routerState,
							cart: data.cart,
						},
					)
				}}
				disabled={priceLoading}
			>
				Shop Tops &amp; Extras
			</Button>
			<Button
				variant="secondary"
				css={css({
					marginBottom: 50,
					minHeight: 50,
					maxHeight: 50,
				})}
				fullWidth
				onPress={handleConfirmation}
				disabled={priceLoading}
			>
				Continue to payment
			</Button>
		</>
	)
}
