import { Product } from "@rap-api/core"
import { Image } from "components/Image"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { Box } from "components/Box"
import { PropsWithChildren, useState } from "react"
import { Select } from "../Form/Select"
import { CurrencyText } from "../CurrencyText"
import { colorFontBase, sizeFontSmall } from "@rap-theme"
import { useQuantityState, variantById } from "utils"
import { useEffect } from "react"
import { priceStyles } from "components/EntryRow/styles"
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
} from "./styles"
import { blueTextStyles } from "components/ConfirmProductRow/styles"

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
	const [selectedVariant, setSelectedVariant] = useState<Product["variants"]>(
		product.variants[0].id,
	)

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
				<Box grid column small={2.5} medium={2.5} large={1.5}>
					<Button
						variant="secondary"
						onPress={() => {
							decreaseQuantity()
							if (onChange) onChange(selectedVariant, quantity - 1)
						}}
						css={selectPlusStyles}
					>
						-
					</Button>
				</Box>
				<Box
					grid
					column
					small={4}
					medium={4}
					large={2}
					verticallyAlignContent="center"
				>
					<Text verticalMargin={false} css={quantityTextStyles}>
						{quantity}
					</Text>
				</Box>
				<Box grid column small={2.5} medium={2.5} large={1.5}>
					<Button
						variant="secondary"
						onPress={() => {
							increaseQuantity()
							if (onChange) onChange(selectedVariant, quantity + 1)
						}}
						css={selectPlusStyles}
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
				onChange={setSelectedVariant}
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

	return (
		<Box css={productContainerStyles}>
			<Box css={[padding, imageColumn]}>{image}</Box>

			<Box css={[padding, metaColumn]}>
				<Text variant="h4" css={productNameStyles}>
					{product?.title}
				</Text>
				<CurrencyText
					css={priceStyles}
					amount={
						selectedVariantObject?.presentmentPrices?.find(
							({ currencyCode }) => currencyCode === currency,
						)?.amount ?? 0
					}
					isoCode={currency ?? "GBP"}
					verticalMargin={!!withControls}
				/>
				{addButton}
			</Box>
		</Box>
	)
}
