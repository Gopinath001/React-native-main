import { IconProps } from "icons/types"
import { Path, Svg } from "react-native-svg"

export function RemoveRoundedIcon({
	width,
	height,
	fill = "#000000",
}: IconProps) {
	return (
		<Svg
			viewBox="0 0 24 24"
			width={width ?? 24}
			height={height ?? 24}
			fill={fill}
		>
			<Path d="M0 0h24v24H0V0z" fill={"none"} />
			<Path d="M19 13H5v-2h14v2z" />
		</Svg>
	)
}
