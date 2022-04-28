import { Button } from "components/Buttons"
import { UserContext } from "providers/User"
import { useContext, useEffect } from "react"
import { useHistory, useLocation } from "react-router"
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
import { buttonStyles, containerStyles, logoStyles } from "./styles"
import { sizeRhythmHorizontal, sizeRhythmVertical } from "@rap-theme"
import { useSignInUp } from "hooks/useSignInUp"

type AuthPageProps = {
	
	guest?: boolean
}

export function AuthPage(props?: AuthPageProps): JSX.Element | null {
	const { user } = useContext(UserContext)
	const { state } = useLocation<RouterState>()
	const params = useParams<ChallengeRouteParams>()
	const nav = useHistory<RouterState>()
	const { signIn, signUp } = useSignInUp()
	const [dobPrompt, setDobPrompt] = useState(false)
	const [dob, setDOB] = useState("")
	// FIXME Make sure this is cross platform for realsies.
	// @ts-ignore
	const search = new URLSearchParams<{ returnTo?: string }>(
		nav?.location?.search,
	)
	// @ts-ignore
	const returnTo = search.returnTo ?? state?.returnTo

	
	useEffect(() => {
		returnTo && setReturnTo(returnTo)
	}, [returnTo])

	useEffect(() => {
		if (user && returnTo) {
			nav.push(returnTo, {
				...state,
			})
		}
	}, [user])

	const handleSignIn = async () => signIn()
	const handleSignUp = async () => signUp()

	const guest = (
		<Box css={{ width: "100%", paddingTop: sizeRhythmVertical * 1.5 }}>
			<Text variant="h3">Continue as a guest</Text>
			<Text css={{ paddingTop: sizeRhythmVertical }}>
				Quick and easy! Enter your challenge now and you&apos;ll be able to
				create an account later.
			</Text>
			<Box css={{ width: "100%", paddingTop: sizeRhythmVertical, flexGrow: 0 }}>
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
	)

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
				<Box
					css={{
						paddingLeft: sizeRhythmHorizontal,
						paddingRight: sizeRhythmHorizontal,
					}}
				>
					<Box
						css={{
							width: "100%",
							paddingTop: sizeRhythmVertical,
							flexGrow: 0,
						}}
					>
						<Text variant={"h3"}>Sign in</Text>
						<Text css={{ paddingTop: sizeRhythmVertical }}>
							Already have an account? Sign in below!
						</Text>
						<Box
							css={{
								width: "100%",
								paddingTop: sizeRhythmVertical,
								flexGrow: 0,
							}}
						>
							<Button
								variant="secondary"
								onPress={handleSignIn}
								css={buttonStyles}
							>
								Sign in
							</Button>
						</Box>
					</Box>
					<Box css={{ paddingTop: sizeRhythmVertical * 1.5, flexGrow: 0 }}>
						<Text variant={"h3"}>Create an account</Text>
						<Text css={{ paddingTop: sizeRhythmVertical }}>
							Create an account and get the most from your account!
						</Text>
						<Box
							css={{
								width: "100%",
								paddingTop: sizeRhythmVertical,
								flexGrow: 0,
							}}
						>
							<Button
								fullWidth
								variant="secondary"
								onPress={handleSignUp}
								css={buttonStyles}
							>
								Create an account
							</Button>
						</Box>
					</Box>

					{guest}
				</Box>

				{floatingCard}
			</PageLayout>
		)
	else
		return (
			<DarkPageLayout>
				<Box column css={containerStyles}>
					<Box
						grid
						row
						verticallyAlignContent="center"
						alignContent="center"
						css={logoStyles}
					>
						<Logo text color={"#fff"} width={200} height={100} />
					</Box>
					<Box grid column css={{ width: "100%" }}>
						<Box css={{ flexGrow: 0, width: "100%" }}>
							<Button
								variant="primary"
								onPress={() => nav.push("/join/entry")}
								css={buttonStyles}
							>
								Join a challenge
							</Button>
						</Box>
						<Box css={{ flexGrow: 0 }}>
							<Button
								variant="secondary"
								onPress={handleSignIn}
								css={buttonStyles}
							>
								Sign in
							</Button>
						</Box>
						<Box css={{ flexGrow: 0 }}>
							<Button
								variant="transparent"
								onPress={handleSignUp}
								css={buttonStyles}
							>
								Create an account
							</Button>
						</Box>
					</Box>
				</Box>
				{floatingCard}
			</DarkPageLayout>
		)
}
