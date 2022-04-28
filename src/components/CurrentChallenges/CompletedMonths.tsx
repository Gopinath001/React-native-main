import { Avatar } from "components/Avatar"
import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { ChevronButton } from "components/Buttons/Chevron"
import { Image } from "components/Image"
import { Text } from "components/Text"
import {
	colorBrandAlternative,
	colorBrandPrimary,
	sizeRhythmVertical,
} from "@rap-theme"
import { apiMonthToName, normalizeId, realDate } from "utils"
import {
	ChallengeEntry,
	ChallengeEntryEdge,
	useCompletedChallengesQuery,
	useCurrentChallengeMonthsQuery,
} from "@rap-api/core"
import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { FloatingCard } from "components/FloatingCard"
import { AddEvidence } from "screens/AddEvidence"
import { ChangeChallengeTarget } from "screens/ChangeChallengeTarget"
import { GoalProgress } from "../GoalProgress"
import { EntryTimeline } from "./EntryTimeline"
import { EntrySetTarget } from "../EntrySetTarget"
import { MoreHorizIcon } from "icons/MoreHoriz"
import {
	avatarStyles,
	challengeRowStyles,
	chevronButtonStyles,
	dateStyles,
	displayStyles,
	iconImageStyles,
	iconStyles,
	moreButtonStyles,
	moreStyles,
	timelineHeadingStyle,
	accordionRowTitleStyles,
} from "./styles"
import { ChevronButtonDirection } from "components/Buttons/Chevron/types"
import { Loading } from "components/Loading"
import { chevronStyles, containerStyles } from "components/Accordion/styles"
import { UserContext } from "providers/User"
import { OpenMonth } from "./CurrentPreviousMonths/types"

