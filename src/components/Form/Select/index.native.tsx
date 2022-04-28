import { css, SerializedStyles } from "@emotion/react"
import { SelectProps } from "./types"
import {
	colorBorders,
	colorBrandPrimary,
	colorFontBase,
	sizeFontBase,
	sizeRhythmVertical,
	typographyMobileSecondary,
} from "@rap-theme"
import Picker from "react-native-picker-select"
import { TextStyle, Appearance, Platform } from "react-native"

export function Select({
	options,
	value,
	onChange,
	placeholder,
	...props
}: { css?: SerializedStyles } & SelectProps) {
	const styles = css({
		color: "#000000",
		marginBottom: sizeRhythmVertical,
		fontFamily: typographyMobileSecondary,
		fontSize: sizeFontBase,
		paddingTop: sizeRhythmVertical / 2,
		paddingBottom: sizeRhythmVertical / 4,
		backgroundColor: "transparent",
		borderWidth: 0,
		borderColor: value ? colorBrandPrimary : colorBorders,
		borderBottomWidth: 1,
		flex: 1,
		opacity: 1,
	})

	const handleChange = (value: string) => {
		onChange(value)
	}

	return (
		<Picker
			{...props}
			useNativeAndroidPickerStyle={false}
			value={value}
			placeholder={{}}
			style={{
				inputIOS: styles as TextStyle,
				inputAndroid: styles as TextStyle,
			}}
			onValueChange={handleChange}
			items={[
				{
					label: placeholder ? placeholder : "Select Size",
					value: "",
					color:
						Appearance.getColorScheme() === "dark" && Platform.OS !== "ios"
							? "#FFFFFF"
							: colorFontBase,
				},
				...options?.map((option) => ({
					...option,
					color:
						Appearance.getColorScheme() === "dark" && Platform.OS !== "ios"
							? "#FFFFFF"
							: colorFontBase,
				})),
			]}
		/>
	)
}
