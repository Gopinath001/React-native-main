import { useState, useEffect, PropsWithChildren } from "react"
import { css } from "@emotion/react"
import { Product, useRemoveCartProductLineItemMutation } from "@rap-api/core"
import { Image } from "components/Image"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { RemoveButton } from "components/Buttons/RemoveButton"
import { Loading } from "components/Loading"

import { colorBrandAlternative, sizeRhythmHorizontal } from "@rap-theme"
import { useQuantityState, variantById } from "utils"

import { CurrencyText } from "../CurrencyText"
import { blueTextStyles, priceStyles } from "./styles"
import { View } from "react-native"

type ConfirmProductRowProps = {
	cartLineItemId: any
	product: Product
	currency: string
	profileBasket: readonly { variantId: string; quantity: number }[]
	onDelete: () => void
}

const productContainerStyles = css({
	marginBottom: sizeRhythmHorizontal,
	paddingBottom: sizeRhythmHorizontal,
})

const lineDetailStyles = css({})

const moreButtonStyles = css({
	borderWidth: 2,
	borderStyle: "solid",
	borderColor: colorBrandAlternative,
	borderRadius: 25,
	margin: 0,
	padding: 0,
	width: 50,
	height: 50,
})

const Blue = ({ children }: PropsWithChildren<{}>) => (
	<Text variant="inline" css={blueTextStyles}>
		{children}
	</Text>
)

export function ConfirmProductRow({
	cartLineItemId,
	product,
	profileBasket,
	onDelete,
	currency,
}: ConfirmProductRowProps) {
	const [removed, setRemoved] = useState(false)

	const [selectedVariant] = useState<Product["variants"]>(
		profileBasket && profileBasket.length >= 1
			? profileBasket[0].variantId
			: product.variants[0].id,
	)

	const variant = profileBasket?.find(
		(basketItem) => basketItem.variantId === selectedVariant,
	)
	const initialQuantity = variant?.quantity ?? 0
	const [quantity, setQuantity] = useQuantityState(initialQuantity)

	useEffect(() => {
		setQuantity(initialQuantity)
	}, [selectedVariant])

	if (!product) return null

	const image = product?.images?.length ? (
		<Image
			src={product?.images[0].originalSrc}
			alt={product?.images[0].altText}
			width={80}
			height={80}
		/>
	) : null

	const selectedVariantObject = variantById(product?.variants, selectedVariant)

	const [removeCartProductLineItem, { loading: removingLineItem }] =
		useRemoveCartProductLineItemMutation()

	const handleSubmit = async (cartItemId: string) => {
		await removeCartProductLineItem({
			variables: {
				cartProductLineItemId: cartItemId,
			},
		})
		setRemoved(true)
		onDelete()
	}

	if (removingLineItem || removed) return <Loading />

	return (
		<Box grid row css={productContainerStyles}>
			<View style={{ flex: 0.25 }}>{image}</View>
			<View style={{ paddingLeft: sizeRhythmHorizontal, flex: 0.75 }}>
				<Box
					grid
					row
					css={lineDetailStyles}
					verticallyAlignContent="flex-start"
				>
					<Text variant="h4">{product?.title}</Text>
				</Box>
				<Box grid row>
					<Box grid column small={6} medium={6} large={6}>
						<Box grid row>
							<Text verticalMargin={false}>
								Size: <Blue>{selectedVariantObject?.title}</Blue>
							</Text>
						</Box>
						<Box grid row>
							<Text verticalMargin={false}>
								QTY: <Blue>{quantity}</Blue>
							</Text>
						</Box>
						<Box grid row>
							<CurrencyText
								variant="h2"
								css={priceStyles}
								amount={
									selectedVariantObject?.presentmentPrices?.find(
										({ currencyCode }) => currencyCode === currency,
									)?.amount ?? 0
								}
								isoCode={currency ?? "GBP"}
							/>
						</Box>
					</Box>
					<Box
						grid
						column
						small={4}
						medium={4}
						large={4}
						alignContent="flex-end"
					>
						<View style={{ width: "100%", alignItems: "flex-end" }}>
							<RemoveButton
								fullWidth
								onPress={() => {
									handleSubmit(cartLineItemId)
								}}
								variant="none"
								noHoverShadow
								css={moreButtonStyles}
							/>
						</View>
					</Box>
				</Box>
			</View>
		</Box>
	)
}
