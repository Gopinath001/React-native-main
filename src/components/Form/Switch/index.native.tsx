import {
	colorBrandAlternative,
	colorPairingsProgressForeground,
} from "@rap-theme"
import { Switch } from "react-native"

type BooleanSwitchProps = {
	onColor?: string
	checked?: Boolean
	onChange: (checked: Boolean) => void
}
export function BooleanSwitch(props: BooleanSwitchProps) {
	return (
		<Switch
			trackColor={{
				false: "#767577",
				true: props.onColor || colorBrandAlternative,
			}}
			value={!!props.checked}
			onValueChange={props.onChange}
		/>
	)
}
