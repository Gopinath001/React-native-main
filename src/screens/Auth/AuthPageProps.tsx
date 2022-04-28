import { Button } from "components/Buttons"
import { UserContext } from "providers/User"
import { useContext, useEffect } from "react"
import { useHistory, useLocation } from "react-router"
import { Auth } from "aws-amplify"
import { RouterState } from "../../routes"
import { setReturnTo } from "utils"
import { Box } from "components/Box"
import { Logo } from "components/Logo"
import { useState } from "react"
import { FloatingCard } from "components/FloatingCard"
import { Input } from "components/Form/Input"
import { Text } from "components/Text"
import { PageLayout } from "components/PageLayout"
import { DarkPageLayout } from "components/DarkPageLayout"
import { ChallengeRouteParams } from "components/ChallengeFlow/types"
import { useParams } from "react-router-dom"
import {
	buttonStyles,
	containerStyles,
	logoStyles,
	wrapperStyles,
	headingStyles,
} from "./styles"
import { colorBrandAlternative } from "@rap-theme"

type AuthPageProps = {
	
	guest?: boolean
}

export function AuthPage(props?: AuthPageProps): JSX.Element | null {
	const { user } = useContext(UserContext)
	const { state } = useLocation<RouterState>()
	const params = useParams<ChallengeRouteParams>()
	const nav = useHistory<RouterState>()

	const [dobPrompt, setDobPrompt] = useState(false)
	const [dob, setDOB] = useState("")
	// FIXME Make sure this is cross platform for realsies.
	// @ts-ignore
	const search = new URLSearchParams<{ returnTo?: string }>(
		nav?.location?.search,
	)
	// @ts-ignore
	const returnTo = search.returnTo

	
	useEffect(() => {
		returnTo && setReturnTo(returnTo)
	}, [returnTo])

	if (user) {
		nav.push(returnTo ?? "/", {
			...state,
		})
		return null
	}

	const handleSignIn = () => {
		if (typeof window?.localStorage !== "undefined") window.localStorage.clear()
		Auth.federatedSignIn()
	}

	const handleSignUp = () => {
		setReturnTo("/terms")
		Auth.federatedSignIn()
	}

	const floatingCard = (
		<FloatingCard
			open={dobPrompt}
			openHeight="45%"
			onClose={() => setDobPrompt(false)}
		>
			<Box grid column>
				<Text variant="h2" accent>
					Hi there!
				</Text>
				<Text>
					Before you can continue, we just need to know your date of birth.
				</Text>

				<Input
					name="DOB"
					type="date"
					label="Date of birth"
					value={dob}
					min={
						new Date(
							new Date().getFullYear() - 16,
							new Date().getMonth(),
							new Date().getDate(),
						)
							.toISOString()
							.split("T")[0]
					}
					max={new Date().toISOString().split("T")[0]}
					onChange={(value) => setDOB(value)}
				/>
				<Button
					variant="transparent"
					onPress={() => {
						if (!dob?.length) {
							alert("You've got to add a date of birth!")
							return
						}
						returnTo &&
							nav.push(returnTo, {
								...(state ?? {}),
								guestIntent: true,
								guestDOB: dob,
							})
					}}
					css={buttonStyles}
				>
					Lets go!
				</Button>
			</Box>
		</FloatingCard>
	)

	if (!!returnTo || !!props?.guest || !!state?.guestIntent)
		return (
			<PageLayout>
				<Box grid column verticallyAlignContent="center">
					<Box>
						<Box marginH={8}>
							<Text variant={"h3"} css={headingStyles}>
								Sign in
							</Text>
							<Text>Already used our new platform? Sign in below!</Text>
							<Text css={{ color: colorBrandAlternative }}>
								Your login details from our previous entry system will not work.
							</Text>
							<Button
								variant="secondary"
								onPress={handleSignIn}
								css={buttonStyles}
							>
								Sign in
							</Button>
							<Text variant={"h3"} css={headingStyles}>
								CREATE A NEW ACCOUNT
							</Text>
							<Text>First time here? Create your new account below!</Text>
							<Button
								variant="secondary"
								onPress={handleSignUp}
								css={buttonStyles}
							>
								CREATE A NEW ACCOUNT
							</Button>

							<Text variant="h3" css={headingStyles}>
								Continue as a guest
							</Text>
							<Text>
								Quick and easy! Enter your challenge now and you’ll be able to
								create an account later.
							</Text>
							<Button
								variant="secondary"
								outlined
								css={buttonStyles}
								onPress={() => {
									if (params.kidsOrGrownUp === "child") setDobPrompt(true)
									else {
										returnTo &&
											nav.push(returnTo, {
												...(state ?? {}),
												guestIntent: true,
												guestDOB: dob,
											})
									}
								}}
							>
								Continue as a guest
							</Button>
						</Box>
					</Box>
				</Box>
				{floatingCard}
			</PageLayout>
		)
	else
		return (
			<DarkPageLayout>
				<Box grid column verticallyAlignContent="center" css={containerStyles}>
					<Box css={wrapperStyles}>
						<Box grid verticallyAlignContent="center" css={logoStyles}>
							<Logo text color={"#fff"} width={200} />
						</Box>
						<Box>
							<Button
								variant="primary"
								onPress={() => nav.push("/join/entry")}
								css={buttonStyles}
							>
								Join a challenge
							</Button>

							<Button
								variant="secondary"
								onPress={handleSignIn}
								css={buttonStyles}
							>
								Sign in
							</Button>

							<Button
								variant="transparent"
								onPress={handleSignUp}
								css={buttonStyles}
							>
								Create an account
							</Button>
						</Box>
					</Box>
					{floatingCard}
				</Box>
			</DarkPageLayout>
		)
}
