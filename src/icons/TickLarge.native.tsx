import { IconProps } from "icons/types"
import { Svg, Circle, Polyline } from "react-native-svg"

export function TickLargeIcon({ width, height, fill }: IconProps) {
	return (
		<Svg viewBox="0 0 72.49 72.49" width={width ?? 24} height={height ?? 24}>
			<Circle
				strokeWidth={4}
				stroke={fill ?? "#00ed9f"}
				cx="36.24"
				cy="36.24"
				r="34"
			/>
			<Polyline
				stroke={fill ?? "#00ed9f"}
				strokeWidth={4}
				points="17.82 34.7 29.2 49.84 54.66 22.65"
			/>
		</Svg>
	)
}
