import { ReactNativeStyle } from "@emotion/native"
import { StyleSheet, Pressable } from "react-native"
import { styles } from "./styles"
import { Text } from "components/Text"
import { GenericContainerPropsWithComponent } from "./types"


export function GenericContainer<T>(
	props: GenericContainerPropsWithComponent<T>,
): JSX.Element {
	const { withComponent, ...rest } = props
	const Component = withComponent

	
	const {
		backgroundColor,
		margin,
		marginH,
		marginV,
		padding,
		paddingH,
		paddingV,
		rounded,
		style,
		onPress,
		children,
		css: cssProp,
		...safeProps
	} = rest

	if (typeof onPress === "function") {
		return (
			<Pressable
				{...safeProps}
				onPress={onPress}
				style={[
					styles(props) as ReactNativeStyle,
					{ flexGrow: 0 },
					props.style,
				]}
			>
				{typeof children === "object" ? (
					children
				) : (
					<Text css={props.textStyles}>{children}</Text>
				)}
			</Pressable>
		)
	}
	return (
		<Component
			{...safeProps}
			style={StyleSheet.flatten([styles(props), cssProp, style])}
		>
			{children}
		</Component>
	)
}
