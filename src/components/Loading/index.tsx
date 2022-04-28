import { css } from "@emotion/react"
import { colorBrandPrimary } from "@rap-theme"
import { Box } from "components/Box"
import { LoadingProps } from "./types"

export function Loading({ size, color }: LoadingProps): JSX.Element {
	const styles = css({
		width: "100%",
		height: "100%",
	})
	
	return (
		<Box
			grid
			alignContent="center"
			verticallyAlignContent="center"
			css={styles}
		>
			<Box>
				<svg width={size ?? 100} height={size ?? 100} viewBox="0 0 44 44">
					<circle
						cx="22"
						cy="22"
						r="16"
						stroke={color}
						strokeWidth={5}
						fill={"#000000"}
						fillOpacity={0}
					/>
				</svg>
			</Box>
		</Box>
	)
}

Loading.defaultProps = {
	size: 100,
	color: colorBrandPrimary,
}
