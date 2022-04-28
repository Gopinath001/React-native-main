import { Box } from "../Box"
import { Text } from "../Text"
import { PropsWithChildren, useState } from "react"
import { ViewportShim } from "../ViewportShim"
import { CloseRoundedIcon } from "icons/CloseRounded"
import { userStyles, closeStyles, rowStyles, linkStyles } from "./styles"
import {
	styles,
	sidebarStyles,
	profileSectionStyles,
	headerStyles,
} from "../MobileSidebar/styles"
import { Linking } from "react-native"

export function MobileSidebarGuest({
	onClose,
}: PropsWithChildren<{
	onClose: (event?: unknown) => void
}>) {
	const closeSidebar = () => {
		onClose && onClose()
	}

	return (
		<>
			<Box column css={styles}>
				<Box css={sidebarStyles(true)}>
					<Box css={profileSectionStyles}>
						<Box css={headerStyles}>
							<Text css={userStyles} variant={"h4"} light>
								Guest user
							</Text>
							<Box css={closeStyles} onPress={onClose}>
								<CloseRoundedIcon />
							</Box>
						</Box>
					</Box>
					<Box
						css={rowStyles}
						onPress={() => {
							Linking.openURL("https://store.raceatyourpace.co.uk")
						}}
					>
						<Box row>
							<Text css={linkStyles} variant={"h4"} light>
								STORE
							</Text>
						</Box>
					</Box>
					<Box css={rowStyles}>
						<Box
							row
							css={{ flexGrow: 0 }}
							onPress={() => {
								Linking.openURL("https://www.raceatyourpace.co.uk/faqs/")
							}}
						>
							<Text css={linkStyles} variant={"h4"} light>
								HELP &amp; FAQS
							</Text>
						</Box>
						<Box
							row
							css={{ flexGrow: 0 }}
							onPress={() => {
								Linking.openURL("https://www.raceatyourpace.co.uk/contact/")
							}}
						>
							<Text css={linkStyles} variant={"h4"} light>
								CONTACT US
							</Text>
						</Box>
					</Box>
					<Box css={rowStyles}>
						<Box
							row
							css={{ flexGrow: 0 }}
							onPress={() => {
								Linking.openURL("https://www.raceatyourpace.co.uk")
							}}
						>
							<Text css={linkStyles} variant={"h4"} light>
								VISIT WEBSITE
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}
