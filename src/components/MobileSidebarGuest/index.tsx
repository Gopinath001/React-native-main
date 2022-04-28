import { Box } from "../Box"
import { Text } from "../Text"
import { PropsWithChildren, useState } from "react"
import { ViewportShim } from "../ViewportShim"
import { Auth } from "aws-amplify"
import { CloseRoundedIcon } from "icons/CloseRounded"
import { userStyles, closeStyles, rowStyles, linkStyles } from "./styles"
import { styles, sidebarStyles } from "../MobileSidebar/styles"
import { useSignInUp } from "hooks/useSignInUp"

export function MobileSidebarGuest({
	anchorEl,
	isOpen,
	onClose,
}: PropsWithChildren<{
	anchorEl: React.ReactNode
	isOpen: boolean
	onClose: (event?: unknown) => void
}>) {
	const { signIn } = useSignInUp()
	const closeSidebar = () => {
		onClose && onClose()
	}

	if (!isOpen) return <>{anchorEl}</>

	return (
		<>
			{isOpen && <ViewportShim onClick={closeSidebar} />}
			<Box grid column css={styles}>
				<Box grid column css={sidebarStyles(isOpen)}>
					<Box grid>
						<Box>
							<Text css={userStyles} variant={"h4"} light>
								Guest user
							</Text>
						</Box>
						<Box css={closeStyles} onPress={closeSidebar}>
							<CloseRoundedIcon />
						</Box>
					</Box>
					<Box row css={rowStyles}>
						<Box row>
							<Text
								css={linkStyles}
								variant={"h4"}
								light
								href="https://store.raceatyourpace.co.uk"
							>
								STORE
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
								onPress={async () => {
									await signIn()
								}}
							>
								LOGIN
							</Text>
						</Box>
						<Box row>
							<Text
								css={linkStyles}
								href={"#"}
								variant={"h4"}
								light
								onPress={async () => {
									if (typeof window?.localStorage !== "undefined")
										window.localStorage.clear()
									try {
										const currentSession = await Auth.currentSession()
										if (!currentSession) Auth.federatedSignIn()
									} catch {
										Auth.federatedSignIn()
									}
								}}
							>
								SIGN UP
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
							>
								HELP & FAQS
							</Text>
						</Box>
						<Box row>
							<Text
								css={linkStyles}
								variant={"h4"}
								light
								href="https://www.raceatyourpace.co.uk/contact/"
							>
								CONTACT US
							</Text>
							<Box row>
								<Text
									css={linkStyles}
									variant={"h4"}
									light
									href="https://www.raceatyourpace.co.uk"
								>
									RETURN TO WEBSITE
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}
