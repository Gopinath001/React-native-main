import { ActivityIndicator, View } from "react-native"
import { colorBrandPrimary } from "@rap-theme"
import { LoadingProps } from "./types"

export function Loading({ size, color }: LoadingProps): JSX.Element {
	
	return (
		<View
			style={{
				flex: 1,
				flexGrow: 1,
				width: "100%",
				minHeight: "50%",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
			}}
		>
			<ActivityIndicator size={size ?? 100} color={color} />
		</View>
	)
}

Loading.defaultProps = {
	size: 100,
	color: colorBrandPrimary,
}
