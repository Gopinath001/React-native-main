import { css, ReactNativeStyle } from "@emotion/native"
import { ImageProps } from "./types"
import FastImage, { FastImageProps } from "react-native-fast-image"

const FastImageWrapper = (
	props: FastImageProps & { css?: ReactNativeStyle },
) => <FastImage {...props} />
import { SvgCssUri } from "react-native-svg"
export function Image(props: ImageProps) {
	if (!props.src) return null

	
	const pickedSize = -Math.min(-(props.width ?? 0), -(props.height ?? 0))

	const imageStyles = css({

		width: props.forceSquare ? pickedSize : props.width,
		height: props.forceSquare ? pickedSize : props.height,
	})
	return typeof props.src === "string" && props.src.endsWith("svg") ? (
		<SvgCssUri
			{...props}
			width={imageStyles.width}
			height={imageStyles.height}
			uri={props.src}
			style={[imageStyles, props.style]}
		/>
	) : (
		<FastImageWrapper
			{...props}
			source={{ uri: props.src }}
			accessibilityLabel={props.alt}
			resizeMode={FastImage.resizeMode.contain}
			// @ts-ignore
			style={[imageStyles, props.style]}
		/>
	)
}
