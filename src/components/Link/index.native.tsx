import { PropsWithChildren } from "react"
import { Linking, TouchableOpacity } from "react-native"
import { useHistory, useLocation } from "react-router"
import { LinkProps } from "./types"
import { Text } from "components/Text"

export function Link({
	href,
	title,
	onClick,
	css,
	children,
}: PropsWithChildren<LinkProps>) {
	const nav = useHistory()
	const routerState = useLocation().state ?? {}
	if (!href) return <Text>ERROR: Link specified with no href.</Text>
	return (
		<TouchableOpacity
			onPress={() => {
				if (href.startsWith("http") && Linking.canOpenURL(href))
					Linking.openURL(href)
				else nav.push(href, routerState)

				onClick && onClick()
			}}
			accessibilityLabel={title}
			style={css}
		>
			<Text>{children}</Text>
		</TouchableOpacity>
	)
}
