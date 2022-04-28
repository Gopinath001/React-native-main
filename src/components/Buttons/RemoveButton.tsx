import { Button } from "."
import { BaseButtonProps } from "./types"
import { Interpolation, Theme } from "@emotion/react"
import { CloseRoundedIcon } from "icons/CloseRounded"

type RemoveButtonProps = {
	fill?: string
	css?: Interpolation<Theme>
} & BaseButtonProps

export function RemoveButton(props: RemoveButtonProps) {
	const { noHoverShadow, onPress, fill, ...rest } = props
	let icon = <CloseRoundedIcon fill={fill} />

	return (
		<Button {...rest} onPress={props.onPress} variant={props.variant}>
			{icon}
		</Button>
	)
}
