import { InputProps } from "./types"
import { styles, errorStyles, dateStyles } from "./styles.native"
import { TextInput } from "react-native"
import { colorBorders } from "@rap-theme"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { CheckBox } from "./Checkbox"

const typeFromProps = (props: InputProps): HTMLInputElement["type"] => {
	if (props.inputMode === "numeric") return "number"

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
		onChange,
		...rest
	} = props

	if (props.type === "checkbox")
		return (
			<Box row alignContent="center">
				<CheckBox
					disabled={false}
					value={!!value}
					onChange={(newValue) => props.onChange(newValue as unknown as string)}
					style={[
						errored ? errorStyles : undefined,
						inputType === "date" ? dateStyles : undefined,
						
						{
							marginLeft: 0,
							width: 26,
							height: 26,
							marginRight: 8,
						},
					]}
				/>
				<Text css={{ marginTop: 8 }}>{label}</Text>
			</Box>
		)

	return (
		<TextInput
			{...rest}
			css={[
				styles(value, props.type),
				errored ? errorStyles : undefined,
				inputType === "date" ? dateStyles : undefined,
				props.css,
			]}
			secureTextEntry={props.type === "password"}
			type={inputType}
			name={name}
			required={required}
			autoFocus={autofocus}
			keyboardType={
				props.inputMode === "numeric" ||
				(!props.inputMode && inputType === "number")
					? "decimal-pad"
					: "default"
			}
			// value={value}
			placeholderTextColor={colorBorders}
			placeholder={required ? `${label} *` : label}
			title={required ? `${label} *` : label}
			min={min && props.type === "date" ? min : ""}
			max={max && props.type === "date" ? max : ""}
			onChangeText={(text) => {
				props.onChange(text)
			}}
		/>
	)
}
