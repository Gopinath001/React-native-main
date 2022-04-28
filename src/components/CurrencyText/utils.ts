import { ProductVariant } from "utils"

export const minMaxPrice = (
	variants: ProductVariant[] = [],
	targetCurrencyCode: string,
): number[] => {
	const prices = Array.from(
		new Set(
			variants.map((variant) =>
				Number(
					variant.presentmentPrices.find(
						({ currencyCode }) => currencyCode === targetCurrencyCode,
					)?.amount!,
				),
			),
		),
	)

	if (prices.length === 1) return prices

	return [Math.min(...prices), Math.max(...prices)]
}
