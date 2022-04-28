import { Button } from ".."
import { ChevronLeftIcon } from "icons/chevrons/Left"
import { ChevronRightIcon } from "icons/chevrons/Right"
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
			icon = (
				<ChevronLeftIcon
					fill={fill}
					css={[{ transform: "rotate(90deg)" }, props.css]}
					{...rest}
				/>
			)
			break
		case ChevronButtonDirection.DOWN:
			icon = (
				<ChevronLeftIcon
					fill={fill}
					css={[{ transform: "rotate(-90deg)" }, props.css]}
					{...rest}
				/>
			)
			break
	}

	return (
		<Button {...rest} onPress={props.onPress} variant={props.variant}>
			{icon}
		</Button>
	)
}
