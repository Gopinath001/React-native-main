import { View, ViewProps } from "react-native"
import { GenericContainerProps } from "components/GenericContainer/types"
import { BoxGeneric } from "./BoxGeneric"
import { BoxProps } from "./types"
import { styles } from "./styles"

export const Box = (props: GenericContainerProps<BoxProps & ViewProps>) => {
	return (
		<BoxGeneric<ViewProps>
			{...props}
			style={[styles(props), props.style]}
			withComponent={View}
		/>
	)
}
