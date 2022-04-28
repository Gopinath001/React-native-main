import { Rect, Svg } from "react-native-svg"
import { IconProps } from "./types"

export function HamburgerIcon({ fill = "#000000", width, height }: IconProps) {
	return (
		<Svg
			viewBox="0 0 100 80"
			width={width ?? "22"}
			height={height ?? "22"}
			fill={fill}
		>
			<Rect width="100" height="15" />
			<Rect y="30" width="100" height="15" />
			<Rect y="60" width="100" height="15" />
		</Svg>
	)
}
