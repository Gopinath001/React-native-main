import { ReactNativeStyle } from "@emotion/native"
import { css, Interpolation, Theme } from "@emotion/react"
import { colorBorders, colorFontBase } from "@rap-theme"
import { SyntheticEvent } from "react"
import { PropsWithChildren } from "react"
import { Text } from "../Text"
import { buttonTextStyles } from "./styles"
import { BaseButtonProps } from "./types"

export function ButtonBase(
	props: {
		css?: Interpolation<Theme>
		style?: ReactNativeStyle
		Component: React.ElementType
	} & PropsWithChildren<BaseButtonProps>,
) {
	const {
		onPress: userOnPress,
		children,
		variant,
		fullWidth,
		noHoverShadow,
		outlined,
		Component,
		...rest
	} = props
	
	const renderableChildren =
		typeof children === "string" ? (
			<Text variant={"button"} css={buttonTextStyles(props)}>
				{children}
			</Text>
		) : (
			children
		)

	const onPress = (event: SyntheticEvent<HTMLButtonElement>) => {
		event.stopPropagation()

		userOnPress && userOnPress(event)
	}

	const disabledStyles = css({
		backgroundColor: colorBorders,
		color: colorFontBase,
	})

	return (
		<Component
			{...rest}
			css={[
				props.css,
				props.style,
				props.disabled ? disabledStyles : undefined,
			]}
			onClick={onPress}
			onPress={onPress}
		>
			<>{renderableChildren}</>
		</Component>
	)
}
