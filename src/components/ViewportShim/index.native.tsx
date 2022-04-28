import { useEffect, useState } from "react"
import { colorBackgroundPrimary } from "../../@rap-theme"
import { css } from "@emotion/native"
import { Dimensions, TouchableNativeFeedback } from "react-native"

export function ViewportShim({
	onClick,
}: {
	onClick?: (event: unknown) => void
}) {
	const [isMounted, setIsMounted] = useState(false)
	const dims = Dimensions.get("screen")

	useEffect(() => {
		setIsMounted(true)
	})

	const styles = css({
		position: "absolute",
		top: 0,
		left: 0,
		width: dims.width,
		height: dims.height,
		backgroundColor: colorBackgroundPrimary,
		opacity: isMounted ? 0.8 : 0,
		borderWidth: 10,
		borderColor: "pink",
	})

	return (
		<TouchableNativeFeedback style={styles} onPress={onClick}>
			<></>
		</TouchableNativeFeedback>
	)
}
