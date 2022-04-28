import { Image } from "components/Image"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { CurrencyText } from "./CurrencyText"
import { css } from "@emotion/react"
import {
	colorBackgroundPrimary,
	colorBorders,
	colorBrandPrimary,
	sizeRhythmVertical,
} from "@rap-theme"
import { ProductVariant, useQuantityState, variantById } from "utils"
import { Product, ProductEdge } from "@rap-api/core"
import { Button } from "components/Buttons"
import { useEffect } from "react"

type CartProductRowProps = {
	variants: ProductVariant[]
	variantId: string
	quantity: number
	products: ProductEdge[]
	onChange: (variantId: string, quantity: number) => void
	loading?: boolean
}

const productContainerStyles = css({
	backgroundColor: colorBackgroundPrimary,
	marginBottom: sizeRhythmVertical,
})

const padding = css({
	padding: sizeRhythmVertical,
})

const imageStyles = css({})
const productNameStyles = css({
	textTransform: "uppercase",
	borderBottomWidth: 1,
	borderBottomColor: colorBorders,
})
const priceStyles = css({
	color: colorBrandPrimary,
	fontSize: sizeRhythmVertical,
})

const productByVariant = (
	products: ProductEdge[],
	variantId: string,
): Product | undefined => {
	let outProduct
	outer: for (const product of products) {
		for (const variant of product.node?.variants ?? []) {
			if (variant?.id === variantId) {
				outProduct = product
				break outer
			}
		}
	}
	return outProduct?.node as Product
}

export function CartProductRow(props: CartProductRowProps) {
	const product = productByVariant(props.products, props.variantId)
	const [quantity, increaseQuantity, decreaseQuantity] = useQuantityState()

	const variant = variantById(
		product?.variants ?? [],
		props.variantId,
	) as ProductVariant

	useEffect(() => {
		props.onChange ? props.onChange(props.variantId, quantity) : void 0
	}, [quantity])

	if (!product || !variant) return null

	const image = product?.images?.length ? (
		<Image
			css={imageStyles}
			src={product?.images[0].originalSrc}
			alt={product?.images[0].altText}
		/>
	) : null

	return (
		<Box grid row css={productContainerStyles}>
			<Box grid column small={5} css={padding}>
				{image}
			</Box>
			<Box grid column small={5} css={padding}>
				<Text variant="h4" css={productNameStyles}>
					{product?.title}
				</Text>
				<CurrencyText
					css={priceStyles}
					amount={Number(variant.price.amount) * quantity}
					isoCode={variant.price.currencyCode}
				/>
			</Box>
			<Button variant="secondary" onPress={decreaseQuantity}>
				-
			</Button>
			<Text>{quantity}</Text>
			<Button variant="secondary" onPress={increaseQuantity}>
				+
			</Button>
		</Box>
	)
}
