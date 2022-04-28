import { css } from "@emotion/react"
import { ImageProps } from "./types"

export function Image(props: ImageProps) {
	
	const pickedSize = -Math.min(-(props.width ?? 0), -(props.height ?? 0))

	const styles = css({
		borderRadius: props.circular ? "50%" : 0,
		width: props.forceSquare || props.circular ? pickedSize : props.width,
		height: props.forceSquare || props.circular ? pickedSize : props.height,
		maxHeight: "100%",
		maxWidth: "100%",
	})
	const { circular, forceSquare, ...safeProps } = props
	return (
		<img
			{...safeProps}
			
			css={[styles, props.css]}
		/>
	)
}
