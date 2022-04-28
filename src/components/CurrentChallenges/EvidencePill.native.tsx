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
import { sizeRhythmHorizontal, colorBorders } from "@rap-theme"
import { useContext, useState } from "react"
import { FloatingCard } from "components/FloatingCard"
import { Image } from "components/Image"
import { UserContext } from "providers/User"
import { UserProfile } from "@rap-api/core"
import { progressNumberFormatter, printDateGB, printDateUS } from "utils"
import { CollectionsIcon } from "icons/Collections"
import {
	avatarStyles,
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
	labelStyles,
	valueStyles,
} from "./styles"
import { css } from "@emotion/native"
import { Dimensions, View } from "react-native"
import * as RNLocalize from "react-native-localize"

type EvidencePillProps = {
	entry: Maybe<Pick<ChallengeEntryProgressEdge, "node">>
	refreshEntry: () => void
}

const containerStyles = css({
	flex: 1,
	flexGrow: 1,
	flexShrink: 0,
	width: "100%",
	paddingHorizontal: sizeRhythmHorizontal / 2,
})

const cardContainerStyles = css({
	flexGrow: 1,
	flexShrink: 0,
	width: "100%",
	maxWidth: "100%",
	marginRight: "auto",
	paddingHorizontal: sizeRhythmHorizontal,
})

const countEvidenceMedia = (evidence: MediaObjectEdge[] = []): number =>
	evidence.reduce((total, currentEvidence) => {
		if (currentEvidence.node?.contentUrl) return total + 1
		return total
	}, 0)

export function EvidencePill({ entry, refreshEntry }: EvidencePillProps) {
	if (!entry) return null

	const dims = Dimensions.get("window")
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
		setDeleteConfirmation(false)
		setShouldOpenCard(false)
		setEditMode(false)
	}

	const deviceCountry = RNLocalize.getCountry()

	const card = shouldOpenCard ? (
		<FloatingCard
			open
			openHeight={deleteConfirmation ? "auto" : "90%"}
			closeButton={deleteConfirmation ? false : true}
			onClose={handleCardClosed}
		>
			<Box grid column css={cardContainerStyles}>
				{deleteConfirmation ? (
					<>
						<Text css={headingStyles}>
							Are you sure you want to delete your progress entry?
						</Text>

						<View style={{ width: "100%", marginTop: 16 }}>
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
							</Button>
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
						</View>
					</>
				) : !editMode ? (
					<>
						<Text variant="h3">PROGRESS LOG</Text>
						<Box
							grid
							row
							css={[
								detailStyles,
								{
									marginTop: 32,
									marginBottom: 12,
									flex: undefined,
									flexGrow: undefined,
									alignItems: "center",
								},
							]}
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
									src={entry?.node?.entry?.target?.type?.iconFullPathWhite!}
									alt={entry?.node?.entry?.target?.displayName!}
									css={iconImageStyles}
								/>
							</Box>
							<Box
								grid
								column
								css={{
									marginRight: sizeRhythmHorizontal,
								}}
								verticallyAlignContent={"center"}
							>
								<Text light variant="h4">
									{entry?.node?.entry?.personalisedMedal
										? "PERSONALISED"
										: entry?.node?.entry?.target?.displayName}
								</Text>
							</Box>

							<Avatar
								css={cardAvatarStyles}
								user={user?.ownerProfile as UserProfile}
							/>
						</Box>

						<Box
							css={{
								flex: undefined,
								flexGrow: undefined,
							}}
						>
							<Box css={{ paddingTop: 8, paddingBottom: 8 }}>
								<Text>
									Evidence submitted manually on{" "}
									{deviceCountry == "US"
										? printDateUS(new Date(`${entry?.node?.created}`))
										: printDateGB(new Date(`${entry?.node?.created}`))}
								</Text>
							</Box>
							<Box grid row css={{ paddingTop: 8, paddingBottom: 8 }}>
								<Box css={{ width: "50%" }}>
									<Text light variant="h4" css={labelStyles}>
										Date of activity:
									</Text>
								</Box>
								<Box css={{ width: "50%" }}>
									<Text light variant="h4" css={valueStyles}>
										{deviceCountry == "US"
											? printDateUS(new Date(`${entry?.node?.evidenceDate}`))
											: printDateGB(new Date(`${entry?.node?.evidenceDate}`))}
									</Text>
								</Box>
							</Box>
							<Box grid row css={{ paddingTop: 8, paddingBottom: 8 }}>
								<Box css={{ width: "50%" }}>
									<Text light variant="h4" css={labelStyles}>
										Distance covered:
									</Text>
								</Box>
								<Box css={{ width: "50%" }}>
									<Text light variant="h4" css={valueStyles}>
										{entry?.node?.progressString}{" "}
										{entry?.node?.entry?.target?.type?.name === "Steps"
											? "steps"
											: "miles"}
									</Text>
								</Box>
							</Box>

							{entry.node?.evidence?.edges &&
								entry.node?.evidence?.edges?.length > 0 && (
									<>
										{previewImage && (
											<>
												<ViewportShim onClick={() => setPreviewImage(null)} />
												<Image
													alt=""
													width={dims.width * 0.7}
													height={dims.width * 0.7}
													src={previewImage}
												/>
											</>
										)}
										<Text light variant="h4" css={labelStyles}>
											Evidence submitted:
										</Text>
										<Box
											row
											css={{
												marginTop: 12,
												whiteSpace: "nowrap",
											}}
										>
											{entry.node?.evidence?.edges?.map((evidence) => {
												if (!evidence?.node?.contentUrl) return null
												return (
													<Box
														column
														key={evidence.node.id}
														onPress={() =>
															setPreviewImage(evidence?.node?.contentUrl)
														}
													>
														<Image
															width={100}
															height={100}
															src={evidence.node.contentUrl}
															alt="Evidence submssion"
														/>
													</Box>
												)
											})}
										</Box>
									</>
								)}
						</Box>
						<Box
							grid
							row
							marginV={12}
							css={{
								flex: undefined,
								flexGrow: undefined,
							}}
						>
							<Button variant="secondary" onPress={() => setEditMode(true)}>
								Edit entry
							</Button>
						</Box>
						<View
							style={{
								width: "100%",
							}}
						>
							<Button
								variant="secondary"
								outlined
								onPress={() => {
									setDeleteConfirmation(true)
								}}
							>
								DELETE ENTRY
							</Button>
						</View>
					</>
				) : (
					<EditEvidence
						entry={entry?.node as ChallengeEntryProgress}
						refreshEntry={refreshEntry}
						handleClose={() => handleCardClosed()}
					/>
				)}
			</Box>
		</FloatingCard>
	) : null

	return (
		<>
			<Box
				grid
				// row
				onPress={handlePress}
				css={[containerStyles, {}]}
			>
				<Box row css={[pillStyle, {}]}>
					<Box
						grid
						row
						nowrap
						alignContent="center"
						verticallyAlignContent="center"
						css={{
							justifyContent: "center",
							alignItems: "center",
							flex: 0,
							flexGrow: 0,
						}}
					>
						<Avatar
							css={avatarStyles}
							user={user?.ownerProfile as UserProfile}
						/>
						<Text css={[textStyles, { marginLeft: 8, marginRight: 8 }]}>
							+
							{progressNumberFormatter(
								parseFloat(entry?.node?.progressString ?? ""),
							)}
						</Text>

						<CollectionsIcon fill={colorBorders} width={24} height={24} />
						<Text css={[textStyles, evidenceTextStyles]}>+{evidenceMedia}</Text>
					</Box>
				</Box>
			</Box>
			{card}
		</>
	)
}
