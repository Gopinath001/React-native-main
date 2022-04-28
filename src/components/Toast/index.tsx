import { Text } from "components/Text"
import { Box } from "components/Box"
import {
	baseStyles,
	errorStyles,
	errorTextStyles,
	infoStyles,
	infoTextStyles,
	textStyles,
	warningStyles,
	warningTextStyles,
} from "./styles"
import { ToastProps, ToastType } from "./types"

export function Toast({ message, type }: ToastProps) {
	let boxStyles = infoStyles
	let boxTextStyles = infoTextStyles

	switch (type) {
		case ToastType.INFO:
		default:
			boxStyles = infoStyles
			boxTextStyles = infoTextStyles
			break
		case ToastType.WARNING:
			boxStyles = warningStyles
			boxTextStyles = warningTextStyles
			break
		case ToastType.ERROR:
			boxStyles = errorStyles
			boxTextStyles = errorTextStyles
			break
	}
	return (
		<Box grid row css={[baseStyles, boxStyles]}>
			<Text css={[textStyles, boxTextStyles]}>{message}</Text>
		</Box>
	)
}
