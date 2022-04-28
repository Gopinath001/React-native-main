import { Box } from "../Box"
import { Text } from "../Text"
import { Avatar } from "../Avatar"
import { PropsWithChildren } from "react"
import { UserProfile } from "@rap-api/core"
import { CloseRoundedIcon } from "icons/CloseRounded"
import {
	sidebarStyles,
	userStyles,
	closeStyles,
	linkStyles,
	secondaryRowStyles,
	secondarylinkStyles,
	styles,
	secondarylinkRowStyles,
	profileSectionStyles,
	headerStyles,
	rowStyles,
} from "./styles"
import { useSignInUp } from "hooks/useSignInUp"
import { Dimensions, Linking, ScrollView } from "react-native"

export function MobileSidebar({
	onClose,
	user,
}: PropsWithChildren<{
	anchorEl: React.ReactNode
	isOpen: boolean
	onClose: (event?: unknown) => void
	user: Partial<UserProfile> & Pick<UserProfile, "id" | "initials">
}>) {
	const { signOut } = useSignInUp()
	const dims = Dimensions.get("screen")
	return (
		<ScrollView
			style={{ height: dims.height }}
			contentContainerStyle={{
				paddingBottom: 100,
				minHeight: dims.height,
				maxHeight: dims.height,
			}}
		>
			<Box column css={styles}>
				<Box css={sidebarStyles(true)}>
					<Box css={profileSectionStyles}>
						<Box css={headerStyles}>
							<Box
								css={{
									flex: undefined,
									flexGrow: 0,
									marginRight: 16,
								}}
							>
								<Avatar user={user.ownerProfile} onPress={onClose} />
							</Box>
							<Box>
								<Text css={userStyles} variant={"h4"} light>
									{user.ownerProfile.name}
								</Text>
							</Box>
							<Box css={closeStyles} onPress={onClose}>
								<CloseRoundedIcon />
							</Box>
						</Box>
						<Box css={secondaryRowStyles}>
							<Box row css={secondarylinkRowStyles}>
								<Text
									css={secondarylinkStyles}
									variant={"link"}
									href="/switch-profile"
								>
									Change profile
								</Text>
							</Box>
							<Box row css={secondarylinkRowStyles}>
								<Text
									css={secondarylinkStyles}
									variant={"link"}
									href="/profile"
								>
									Update your details
								</Text>
							</Box>
							<Box row css={secondarylinkRowStyles}>
								<Text
									css={secondarylinkStyles}
									variant={"link"}
									href="/annual-passes"
								>
									Your annual passes
								</Text>
							</Box>
						</Box>
					</Box>
					<Box css={rowStyles}>
						<Box
							row
							onPress={() => {
								Linking.openURL("https://store.raceatyourpace.co.uk")
							}}
						>
							<Text css={linkStyles} variant={"h4"} light>
								STORE
							</Text>
						</Box>
					</Box>
					<Box css={rowStyles}>
						<Box
							row
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
						<Box row onPress={() => signOut()}>
							<Text variant="h4" light css={linkStyles}>
								SIGN OUT
							</Text>
						</Box>
						<Box
							row
							onPress={() => {
								Linking.openURL("https://www.raceatyourpace.co.uk/")
							}}
						>
							<Text css={linkStyles} variant={"h4"} light>
								VISIT WEBSITE
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</ScrollView>
	)
}
