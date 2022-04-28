import { css } from "@emotion/react"
import { Box } from "components/Box"
import { Image } from "components/Image"
import { Text } from "components/Text"
import { Product } from "@rap-api/core"
import { HTMLView } from "components/HTMLView"

type ProductPageProps = {
	product: Product
}

const containerStyles = css({
	width: "100%",
	flexShrink: 1,
})

export default function ProductPage({ product }: ProductPageProps) {
	return (
		<Box grid column css={containerStyles}>
			<Box grid row css={containerStyles}>
				<Text variant="h3">{product.title}</Text>
			</Box>
			<Box grid row css={containerStyles}>
				{product?.images && product.images[0] && (
					<Image
						src={product.images[0].originalSrc}
						alt={product?.images[0].altText}
						width={250}
						height={250}
					/>
				)}
			</Box>
			<Box grid row>
				<Text verticalMargin={false}>
					<HTMLView html={product.descriptionHtml ?? ""} />
				</Text>
			</Box>
		</Box>
	)
}
