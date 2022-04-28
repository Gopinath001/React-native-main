import {
	ChallengeEntryProgress,
	ChallengeEntryProgressEdge,
	Maybe,
	MediaObjectEdge,
	useRemoveChallengeEntryProgressMutation,
} from "@rap-api/core"
import { EditEvidence } from "screens/EditEvidence"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { Avatar } from "components/Avatar"
import { Button } from "components/Buttons"
import { sizeRhythmHorizontal } from "@rap-theme"
import { useContext, useState } from "react"
import { FloatingCard } from "components/FloatingCard"
import { Image } from "components/Image"
import { UserContext } from "providers/User"
import { UserProfile } from "@rap-api/core"
import { kFormatNumber } from "utils"
import { CollectionsIcon } from "icons/Collections"
import {
	avatarStyles,
	containerStyles,
	evidenceSvgStyles,
	evidenceTextStyles,
	pillStyle,
	textStyles,
} from "components/Form/Input/DOB/styles"
import { ViewportShim } from "components/ViewportShim"
import {
	headingStyles,
	detailStyles,
	iconStyles,
	iconImageStyles,
	cardAvatarStyles,
	gridStyles,
	labelStyles,
	actionsStyles,
	valueStyles,
	previewImageStyles,
} from "./styles"

type EvidencePillProps = {
	entry: Maybe<Pick<ChallengeEntryProgressEdge, "node">>
	refreshEntry: () => void
}

const countEvidenceMedia = (evidence: MediaObjectEdge[] = []): number =>
	evidence.reduce((total, currentEvidence) => {
		if (currentEvidence.node?.contentUrl) return total + 1
		return total
	}, 0)

