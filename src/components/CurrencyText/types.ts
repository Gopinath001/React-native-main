import { CSSInterpolation } from "@emotion/native"
import { Interpolation, Theme } from "@emotion/react"

export type CurrencyTextProps = {
	isoCode: string
	amount?: string | number
	css?: Interpolation<Theme>
	style?: CSSInterpolation
}
