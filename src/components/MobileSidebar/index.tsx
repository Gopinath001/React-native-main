import { Box } from "../Box"
import { Text } from "../Text"
import { Avatar } from "../Avatar"
import { PropsWithChildren } from "react"
import { UserProfile } from "@rap-api/core"
import { CloseRoundedIcon } from "icons/CloseRounded"
import { rowStyles } from "components/Box/styles"
import {
	sidebarStyles,
	userStyles,
	closeStyles,
	linkStyles,
	secondaryRowStyles,
	secondarylinkStyles,
	styles,
} from "./styles"
import { useSignInUp } from "hooks/useSignInUp"

export function MobileSidebar({
	anchorEl,
	isOpen,
	onClose,
	user,
}: PropsWithChildren<{
	anchorEl: React.ReactNode
	isOpen: boolean
	onClose: (event?: unknown) => void
	user: Partial<UserProfile> & Pick<UserProfile, "id" | "initials">
}>) {
	const { signOut } = useSignInUp()
	return (
		<>
			<Box grid column css={styles}>
				{anchorEl}
				<Box grid column css={sidebarStyles(isOpen)}>
					<Box grid>
						<Box>
							<Avatar user={user} onPress={onClose} />
						</Box>
						<Box grid row>
							<Text css={userStyles} variant={"h4"} light>
								{user.name}
							</Text>
						</Box>
						<Box css={closeStyles} onPress={onClose}>
							<CloseRoundedIcon />
						</Box>
					</Box>
					<Box row css={secondaryRowStyles}>
						<Box row>
							<Text
								css={secondarylinkStyles}
								variant={"link"}
								href="/switch-profile"
							>
								Change profile
							</Text>
						</Box>
						<Box row>
							<Text css={secondarylinkStyles} variant={"link"} href="/profile">
								Update your details
							</Text>
						</Box>
						<Box row>
							<Text
								css={secondarylinkStyles}
								variant={"link"}
								href="/annual-passes"
							>
								Your annual passes
							</Text>
						</Box>
					</Box>
					<Box row css={rowStyles}>
						<Box row>
							<Text
								css={linkStyles}
								variant={"h4"}
								light
								href="https://store.raceatyourpace.co.uk"
								onPress={() => {
									window.open("https://store.raceatyourpace.co.uk", "_blank")
								}}
							>
								STORE
							</Text>
						</Box>
					</Box>
					<Box row css={rowStyles}>
						<Box row>
							<Text
								css={linkStyles}
								variant={"h4"}
								light
								href="https://www.raceatyourpace.co.uk/faqs/"
								onPress={() => {
									window.open(
										"https://www.raceatyourpace.co.uk/faqs/",
										"_blank",
									)
								}}
							>
								HELP &amp; FAQS
							</Text>
						</Box>
						<Box row>
							<Text
								css={linkStyles}
								variant={"h4"}
								light
								href="https://www.raceatyourpace.co.uk/contact/"
								onPress={() => {
									window.open(
										"https://www.raceatyourpace.co.uk/contact/",
										"_blank",
									)
								}}
							>
								CONTACT US
							</Text>
						</Box>
					</Box>
					<Box row css={rowStyles}>
						
						<Box row>
							<Text
								css={linkStyles}
								href={"#"}
								variant={"h4"}
								light
								onPress={async () => await signOut()}
							>
								SIGN OUT
							</Text>
						</Box>
						<Box row>
							<Text
								css={linkStyles}
								variant={"h4"}
								light
								href="https://www.raceatyourpace.co.uk"
								onPress={() => {
									window.open("https://www.raceatyourpace.co.uk", "_blank")
								}}
							>
								RETURN TO WEBSITE
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}
