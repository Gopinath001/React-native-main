import { Avatar } from "components/Avatar"
import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { ChevronButton } from "components/Buttons/Chevron"
import { Image } from "components/Image"
import { Text } from "components/Text"
import { colorBrandAlternative, sizeRhythmVertical } from "@rap-theme"
import { apiMonthToName, monthNameToIndex, normalizeId } from "utils"
import {
	ChallengeEntry,
	ChallengeEntryEdge,
	UserProfile,
	UserProfileEdge,
} from "@rap-api/core"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { FloatingCard } from "components/FloatingCard"
import { AddEvidence } from "screens/AddEvidence"
import { ChangeChallengeTarget } from "screens/ChangeChallengeTarget"
import { MoreHorizIcon } from "icons/MoreHoriz"
import {
	avatarStyles,
	buttonStyles,
	challengeRowStyles,
	chevronButtonStyles,
	dateStyles,
	displayStyles,
	iconImageStyles,
	iconStyles,
	moreButtonStyles,
	moreStyles,
	timelineHeadingStyle,
} from "../styles"
import { ChevronButtonDirection } from "components/Buttons/Chevron/types"
import {
	AccordionContentContentProps,
	AccordionContent,
} from "components/Accordion"
import { EntrySetTarget } from "components/EntrySetTarget"
import { GoalProgress } from "components/GoalProgress"
import { EntryTimeline } from "../EntryTimeline"

type CurrentPreviousMonthsProps = {
	challengeEntries: ChallengeEntryEdge[]
	profilesWithChallengeEntries: UserProfileEdge[]
	refetch: () => void
}

const profilesTakingPartInChallenge = (
	challengeId: string,
	profiles: UserProfileEdge[],
): UserProfileEdge[] => {
	return profiles.filter((profile) =>
		new Set(
			profile.node?.challengeEntries?.edges
				?.map((entry) => entry?.node?.id)
				.flat(2),
		).has(challengeId),
	)
}

