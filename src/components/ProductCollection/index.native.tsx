import { Product } from "@rap-api/core"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { css } from "@emotion/react"
import { HTMLView } from "components/HTMLView"
import { Pressable } from "react-native"
import { ProductRow } from "components/ProductRow"

type UserProductAndQuantity = {
	variantId: string
	quantity: number
}

type ProductCollectionProps = {
	title?: string
	description?: string
	products: Product[]
	setProductPreview: (product: Product) => void
	basket: UserProductAndQuantity[]
	currency: string
	handleCartItems: (productId: string, quantity: number) => void
}

const collectionHeaderStyles = css({
	margin: 0,
})

export function ProductCollection({
	title,
	basket,
	products,
	currency,
	description,
	handleCartItems,
	setProductPreview,
}: ProductCollectionProps) {
	if (products.length <= 0) return null

	return (
		<Box grid column>
			<Box grid row>
				{title && title.length > 0 ? (
					<Text variant="h5" css={collectionHeaderStyles}>
						{title}
					</Text>
				) : null}
			</Box>
			{description && description.length > 0 ? (
				<HTMLView html={description} />
			) : null}
			{products.map((product) => {
				if (product) {
					return (
						<Pressable
							key={product.id}
							style={{ flex: 1, height: "100%", width: "100%" }}
							onPress={() => setProductPreview(product)}
						>
							<ProductRow
								currency={currency ?? "GBP"}
								profileBasket={basket}
								key={title + "_" + product?.id}
								product={product}
								onChange={handleCartItems}
							/>
						</Pressable>
					)
				}
				return null
			})}
		</Box>
	)
}
