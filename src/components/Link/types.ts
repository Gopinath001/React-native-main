import { Interpolation, Theme } from "@emotion/react"

export type LinkProps = {
	href: string
	title: string
	className?: string
	onClick?: () => void
	css?: Interpolation<Theme>
}
