import { css, Interpolation, Theme } from "@emotion/react"
import { Text } from "components/Text"
import { TextProps } from "components/Text/types"

type CurrencyTextProps = {
	isoCode: string
	amount: string | number
	css?: Interpolation<Theme>
}

export function CurrencyText({
	isoCode,
	amount,
	verticalMargin,
	css: cssProp,
	...rest
}: TextProps & CurrencyTextProps) {
	if (!isoCode) return null

	const amountFormatted = new Intl.NumberFormat(isoCode, {
		style: "currency",
		currency: isoCode,
	}).format(Number(amount))
	const styles = css({
		margin:
			typeof verticalMargin === "undefined"
				? undefined
				: verticalMargin
				? undefined
				: 0,
	})
	return (
		// FIXME
		// @ts-ignore
		<Text {...rest} css={[styles, cssProp, rest?.style]}>
			{amountFormatted}
		</Text>
	)
}
