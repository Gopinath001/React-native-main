import { IconProps } from "icons/types"

export function ChevronRightIcon({ width, height, fill }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			width={width ?? 24}
			height={height ?? 24}
		>
			<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" stroke={fill} />
		</svg>
	)
}
