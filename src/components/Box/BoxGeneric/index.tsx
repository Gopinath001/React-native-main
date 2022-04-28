import { GenericContainer } from "components/GenericContainer"
import { GenericContainerPropsWithComponent } from "components/GenericContainer/types"
import { allStyles } from "../styles"
import { BoxProps } from "../types"


export function BoxGeneric<T>(
	props: GenericContainerPropsWithComponent<BoxProps & T>,
): JSX.Element {
	const {
		grid,
		row,
		column,
		small,
		medium,
		large,
		alignContent,
		verticallyAlignContent,
		debugContainer,
		noMobileCollapse,
		onPress,
		nowrap,
		...rest
	} = props

	return (
		<GenericContainer<BoxProps>
			{...rest}
			css={[allStyles(props), props.css, props.style]}
			onClick={onPress}
			onPress={onPress}
		/>
	)
}
