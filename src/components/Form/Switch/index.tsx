import { SyntheticEvent } from "react"
import {
	colorPairingsProgressForeground,
	colorPairingsLightOnDarkBackground,
	colorPairingsProgressBackground,
} from "@rap-theme"
import ReactSwitch from "react-switch"

type BooleanSwitchProps = {
	checked: boolean
	onColor?: string
	onChange: (
		checked: boolean,
		event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
		id: string,
	) => void
}
export function BooleanSwitch({ onChange, checked }: BooleanSwitchProps) {
	return (
		<ReactSwitch
			onChange={onChange}
			checked={checked}
			height={24}
			width={48}
			offColor={colorPairingsProgressBackground}
			onColor={colorPairingsProgressForeground}
			offHandleColor={colorPairingsLightOnDarkBackground}
			onHandleColor={colorPairingsLightOnDarkBackground}
			handleDiameter={18}
			uncheckedIcon={false}
			checkedIcon={false}
		/>
	)
}
