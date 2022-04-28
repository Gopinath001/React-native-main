import { SyntheticEvent } from "react"
import { InputProps } from "./types"
import { styles, errorStyles, dateStyles } from "./styles"

const typeFromProps = (props: InputProps): HTMLInputElement["type"] => {
	switch (props.type) {
		case "text":
		case "email":
		case "number":
		case "date":
		default:
			return props.type
	}
}

export function Input(props: InputProps) {
	const inputType = typeFromProps(props)
	const {
		name,
		value,
		label,
		min,
		max,
		autofocus,
		required,
		errored,
		...rest
	} = props

	return (
		<input
			{...rest}
			css={[
				styles(value, props.type),
				errored ? errorStyles : undefined,
				inputType === "date" ? dateStyles(props) : undefined,
				props.css,
			]}
			type={inputType}
			name={name}
			required={required}
			autoFocus={autofocus}
			value={value.toString()}
			placeholder={required ? `${label} *` : label}
			title={required ? `${label} *` : label}
			min={min && props.type === "date" ? min : ""}
			max={max && props.type === "date" ? max : ""}
			onChange={(event: SyntheticEvent<HTMLInputElement>) =>
				props.onChange(event.currentTarget.value)
			}
		/>
	)
}
