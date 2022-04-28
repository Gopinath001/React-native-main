import { css, SerializedStyles } from "@emotion/react"
import { SyntheticEvent } from "react"
import { SelectProps } from "./types"
import { Text } from "components/Text"
import {
	colorBorders,
	colorBrandAlternative,
	colorBrandPrimary,
	sizeFontBase,
	sizeRhythmVertical,
	typographyWebSecondary,
} from "@rap-theme"

export function Select({
	options,
	value,
	placeholder,
	onChange,
	required,
	errored,
	...rest
}: { css?: SerializedStyles } & SelectProps) {
	const styles = css({
		color: value ? "" : colorBorders,
		marginBottom: sizeRhythmVertical,
		fontFamily: typographyWebSecondary,
		fontSize: sizeFontBase,
		paddingTop: sizeRhythmVertical / 2,
		paddingBottom: sizeRhythmVertical / 2,
		backgroundColor: "transparent",
		borderWidth: 0,
		borderColor: value ? colorBrandPrimary : colorBorders,
		borderBottomWidth: 1,
	})
	const errorStyles = css({
		borderBottomColor: colorBrandAlternative,
	})
	const handleChange = (event: SyntheticEvent<HTMLSelectElement>) => {
		onChange(event.currentTarget.value)
	}
	return (
		<select
			{...rest}
			required={required}
			placeholder={placeholder}
			css={[styles, errored ? errorStyles : undefined, rest.css]}
			value={value}
			onChange={handleChange}
			onClick={(event) => event.stopPropagation()}
		>
			{placeholder ? (
				<option value="" disabled selected hidden>
					<Text>{required ? `${placeholder} *` : placeholder}</Text>
				</option>
			) : null}
			{options.map((option) => (
				<option key={option.label + "=" + option.value} value={option.value}>
					<Text>{option.label}</Text>
				</option>
			))}
		</select>
	)
}
