import { IconProps } from "icons/types"
import { Path, Svg, G, Defs, Styles } from "react-native-svg"

export function MapPinIcon({ width, height, fill }: IconProps) {
	return (
		<Svg viewBox="0 0 66.29 66.28" width={width ?? 24} height={height ?? 24}>
			<Path
				fill={fill ?? "#2dbbdb"}
				d="M33.14,0A33.14,33.14,0,1,0,66.29,33.14,33.14,33.14,0,0,0,33.14,0Zm0,53.92A20.78,20.78,0,1,1,53.92,33.14,20.77,20.77,0,0,1,33.14,53.92Zm0-31.54A10.76,10.76,0,1,0,43.91,33.14,10.76,10.76,0,0,0,33.14,22.38Z"
			/>
		</Svg>
	)
}
