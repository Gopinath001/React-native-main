import { IconProps } from "./types"

export function HamburgerIcon({ fill, width, height }: IconProps) {
	return (
		<svg
			viewBox="0 0 100 80"
			width={width ?? "22"}
			height={height ?? "22"}
			fill={fill}
		>
			<rect width="100" height="15" />
			<rect y="30" width="100" height="15" />
			<rect y="60" width="100" height="15" />
		</svg>
	)
}