export function EvidencePill({ entry, refreshEntry }: EvidencePillProps) {
	if (!entry) return null

	const { user } = useContext(UserContext)
	const [shouldOpenCard, setShouldOpenCard] = useState(false)
	const [deleteConfirmation, setDeleteConfirmation] = useState(false)
	const [previewImage, setPreviewImage] = useState<string | undefined | null>(
		null,
	)
	const [editMode, setEditMode] = useState(false)

	const evidenceMedia = countEvidenceMedia(
		entry?.node?.evidence?.edges as MediaObjectEdge[],
	)

	const [
		removeChallengeEntryProgress,
		{ loading: removingChallengeEntryProgress },
	] = useRemoveChallengeEntryProgressMutation()

	const handlePress = () => {
		setShouldOpenCard(true)
	}

	const handleCardClosed = () => {
		setShouldOpenCard(false)
		setEditMode(false)
	}

	const card = shouldOpenCard ? (
		<FloatingCard
			open={shouldOpenCard}
			openHeight={deleteConfirmation ? "auto" : "90%"}
			closeButton={deleteConfirmation ? false : true}
			onClose={handleCardClosed}
		>
			<Box css={containerStyles}>
				{deleteConfirmation ? (
					<>
						<Text css={headingStyles}>
							Are you sure you want to delete your progress entry?
						</Text>

						<Box marginV={20}>
							<Button
								variant="secondary"
								fullWidth
								onPress={async () => {
									if (removingChallengeEntryProgress) return

									await removeChallengeEntryProgress({
										variables: {
											challengeEntryProgressId: entry?.node?.id as string,
										},
									})
									refreshEntry()
								}}
							>
								Delete entry
							</Button>{" "}
							<Box marginV={20}>
								<Button
									variant="secondary"
									outlined
									fullWidth
									onPress={() => setDeleteConfirmation(false)}
								>
									Cancel
								</Button>
							</Box>
						</Box>
					</>
				) : (
					<>
						<Text variant="h3">PROGRESS LOG</Text>
						{!editMode ? (
							<>
								<Box grid row css={detailStyles}>
									<Box
										grid
										column
										css={{
											marginRight: sizeRhythmHorizontal,
											flexBasis: "auto",
										}}
										verticallyAlignContent={"center"}
									>
										<Box
											grid
											css={iconStyles}
											alignContent="center"
											verticallyAlignContent="center"
										>
											<Image
												width={32}
												height={32}
												src={
													entry?.node?.entry?.target?.type?.iconFullPathWhite!
												}
												alt={entry?.node?.entry?.target?.displayName!}
												css={iconImageStyles}
											/>
										</Box>
									</Box>
									<Box
										grid
										column
										css={{
											marginRight: sizeRhythmHorizontal,
											flexBasis: "auto",
										}}
										verticallyAlignContent={"center"}
									>
										<Text light variant="h4">
											{entry?.node?.entry?.personalisedMedal
												? "PERSONALISED"
												: entry?.node?.entry?.target?.displayName}
										</Text>
									</Box>
									<Box
										grid
										column
										css={{
											flexBasis: "auto",
											marginLeft: "auto",
										}}
										verticallyAlignContent={"center"}
									>
										<Avatar
											css={cardAvatarStyles}
											user={user?.ownerProfile as UserProfile}
										/>
									</Box>
								</Box>
								<Text>
									Evidence submitted manually on{" "}
									{new Intl.DateTimeFormat().format(
										new Date(`${entry?.node?.created}`),
									)}
								</Text>
								<Box css={gridStyles}>
									<Text light variant="h4" css={labelStyles}>
										Date of activity:
									</Text>

									<Text light variant="h4" css={valueStyles}>
										{new Intl.DateTimeFormat().format(
											new Date(`${entry?.node?.evidenceDate}`),
										)}
									</Text>

									<Text light variant="h4" css={labelStyles}>
										Distance covered:
									</Text>

									<Text light variant="h4" css={valueStyles}>
										{entry?.node?.progressString} miles
									</Text>
									{entry.node?.evidence?.edges &&
										entry.node?.evidence?.edges?.length > 0 && (
											<>
												{previewImage && (
													<>
														<ViewportShim
															onClick={() => setPreviewImage(null)}
														/>
														<Image
															alt=""
															src={previewImage}
															css={previewImageStyles}
														/>
													</>
												)}
												<Text light variant="h4" css={labelStyles}>
													Evidence submitted:
												</Text>
												<Box
													css={{
														marginTop: 12,
														overflow: "auto",
														whiteSpace: "nowrap",
														gridColumn: "1 / span 2",
													}}
												>
													{entry.node?.evidence?.edges?.map((evidence) => {
														if (!evidence?.node?.contentUrl) return null
														return (
															<Box
																key={evidence.node.id}
																onPress={() =>
																	setPreviewImage(evidence?.node?.contentUrl)
																}
																css={{
																	width: 80,
																	height: 80,
																	background: `url("${evidence.node.contentUrl}")`,
																	backgroundSize: "cover",
																	":not(:last-of-type)": {
																		marginRight: 16,
																	},
																}}
															/>
														)
													})}
												</Box>
											</>
										)}
								</Box>

								<Box css={actionsStyles}>
									<Button variant="secondary" onPress={() => setEditMode(true)}>
										Edit entry
									</Button>
									<Button
										variant="secondary"
										outlined
										onPress={() => {
											setDeleteConfirmation(true)
										}}
									>
										Delete entry
									</Button>
								</Box>
							</>
						) : (
							<EditEvidence
								entry={entry?.node as ChallengeEntryProgress}
								refreshEntry={refreshEntry}
								handleClose={() => setShouldOpenCard(false)}
							/>
						)}
					</>
				)}
			</Box>
		</FloatingCard>
	) : null

	return (
		<>
			<Box
				grid
				row
				small={6}
				medium={3}
				large={3}
				alignContent="flex-start"
				verticallyAlignContent="center"
				onPress={handlePress}
				css={containerStyles}
			>
				<Box grid css={pillStyle}>
					<Box grid row alignContent="center" verticallyAlignContent="center">
						<Avatar
							css={avatarStyles}
							user={user?.ownerProfile as UserProfile}
						/>
						<Text css={textStyles}>
							+{kFormatNumber(parseInt(entry?.node?.progressString ?? "", 10))}
						</Text>
						<Text css={[textStyles, evidenceTextStyles]}>
							<CollectionsIcon css={evidenceSvgStyles} />+{evidenceMedia}
						</Text>
					</Box>
				</Box>
			</Box>
			{card}
		</>
	)
}
