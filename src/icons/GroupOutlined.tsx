import { IconProps } from "icons/types"

export function GroupOutlinedIcon({ width, height, fill }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			width={width ?? 24}
			height={height ?? 24}
		>
			<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" stroke={fill} />
		</svg>
	)
}
