import { IconProps } from "icons/types"

export function ChevronLeftIcon({ width, height, fill }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			width={width ?? 24}
			height={height ?? 24}
		>
			<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" stroke={fill} />
		</svg>
	)
}
