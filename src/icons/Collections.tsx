import { IconProps } from "icons/types"

export function CollectionsIcon({ width, height, fill }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			width={width ?? 24}
			height={height ?? 24}
		>
			<path
				d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
				stroke={fill}
			/>
		</svg>
	)
}
