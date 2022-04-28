import { Theme } from "@emotion/react"
import { Interpolation } from "@emotion/serialize"
import { sizeRhythmHorizontal, sizeRhythmVertical } from "@rap-theme"
import { View } from "react-native"
import { WebView } from "react-native-webview"

export function HTMLView({
	html,
}: {
	html: string
	styles?: Interpolation<Theme>
}) {
	return (
		<View
			style={{
				width: "100%",
				height: "100%",
				flex: 1,
				paddingHorizontal: sizeRhythmHorizontal,
				paddingVertical: sizeRhythmVertical,
			}}
		>
			<WebView
				androidLayerType={"hardware"}
				originWhitelist={["*"]}
				source={{ html }}
			/>
		</View>
	)
}
