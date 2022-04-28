import { Image } from "components/Image"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { css } from "@emotion/react"
import {
	colorBackgroundPrimary,
	colorBorders,
	// colorBrandPrimary,
	sizeRhythmVertical,
} from "@rap-theme"
import { CartEntryLineItemEdge } from "@rap-api/core"

type ChallengeEntryCartRowProps = {
	entryLineItem: CartEntryLineItemEdge
	quantity: number
	onChange: (productId: string) => void
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


export function ChallengeEntryCartRow(props: ChallengeEntryCartRowProps) {
	if (!props.entryLineItem?.node?.challengeTarget) return null

	return (
		<Box grid row css={productContainerStyles}>
			<Box grid column small={5} css={padding}>
				<Image
					css={imageStyles}
					src={
						"https://cdn.shopify.com/s/files/1/0567/2986/2297/products/image2.png?v=1624883853"
					}
					alt={"Medal"}
				/>
			</Box>
			<Box grid column small={5} css={padding}>
				<Text variant="h4" css={productNameStyles}>
					{props.entryLineItem.node.challengeTarget.displayName}
				</Text>
			</Box>
		</Box>
	)
}
