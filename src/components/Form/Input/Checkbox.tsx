import { css } from "@emotion/native"
import { colorBorders, colorPairingsProgressForeground } from "@rap-theme"
import { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { Path, Svg } from "react-native-svg"
import { InputProps } from "./types"

export function CheckBox(props: InputProps) {
	const [checked, setChecked] = useState(!!props.checked)

	const containerStyles = css({
		borderWidth: 1,
		borderColor: colorBorders,
		width: 25,
		height: 25,
		alignSelf: "center",
		borderRadius: 17.5,
	})

	const tickStyles = css({
		width: 16,
		height: 16,
		marginTop: 4.5,
		marginLeft: 4.5,
	})

	const handlePress = () => {
		setChecked((pChecked) => !pChecked)
		props.onChange && props.onChange(!checked)
	}

	const Tick = () => {
		return (
			<Svg viewBox="0 0 490 490" style={tickStyles} width={14} height={14}>
				<Path
					d="M 452.25299072265625 28.326000213623047 L 197.83099365234375 394.67401123046875 L 29.04400062561035 256.875 L 0 292.468994140625 L 207.2530059814453 461.67401123046875 L 490 54.52799987792969 Z"
					fill={colorPairingsProgressForeground}
					stroke={colorPairingsProgressForeground}
					strokeWidth="50"
					strokeLinecap="round"
				/>
			</Svg>
		)
	}
	return (
		<TouchableOpacity onPress={handlePress} style={props.style}>
			<View style={containerStyles}>{checked ? <Tick /> : null}</View>
		</TouchableOpacity>
	)
}
