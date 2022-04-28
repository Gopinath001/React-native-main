import { Interpolation, Theme } from "@emotion/react"

export type InputProps = {
	type: "text" | "email" | "number" | "radio" | "checkbox" | "date" | "password"
	name: string
	value: string | boolean
	onChange: (value: string) => void
	label: string
	required?: boolean
	max?: string
	min?: string
	css?: Interpolation<Theme>
	autofocus?: boolean
	autoComplete?: HTMLInputElement["autocomplete"]
	pattern?: string
	inputMode?:
		| "none"
		| "text"
		| "email"
		| "tel"
		| "url"
		| "numeric"
		| "decimal"
		| "search"
	errored?: boolean
	checked?: boolean
	disabled?: boolean
}
