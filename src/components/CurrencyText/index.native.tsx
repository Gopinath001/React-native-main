import { css } from "@emotion/react"
import { Text } from "components/Text"
import { TextProps } from "components/Text/types"
import { CurrencyTextProps } from "./types"

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
		<Text {...rest} css={[styles, rest?.style]}>
			{amountFormatted}
		</Text>
	)
}