export default function CompletedChallenges() {
	const nav = useHistory()
	
	const guestStateLinkToJoin = () => {
		nav.push("/join/entry", {
			guestIntent: true,
		})
	}
	const { loading: monthLoading, refetch: fetchMonth } =
		useCompletedChallengesQuery({
			skip: true,
		})

	// Get the date
	const today = realDate()
	const currentYear = today.getFullYear()
	const currentMonthReal = today.getMonth() + 1

	const [monthCache, setMonthCache] = useState<
		Record<string, ChallengeEntryEdge[]>
	>({})
	const [openMonth, setOpenMonth] = useState<OpenMonth | undefined>()
	const { data: availableMonthsRaw, loading: loadingMonths } =
		useCurrentChallengeMonthsQuery({
			variables: {
				completed: true,
				years: [currentYear],
			},
		})
	const [availableMonths, setAvailableMonths] = useState<OpenMonth[]>([])
	const {
		selectedTab = "current",
		entryId,
		selectedMonth = "0",
		addViewProgress,
	} = useParams<{
		entryId?: string
		selectedMonth?: string
		selectedTab: "current" | "upcoming" | "completed"
		addViewProgress?:
			| "new-progress"
			| "view-progress"
			| "more"
			| "change-distance"
		challengeProgressEntryId?: string
	}>()
	const { selectedProfile } = useContext(UserContext)
	const [addPersonalisedTargetTo, setAddPersonalisedTargetTo] = useState<
		ChallengeEntry | false
	>(false)

	const fetchAndCacheMonthAndYear = async (month: number, year: number) => {
		const { data } = await fetchMonth({
			month,
			year,
		})

		setMonthCache({
			...monthCache,
			[`${month}-${year}`]:
				(data.challengeEntries?.edges as ChallengeEntryEdge[]) ?? [],
		})
	}

	const REFetchMonthAndCacheMonthAndYear = async (
		month: number,
		year: number,
	) => {
		const nextMonthsCache = { ...monthCache }

		delete nextMonthsCache[`${month}-${year}`]
		setMonthCache(nextMonthsCache)
		fetchAndCacheMonthAndYear(month, year)
	}

	
	useEffect(() => {
		if (!availableMonthsRaw?.challengeEntries?.edges) return

		const monthYears: Record<string, boolean> = {}

		const nextAvailableMonths =
			availableMonthsRaw.challengeEntries.edges.filter((available) => {
				const target = `${available!.node!.month!}${available!.node!.year!}`
				if (monthYears[target]) return false

				monthYears[target] = true
				return true
			})

		setAvailableMonths(
			nextAvailableMonths.map((available) => ({
				node: {
					month: available!.node!.month,
					year: available!.node!.year,
				},
			})),
		)
	}, [availableMonthsRaw])

	// Default the open month to the top one.
	useEffect(() => {
		if (typeof openMonth === "undefined" && availableMonths?.length)
			setOpenMonth(availableMonths[0])
	}, [availableMonths])

	// Check the "cache" for the open month's data otherwise fetch it.
	useEffect(() => {
		;(async () => {
			if (openMonth?.node) {
				await fetchAndCacheMonthAndYear(
					openMonth.node.month,
					openMonth.node.year,
				)
			}
		})()
	}, [openMonth])

	const overlay = !!entryId ? (
		<FloatingCard
			openHeight="75%"
			open={!!entryId && addViewProgress === "new-progress"}
			closeButton
		>
			<AddEvidence
				entry={entryId!}
				month={
					(monthCache[`${openMonth!.node.month}-${openMonth!.node.year}`]?.find(
						(entry) => normalizeId(entry?.node?.id as string) === entryId,
					)?.node?.month as number) - 1
				}
				year={
					monthCache[`${openMonth!.node.month}-${openMonth!.node.year}`]?.find(
						(entry) => normalizeId(entry?.node?.id as string) === entryId,
					)?.node?.year as number
				}
				onComplete={async () => {
					await REFetchMonthAndCacheMonthAndYear(
						openMonth!.node.month,
						openMonth!.node.year,
					)
				}}
			/>
		</FloatingCard>
	) : null

	const entryMoreCard =
		!!entryId && selectedTab === "current" ? (
			<FloatingCard
				openHeight={addViewProgress === "change-distance" ? "75%" : "40%"}
				open={!!entryId && addViewProgress === "more"}
				onClose={() => nav.push(`/challenges/current/${selectedMonth}`)}
			>
				<Box
					grid
					column
					css={{ width: "100%", marginTop: sizeRhythmVertical * 1.5 }}
				>
					<Box column marginV={sizeRhythmVertical} css={{ width: "100%" }}>
						<Button
							variant="secondary"
							fullWidth
							onPress={() => nav.push("/complete-challenge/" + entryId)}
						>
							Finish Challenge
						</Button>
					</Box>
					<Box column>
						<Button
							variant="bordered-alternative"
							fullWidth
							onPress={() =>
								nav.push(
									`/challenges/${selectedTab}/${selectedMonth}/${normalizeId(
										entryId,
									)}/change-distance`,
								)
							}
						>
							Change Distance
						</Button>
					</Box>
				</Box>
			</FloatingCard>
		) : null

	const editChallengeCard = !!entryId ? (
		<FloatingCard
			openHeight="75%"
			open={!!entryId && addViewProgress === "change-distance"}
			onClose={() => nav.push(`/challenges/${selectedTab}/${selectedMonth}`)}
		>
			<ChangeChallengeTarget entry={entryId!} />
		</FloatingCard>
	) : null

	const setEntryTarget =
		addPersonalisedTargetTo !== false ? (
			<FloatingCard
				open={true}
				openHeight="auto"
				onClose={() => nav.push(`/challenges/${selectedTab}/${selectedMonth}`)}
			>
				<EntrySetTarget
					entry={addPersonalisedTargetTo}
					onSave={() => {
						setAddPersonalisedTargetTo(false)
					}}
				/>
			</FloatingCard>
		) : null

	if (loadingMonths) return <Loading />
	if (availableMonths.length === 0)
		return (
			<Box grid column marginV={24}>
				<Box
					css={{
						flex: undefined,
						flexGrow: undefined,
						minWidth: "100%",
					}}
					marginV={12}
				>
					<Text
						variant="paragraph"
						css={{ minWidth: "100%", textAlign: "center" }}
					>
						You haven&apos;t completed any challenges.
					</Text>
				</Box>
				<Box
					css={{
						
						flexGrow: 0,
						
						minWidth: "100%",
					}}
					marginV={12}
				>
					<Button
						variant="secondary"
						fullWidth
						onPress={guestStateLinkToJoin}
						css={{ minWidth: "100%" }}
					>
						Join a challenge
					</Button>
				</Box>
			</Box>
		)

	return (
		<Box
			grid
			column
			css={{ maxWidth: "100%", paddingRight: 8, paddingLeft: 8, flexGrow: 0 }}
		>
			{availableMonths?.map((available) => (
				<Box
					grid
					column
					key={`${available?.node?.month}-${available?.node?.year}`}
					onPress={() => {
						setOpenMonth(available)
					}}
				>
					<Box grid row nowrap css={containerStyles}>
						<Box
							grid
							css={{
								flexDirection: "row",
								alignContent: "center",
							}}
						>
							<Text key={`${available}`} css={accordionRowTitleStyles}>
								<Text bold variant="inline" css={dateStyles}>
									{apiMonthToName(available?.node?.month).toUpperCase()}{" "}
								</Text>
								<Text light variant="inline" css={dateStyles}>
									{available?.node?.year}
								</Text>
							</Text>
						</Box>
						<Box
							css={{
								display: "flex",
								flexDirection: "row",
								alignContent: "center",
								justifyContent: "flex-end",
							}}
						>
							<ChevronButton
								fill={colorBrandPrimary}
								css={chevronStyles}
								direction={
									openMonth?.node?.month === available?.node?.month
										? ChevronButtonDirection.DOWN
										: ChevronButtonDirection.RIGHT
								}
								onPress={() => setOpenMonth(available)}
							/>
						</Box>
					</Box>

					<Box grid column small={10}>
						{openMonth?.node &&
						openMonth.node.month === available?.node?.month &&
						openMonth.node.year === available?.node?.year ? (
							monthLoading ? (
								<Loading />
							) : (
								<>
									{monthCache[
										`${openMonth.node.month}-${openMonth.node.year}`
									]?.map((entryEdge) => {
										if (!entryEdge?.node) return null
										const entry = entryEdge.node
										const callToActionButton =
											entry.personalisedMedal &&
											!entry.overrideChallengeTargetValue ? (
												<>
													<Box row marginV={sizeRhythmVertical}>
														<Button
															fullWidth
															variant="secondary"
															onPress={() =>
																nav.replace(
																	`/challenges/${selectedTab}/${selectedMonth}/${normalizeId(
																		entry.id,
																	)}/new-progress`,
																)
															}
														>
															Add Progress
														</Button>
													</Box>
													<Box row>
														<Button
															fullWidth
															variant="bordered-alternative"
															onPress={() => setAddPersonalisedTargetTo(entry)}
														>
															{entry.targetValue !== entry.target.value
																? "Set Personalised Goal"
																: "Change Personal Goal"}
														</Button>
													</Box>
													<Box row marginV={sizeRhythmVertical}>
														<Button
															variant="bordered-alternative"
															// css={buttonStyles}
															fullWidth
															onPress={() =>
																nav.push(
																	"/complete-challenge/" +
																		normalizeId(entry.id),
																)
															}
														>
															Finish Challenge
														</Button>
													</Box>
												</>
											) : (
												<>
													<Box row marginV={sizeRhythmVertical}>
														<Button
															fullWidth
															variant="secondary"
															onPress={() =>
																nav.replace(
																	`/challenges/${selectedTab}/${selectedMonth}/${normalizeId(
																		entry.id,
																	)}/new-progress`,
																)
															}
														>
															Add Progress
														</Button>
													</Box>
													<Box row>
														<Button
															variant="bordered-alternative"
															// css={buttonStyles}
															fullWidth
															onPress={() =>
																nav.push(
																	"/complete-challenge/" +
																		normalizeId(entry.id),
																)
															}
														>
															Finish Challenge
														</Button>
													</Box>
												</>
											)

										const entryIsValidForProgressAndCompletion =
											entry.year <= currentYear &&
											entry.month <= currentMonthReal
										const progressButtonOrMessage =
											entryIsValidForProgressAndCompletion ? (
												callToActionButton
											) : (
												<Text>
													You will be able to add progress to this challenge
													from the 1st of{" "}
													{apiMonthToName(openMonth?.node?.month)}.
												</Text>
											)

										const addProgressButton =
											selectedTab !== "current" ? null : progressButtonOrMessage

										const buttonOrTimeline =
											addViewProgress !== "view-progress" ? (
												addProgressButton
											) : entryId === normalizeId(entry.id) &&
											  selectedTab !== "upcoming" ? (
												<>
													<Text variant="h4" css={timelineHeadingStyle}>
														PROGRESS TIMELINE
													</Text>
													<EntryTimeline
														refreshTimeline={async () => {}}
														entryId={normalizeId(entry?.id)}
														disallowProgressEntry={
															entry?.completed ? true : false
														}
													/>
												</>
											) : (
												addProgressButton
											)

										const displayName = entry.personalisedMedal
											? "PERSONALISED"
											: entry?.target?.displayName

										return (
											<>
												<Box
													key={entry.id}
													css={challengeRowStyles}
													verticallyAlignContent="center"
												>
													<Box
														grid
														row
														nowrap
														verticallyAlignContent="center"
														marginV={8}
													>
														{entry?.target?.type ? (
															<Box
																grid
																alignContent="center"
																verticallyAlignContent="center"
																css={[iconStyles, { flexGrow: 0 }]}
															>
																<Image
																	src={entry.target.type?.iconFullPathWhite}
																	alt={entry.displayName}
																	css={iconImageStyles}
																/>
															</Box>
														) : null}
														<Box
															grid
															css={{
																flexDirection: "row",
																alignContent: "center",
															}}
														>
															<Text light css={displayStyles}>
																{displayName}
															</Text>
														</Box>
														<Box
															grid
															alignContent="flex-end"
															// verticallyAlignContent="flex-end"
															css={[
																moreStyles,
																{
																	alignContent: "flex-end",
																},
															]}
														>
															{selectedTab === "current" &&
																entryIsValidForProgressAndCompletion && (
																	<Button
																		onPress={() =>
																			nav.replace(
																				`/challenges/${selectedTab}/${selectedMonth}/${normalizeId(
																					entry.id,
																				)}/more`,
																			)
																		}
																		variant="none"
																		noHoverShadow
																		css={moreButtonStyles}
																	>
																		<MoreHorizIcon
																			fill={colorBrandAlternative}
																			width={"100"}
																		/>
																	</Button>
																)}
														</Box>
													</Box>
													<Box grid row>
														<Box
															key={selectedProfile!.id!}
															grid
															row
															nowrap
															marginV={4}
														>
															<Box
																css={{
																	flex: undefined,
																	flexGrow: undefined,
																}}
															>
																<Avatar
																	css={avatarStyles}
																	user={selectedProfile!}
																/>
															</Box>
															<Box
																css={{
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	justifyContent: "center",
																	height: "100%",
																}}
																// css={progressColumn}
															>
																<GoalProgress
																	progress={parseInt(entry.totalProgress, 10)}
																	progressPercent={
																		entry.totalProgressPercentage
																	}
																	target={entry.target?.value}
																/>
															</Box>
															<Box
																css={{
																	flex: undefined,
																	flexGrow: undefined,
																	minHeight: "100%",
																	alignItems: "center",
																	justifyContent: "center",
																}}
															>
																{entryIsValidForProgressAndCompletion && (
																	<ChevronButton
																		noHoverShadow
																		fill="white"
																		variant="secondary"
																		css={chevronButtonStyles}
																		direction={
																			entryId
																				? ChevronButtonDirection.DOWN
																				: ChevronButtonDirection.RIGHT
																		}
																		onPress={() => {
																			if (addViewProgress === "view-progress")
																				nav.push(
																					`/challenges/${selectedTab}/${selectedMonth}`,
																				)
																			else
																				nav.push(
																					`/challenges/${selectedTab}/${selectedMonth}/${normalizeId(
																						entry.id,
																					)}/view-progress`,
																				)
																		}}
																	/>
																)}
															</Box>
														</Box>
													</Box>
													{buttonOrTimeline}
												</Box>
											</>
										)
									})}
								</>
							)
						) : null}
					</Box>
				</Box>
			))}
			{overlay}
			{entryMoreCard}
			{editChallengeCard}
			{setEntryTarget}
		</Box>
	)
}
