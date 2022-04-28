import { IconProps } from "icons/types"

export function RemoveRoundedIcon({ width, height, fill }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			width={width ?? 24}
			height={height ?? 24}
			fill={fill}
		>
			<path d="M0 0h24v24H0V0z" fill={"none"} />
			<path d="M19 13H5v-2h14v2z" />
		</svg>
	)
}
