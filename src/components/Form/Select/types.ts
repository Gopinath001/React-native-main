export type SelectPropsOption = {
	label: string
	value: string
}

export type SelectProps = {
	required?: boolean
	value?: string
	placeholder?: string
	options: SelectPropsOption[]
	onChange: (value: string) => void
	errored?: boolean
}
