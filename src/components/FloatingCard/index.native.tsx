import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { PropsWithChildren } from "react"
import { CloseRoundedIcon } from "icons/CloseRounded"
import { FloatingCardProps } from "./types"
import {
	absStyles,
	buttonStyles,
	innerContent,
	floatingContentStyles,
} from "./styles.native"
import Modal from "react-native-modal"
import { ScrollView, View } from "react-native"

export function FloatingCard(props: PropsWithChildren<FloatingCardProps>) {
	const dismissable =
		typeof props.dismissable === "undefined" || props.dismissable === true

	const handleClose = () => {
		if (!dismissable) {
			return
		}
		props.onClose && props.onClose()
	}

	if (!props.open) return null

	return (
		<Modal
			isVisible={props.open}
			hasBackdrop
			backdropOpacity={0.8}
			backdropColor="#ECF4F5"
			avoidKeyboard
			style={absStyles}
			onBackdropPress={props.onClose}
			hardwareAccelerated={false}
		>
			<View style={floatingContentStyles(props)}>
				<ScrollView onLayout={props.onLayout}>
					<Box grid css={innerContent}>
						{props.children}
					</Box>
				</ScrollView>
				{props.closeButton ? (
					<Button css={buttonStyles} onPress={handleClose}>
						<CloseRoundedIcon width={35} height={35} />
					</Button>
				) : null}
			</View>
		</Modal>
	)
}
