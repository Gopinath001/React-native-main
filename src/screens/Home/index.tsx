import { PageLayout } from "components/PageLayout"
import { Text } from "components/Text"
import { useContext } from "react"
import { UserContext } from "providers/User"
import { useCurrentChallengesQuery } from "@rap-api/core"
import { useEffect } from "react"
import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { Image } from "components/Image"
import {
	colorBrandAlternative,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { normalizeId } from "utils"
import { Button } from "components/Buttons"
import { ChevronButton } from "components/Buttons/Chevron"
import { useHistory } from "react-router"
import { kFormatNumber, round } from "utils"
import { JoinChallengeHomepageCTA } from "../JoinChallengeHomepageCTA"
import { ChevronButtonDirection } from "components/Buttons/Chevron/types"
import { ImageBackground, TouchableOpacity } from "react-native"
// @ts-ignore
import * as styles from "./styles"

// const renderEnterChallengeCTA = () => <JoinChallengeCTA />

export default function Home() {
	const nav = useHistory()
	const { user, selectedProfile } = useContext(UserContext)
	const { data, refetch, loading } = useCurrentChallengesQuery({
		variables: {
			closed: false,
		},
	})
	const currentProfileEntries = data?.userProfiles?.edges?.find(
		(profile) => profile?.node?.id === selectedProfile?.id,
	)

	// On remount, refetch the dashboard data.
	useEffect(() => {
		refetch()
	}, [])

	if (loading)
		return (
			<PageLayout>
				<Loading />
			</PageLayout>
		)

	const pageTitle = user
		? `WELCOME ${selectedProfile?.name?.split(" ")[0].toUpperCase()}!`
		: "Race at your pace"

	const entries = currentProfileEntries?.node?.challengeEntries?.edges?.filter(
		(entry) => {
			return entry?.node && !entry.node.completed
		},
	)

	return (
		<PageLayout>
			<Box grid column css={styles.bodyStyles}>
				<Text variant="h2" css={styles.headingStyles}>
					{pageTitle}
				</Text>
				{entries?.length ? (
					<Box css={styles.noOverflowContainer}>
						<Box css={styles.overflowWrapper}>
							<Box grid row>
								{entries.map((entry, i) => {
									if (!entry!.node || !entry!.node.target.value) return null

									let totalProgressFloat = Number(entry!.node.totalProgress)

									if (isNaN(totalProgressFloat)) totalProgressFloat = 0.0

									const achievedNumber = round(totalProgressFloat, 1)

									return (
										<TouchableOpacity
											key={entry!.node?.id + i.toString()}
											onPress={() =>
												nav.push(
													`/challenges/current/${
														entry!.node!.month - 1
													}/${normalizeId(entry!.node!.id)}/`,
												)
											}
											// @ts-ignore
											css={[
												styles.cellStyles,
												{
													paddingLeft: i % 2 !== 0 ? 8 : 0,
													paddingRight: i % 2 === 0 ? 8 : 0,
												},
											]}
										>
											<Box
												grid
												column
												verticallyAlignContent="center"
												css={[styles.cellInnerStyles]}
												aria-label={`${totalProgressFloat}/${entry!.node!
													.target!.value!}`}
											>
												<Box
													grid
													column
													alignContent="center"
													verticallyAlignContent="center"
													css={styles.cellInnerStyles}
												>
													<Box
														css={styles.iconStyles}
														grid
														verticallyAlignContent="center"
													>
														<Image
															css={styles.iconImageStyles}
															width={30}
															height={30}
															src={
																entry!.node?.target?.type
																	?.iconFullPathWhite as string
															}
															alt={entry!.node?.target?.type?.name as string}
														/>
													</Box>

													<Text
														css={[
															styles.genericTextStyles,
															styles.divisorStyle,
														]}
													>
														{kFormatNumber(achievedNumber)}
													</Text>
													<Box css={styles.slashStyles} />
													<Text
														css={[
															styles.genericTextStyles,
															styles.dividendStyle,
														]}
													>
														{kFormatNumber(entry!.node.targetValue)}
													</Text>
												</Box>
											</Box>
										</TouchableOpacity>
									)
								})}
								
							</Box>
						</Box>
						<Box marginV={12}>
							<Button
								variant="secondary"
								onPress={() => {
									nav.push("/challenges/current/")
								}}
								fullWidth
							>
								View challenge details
							</Button>
						</Box>
						<Box grid column css={styles.boxWrapperStyles}>
							<ImageBackground
								style={{ width: "100%", height: "100%", position: "relative" }}
								resizeMode="cover"
								resizeMethod="resize"
								imageStyle={{ transform: [{ scale: 2 }] }}
								source={require("../../../assets/images/dark-bg.png")}
							>
								<Box css={styles.boxStyles}>
									<Box grid row>
										<Text
											css={[
												styles.boxTextStyles,
												{ marginBottom: sizeRhythmVertical },
											]}
											variant="h2"
										>
											ANNUAL PASS - SIGN UP NOW!
										</Text>
									</Box>

									<Box css={{ display: "flex", flexDirection: "row" }}>
										<Box
											css={{
												flex: 8,
												paddingRight: sizeRhythmHorizontal,
												width: "80%",
											}}
										>
											<Text
												light
												css={[
													styles.boxTextStyles,
													{ fontSize: 24, lineHeight: 27, width: "100%" },
												]}
											>
												IT&apos;S NOT TOO LATE TO GET 2 MEDALS FOR FREE!
											</Text>
										</Box>

										<Box
											css={{
												flex: 2,
												flexBasis: "20%",
												maxWidth: "20%",
												flexDirection: "row",
												alignItems: "center",
											}}
										>
											<ChevronButton
												fill={colorBrandAlternative}
												css={styles.chevronStyles}
												direction={ChevronButtonDirection.RIGHT}
												onPress={() => {
													nav.push("/join/entry")
												}}
											/>
										</Box>
									</Box>
								</Box>
							</ImageBackground>
						</Box>
					</Box>
				) : (
					<JoinChallengeHomepageCTA />
				)}
			</Box>
		</PageLayout>
	)
}
