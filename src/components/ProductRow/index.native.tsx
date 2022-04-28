import { Product } from "@rap-api/core"
import { Image } from "components/Image"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { Box } from "components/Box"
import { PropsWithChildren, useState } from "react"
import { Select } from "../Form/Select"
import { CurrencyText } from "../CurrencyText"
import { colorFontBase, sizeFontSmall, sizeRhythmHorizontal } from "@rap-theme"
import { useQuantityState, variantById } from "utils"
import { useEffect } from "react"

import {
	selectPlusStyles,
	quantityTextStyles,
	imageStyles,
	controllessQuantityTextStyles,
	selectStyles,
	cartActionBoxStyles,
	productContainerStyles,
	padding,
	productNameStyles,
	metaColumn,
	imageColumn,
	priceStyles,
	disabledPlusButton,
} from "./styles"
import { View } from "react-native"
import { blueTextStyles } from "components/ConfirmProductRow/styles"
import { minMaxPrice } from "components/CurrencyText/utils"

type ProductRowProps = {
	product: Product
	currency: string
	profileBasket: readonly { variantId: string; quantity: number }[]
	onChange?: (productId: string, quantity: number) => void
	withControls?: boolean
}

const Black = ({ children }: PropsWithChildren<{}>) => (
	<Text
		variant="inline"
		css={{ color: colorFontBase, fontSize: sizeFontSmall, margin: 0 }}
	>
		{children}
	</Text>
)

const Blue = ({ children }: PropsWithChildren<{}>) => (
	<Text variant="inline" css={blueTextStyles}>
		{children}
	</Text>
)
export function ProductRow({
	product,
	onChange,
	profileBasket,
	withControls,
	currency,
}: ProductRowProps) {
	const [selectedVariant, setSelectedVariant] = useState<
		Product["variants"] | undefined
	>()

	const variant = profileBasket?.find(
		(basketItem) => basketItem.variantId === selectedVariant,
	)
	const initialQuantity = variant?.quantity ?? 0
	const [quantity, increaseQuantity, decreaseQuantity, setQuantity] =
		useQuantityState(initialQuantity)

	
	useEffect(() => {
		setQuantity(initialQuantity)
	}, [selectedVariant])

	if (!product) return null

	const selectedVariantObject = variantById(product?.variants, selectedVariant)

	const quantityControls =
		typeof withControls === "undefined" || withControls === true ? (
			<Box
				grid
				row
				nowrap
				verticallyAlignContent="center"
				css={{ width: "100%" }}
			>
				<Box css={{ flex: undefined, flexGrow: undefined }}>
					<Button
						variant="secondary"
						onPress={() => {
							if (quantity <= 0) return
							decreaseQuantity()
							if (onChange) onChange(selectedVariant, quantity - 1)
						}}
						css={quantity > 0 ? selectPlusStyles : disabledPlusButton}
					>
						-
					</Button>
				</Box>
				<Box
					grid
					alignContent="center"
					verticallyAlignContent="center"
					css={{ height: "100%" }}
				>
					<Text verticalMargin={false} css={quantityTextStyles}>
						{quantity}
					</Text>
				</Box>
				<Box css={{ flex: undefined, flexGrow: undefined }}>
					<Button
						variant="secondary"
						onPress={() => {
							if (selectedVariant) {
								increaseQuantity()
								if (onChange) onChange(selectedVariant, quantity + 1)
							}
						}}
						css={selectedVariant ? selectPlusStyles : disabledPlusButton}
					>
						+
					</Button>
				</Box>
			</Box>
		) : (
			<Box
				grid
				column
				small={10}
				medium={10}
				large={10}
				alignContent="flex-start"
			>
				<Text verticalMargin={false} css={controllessQuantityTextStyles}>
					<Black>QTY:</Black> <Blue>{quantity}</Blue>
				</Text>
			</Box>
		)

	const variantSelector =
		typeof withControls === "undefined" || withControls === true ? (
			<Select
				css={selectStyles}
				options={product.variants.map((variant: Product["variants"]) => ({
					label: variant.title,
					value: variant.id,
				}))}
				value={selectedVariant?.id}
				onChange={(value) => setSelectedVariant(value)}
			/>
		) : (
			<Box
				grid
				column
				small={10}
				medium={10}
				large={10}
				verticallyAlignContent="flex-start"
				alignContent="flex-start"
			>
				<Text verticalMargin={false} css={controllessQuantityTextStyles}>
					{
						product.variants.find(
							(edge: Product["variants"]) => edge!.id === selectedVariant,
						)!.title
					}
				</Text>
			</Box>
		)

	const addButton =
		product?.variants?.length && product.variants.length > 0 ? (
			<>
				{variantSelector}
				<Box grid row css={cartActionBoxStyles}>
					{quantityControls}
				</Box>
			</>
		) : (
			<Box grid row css={cartActionBoxStyles}>
				{quantityControls}
			</Box>
		)

	const image = product?.images?.length ? (
		<Image
			css={imageStyles}
			src={product?.images[0].originalSrc}
			alt={product?.images[0].altText}
		/>
	) : null

	const [minPrice] = minMaxPrice(product!.variants!, currency)

	return (
		<View style={productContainerStyles}>
			<Box css={[padding, imageColumn]}>{image}</Box>

			<Box css={[padding, metaColumn]}>
				<Text variant="h4" css={productNameStyles}>
					{product?.title}
				</Text>
				<Box row>
					{!selectedVariant && <Text css={priceStyles}>From </Text>}
					<CurrencyText
						css={priceStyles}
						amount={
							selectedVariant ? selectedVariantObject!.price!.amount : minPrice
						}
						isoCode={currency ?? "GBP"}
						verticalMargin={!!withControls}
					/>
				</Box>
				{addButton}
			</Box>
		</View>
	)
}
