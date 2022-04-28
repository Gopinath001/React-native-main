import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { PropsWithChildren } from "react"
import { CloseRoundedIcon } from "icons/CloseRounded"
import { FloatingCardProps } from "./types"
import {
	absStyles,
	buttonStyles,
	innerContent,
	backgroundOverlayStyles,
	floatingContentStyles,
} from "./styles"
import Helmet from "react-helmet"

export function FloatingCard(props: PropsWithChildren<FloatingCardProps>) {
	const dismissable =
		typeof props.dismissable === "undefined" || props.dismissable === true

	const handleClose = () => {
		if (!dismissable) {
			return
		}
		props.onClose && props.onClose()
	}
	const backgroundOverlay =
		typeof props.backgroundOverlay === "undefined" ||
		props.backgroundOverlay ? (
			<Box css={backgroundOverlayStyles(props?.open)} onPress={handleClose} />
		) : null

	if (!props.open) return null

	const closeButton = props.closeButton ? (
		<Button css={buttonStyles} onPress={handleClose}>
			<CloseRoundedIcon width={35} height={35} />
		</Button>
	) : null

	return (
		<Box css={absStyles}>
			{backgroundOverlay}
			<Helmet>
				<style>{"body { overflow: hidden; }"}</style>
			</Helmet>
			<Box
				grid
				column
				css={floatingContentStyles(props)}
				onLayout={props.onLayout}
			>
				{closeButton}
				<Box grid css={innerContent}>
					{props.children}
				</Box>
			</Box>
		</Box>
	)
}
