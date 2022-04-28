import { ButtonHTMLAttributes } from "react"
import { ButtonBase } from "./base"
import { baseButtonStyles, buttonStyles } from "./styles"
import { BaseButtonProps } from "./types"

const ButtonProxy = (
	props: ButtonHTMLAttributes<unknown> & BaseButtonProps,
) => {
	const { onPress, ...rest } = props
	return <button {...rest} onClick={onPress} />
}
export function Button(props: BaseButtonProps) {
	return (
		<ButtonBase
			{...props}
			css={[baseButtonStyles(props), buttonStyles(props)]}
			Component={ButtonProxy}
		/>
	)
}
