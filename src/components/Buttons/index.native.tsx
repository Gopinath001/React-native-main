import { TouchableOpacity } from "react-native"
import { ButtonBase } from "./base"
import { baseButtonStyles } from "./styles.native"
import { BaseButtonProps } from "./types"

export function Button(props: BaseButtonProps) {
	return (
		<ButtonBase
			{...props}
			css={baseButtonStyles(props)}
			Component={TouchableOpacity}
		/>
	)
}
