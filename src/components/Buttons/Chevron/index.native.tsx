import { Button } from ".."
import { ChevronLeftIcon } from "icons/chevrons/Left.native"
import { ChevronRightIcon } from "icons/chevrons/Right"
import { ChevronUpIcon } from "icons/chevrons/Up.native"
import { ChevronDownIcon } from "icons/chevrons/Down.native"
import { ChevronButtonProps, ChevronButtonDirection } from "./types"

export function ChevronButton(props: ChevronButtonProps) {
	const { direction, noHoverShadow, onPress, fill, ...rest } = props
	let icon = <ChevronLeftIcon />

	switch (direction) {
		case ChevronButtonDirection.LEFT:
		default:
			icon = <ChevronLeftIcon {...rest} fill={fill} />
			break
		case ChevronButtonDirection.RIGHT:
			icon = <ChevronRightIcon {...rest} fill={fill} />
			break
		case ChevronButtonDirection.UP:
			icon = <ChevronUpIcon {...rest} fill={fill} />

			break
		case ChevronButtonDirection.DOWN:
			icon = <ChevronDownIcon {...rest} fill={fill} />
			break
	}

	return (
		<Button {...rest} onPress={props.onPress} variant={props.variant}>
			{icon}
		</Button>
	)
}
