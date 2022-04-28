import { IconProps } from "icons/types"
import { Path, Svg } from "react-native-svg"

export function ChevronUpIcon({ width, height, fill }: IconProps) {
	return (
		<Svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			width={width ?? 24}
			height={height ?? 24}
		>
			<Path
				d="m 16.295,15.705 1.41,-1.41 -6,-6 -6,6 1.41,1.41 4.59,-4.58 z"
				fill={fill}
			/>
		</Svg>
	)
}