export default function CurrentPreviousMonths({
	challengeEntries,
	profilesWithChallengeEntries,
	refetch,
}: CurrentPreviousMonthsProps) {
	const nav = useHistory()
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
	const [addPersonalisedTargetTo, setAddPersonalisedTargetTo] = useState<
		ChallengeEntry | false
	>(false)
	const [accordionContentArray, setAccordionContentArray] = useState(
		Array.from({ length: 12 }, () => []) as ChallengeEntry[][],
	)
	const [accordionContent, setAccordionContent] = useState<
		AccordionContentContentProps[]
	>([])

	const today = new Date()
	const currentYear = today.getFullYear()
	const currentMonthReal = today.getMonth() + 1

	// This function groups all the entries by month in a single pass.
	useEffect(() => {
		const nextAccordionContentArray: ChallengeEntry[][] = Array.from(
			{ length: 12 },
			() => [],
		)
		for (const entry of challengeEntries) {
			if (!entry.node) continue

			// Month array is zero-indexed
			const target = nextAccordionContentArray[entry.node.month - 1]

			target.push(entry.node)
		}
		setAccordionContentArray(nextAccordionContentArray)
	}, [challengeEntries])

	useEffect(() => {
		const nextAccordionContent = []
		for (let month = 0; month < 12; month++) {
			// Don't render rows that have no entries.
			if (accordionContentArray[month].length <= 0) continue

			// Months are zero-indexed in JS, but API returns real month
			const realMonth = month + 1

			nextAccordionContent[month] = {
				name: (
					<Text
						css={{
							display: "flex",
							flexDirection: "row",
							alignContent: "center",
							justifyContent: "center",
							height: "100%",
						}}
					>
						<Text bold variant="inline" css={dateStyles}>
							{apiMonthToName(realMonth).toUpperCase()}{" "}
						</Text>
						<Text light variant="inline" css={dateStyles}>
							{new Date().getFullYear()}
						</Text>
					</Text>
				),
				realMonth: realMonth,
				month: apiMonthToName(realMonth),
				open: parseInt(selectedMonth, 10) === month,
				contents: (
					<>
						{accordionContentArray[month].map((entry) => {
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
														"/complete-challenge/" + normalizeId(entry.id),
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
														"/complete-challenge/" + normalizeId(entry.id),
													)
												}
											>
												Finish Challenge
											</Button>
										</Box>
									</>
								)

							const entryIsValidForProgressAndCompletion =
								entry.year <= currentYear && entry.month <= currentMonthReal
							const progressButtonOrMessage =
								entryIsValidForProgressAndCompletion ? (
									callToActionButton
								) : (
									<Text>
										You will be able to add progress to this challenge from the
										1st of {apiMonthToName(realMonth)}.
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
											refreshTimeline={async () => refetch()}
											entryId={normalizeId(entry?.id)}
											disallowProgressEntry={entry?.completed ? true : false}
										/>
									</>
								) : (
									addProgressButton
								)

							const displayName = entry.personalisedMedal
								? "PERSONALISED"
								: entry.target.displayName

							return (
								<Box
									
									key={`${month}_${entry.id}`}
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
										{entry.target.type ? (
											<Box
												grid
												alignContent="center"
												verticallyAlignContent="center"
												css={[iconStyles, { flexGrow: 0 }]}
											>
												<Image
													width={32}
													height={32}
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
												justifyContent: "center",
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
														<MoreHorizIcon fill={colorBrandAlternative} />
													</Button>
												)}
										</Box>
									</Box>
									<Box grid row>
										{profilesTakingPartInChallenge(
											entry.id,
											profilesWithChallengeEntries,
										).map((profile) => {
											return (
												<Box
													key={profile.node?.id}
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
															user={profile.node as UserProfile}
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
														
													>
														<GoalProgress
															progress={parseInt(entry.totalProgress, 10)}
															progressPercent={entry.totalProgressPercentage}
															target={entry.target?.value}
														/>
													</Box>
													<Box
														css={{
															flex: undefined,
															flexGrow: undefined,
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
											)
										})}
									</Box>
									{buttonOrTimeline}
								</Box>
							)
						})}
					</>
				),
			}
		}
		setAccordionContent(nextAccordionContent)
	}, [accordionContentArray])

	const overlay = !!entryId ? (
		<FloatingCard
			openHeight="75%"
			open={!!entryId && addViewProgress === "new-progress"}
			onClose={() => nav.push(`/challenges/${selectedTab}/${selectedMonth}`)}
			closeButton
		>
			<AddEvidence
				entry={entryId!}
				month={
					(challengeEntries.find(
						(entry) => normalizeId(entry?.node?.id as string) === entryId,
					)?.node?.month as number) - 1
				}
				year={
					challengeEntries.find(
						(entry) => normalizeId(entry?.node?.id as string) === entryId,
					)?.node?.year as number
				}
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
				<Box marginV={sizeRhythmVertical}>
					<Button
						variant="secondary"
						css={buttonStyles}
						fullWidth
						onPress={() => nav.push("/complete-challenge/" + entryId)}
					>
						<Text>Finish Challenge</Text>
					</Button>
				</Box>
				<Box>
					<Button
						variant="bordered-alternative"
						css={buttonStyles}
						fullWidth
						onPress={() =>
							nav.push(
								`/challenges/${selectedTab}/${selectedMonth}/${normalizeId(
									entryId,
								)}/change-distance`,
							)
						}
					>
						<Text>Change Distance</Text>
					</Button>
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
						refetch()
					}}
				/>
			</FloatingCard>
		) : null
	return (
		<Box
			grid
			column
			css={{ maxWidth: "100%", paddingRight: 8, paddingLeft: 8 }}
		>
			<AccordionContent
				content={accordionContent.reverse()}
				onChange={(tab) => {
					if (!tab.open) nav.replace(`/challenges/${selectedTab}`)
					else
						nav.replace(
							`/challenges/${selectedTab}/${monthNameToIndex(tab.month)}`,
						)
				}}
			/>
			{overlay}
			{entryMoreCard}
			{editChallengeCard}
			{setEntryTarget}
		</Box>
	)
}
