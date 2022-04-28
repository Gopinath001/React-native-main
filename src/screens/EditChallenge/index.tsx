import { Text } from "components/Text"
import {
	colorBrandAlternative,
	colorBrandPrimary,
	colorPairingsLightOnDarkForeground,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import {
	ChallengeEntry,
	ChallengeTarget,
	ChallengeTargetEdge,
	useChallengeByIdForEditingQuery,
} from "@rap-api/core"
import { useHistory, useParams } from "react-router"
import { PageLayout } from "components/PageLayout"
import { Box } from "components/Box"
import { denormalizeId } from "utils"
import { css } from "@emotion/react"
import { Image } from "components/Image"
import { Button } from "components/Buttons"
import { FloatingCard } from "components/FloatingCard"
import { ChangeChallengeDistanceConfirm } from "screens/ChangeChallengeDistanceConfirm"
import { normalizeId } from "utils"
import { View } from "react-native"
import { containerStyles } from "components/ChallengeFlow/ChallengeTypeGrid/styles.native"

const buttonContainerStyles = css({
	paddingLeft: sizeRhythmVertical / 4,
	paddingRight: sizeRhythmVertical / 4,
	paddingTop: sizeRhythmVertical / 4,
	paddingBottom: sizeRhythmVertical / 4,
	minWidth: "33%",
	height: 172,
	flex: 3.3,
})

const buttonStyles = css({
	backgroundColor: colorBrandAlternative,
	flexDirection: "column",
	textAlign: "center",
	justifyContent: "center",
	borderRadius: 4,
	paddingLeft: 8,
	paddingRight: 8,
	width: "100%",
})

const disabledButtonStyles = css({
	backgroundColor: "#A9A9A9",
	flexDirection: "column",
	textAlign: "center",
	justifyContent: "center",
	borderRadius: 4,
	paddingLeft: 8,
	paddingRight: 8,
	width: "100%",
})

const textStyles = css({
	fontSize: 20,
	// fontWeight: "700",
	color: colorPairingsLightOnDarkForeground,
})

const iconStyles = css({
	backgroundColor: colorBrandPrimary,
	color: "#fff",
	padding: 4,
	marginTop: 4,
	marginRight: sizeRhythmHorizontal / 2,
	width: 40,
	height: 40,
})
const iconImageStyles = css({
	
})

const headerStyles = css({
	
})
const headerMargin = css({
	marginLeft: sizeRhythmHorizontal / 2,
})

export default function EditChallenge() {
	const params =
		useParams<{ entryId: string; attributeName: string; value: string }>()

	const nav = useHistory()

	const { data } = useChallengeByIdForEditingQuery({
		variables: { id: denormalizeId(params.entryId, "challenge_entries") },
	})

	const selectedTarget = data?.challengeEntry?.target?.id

	const challengeChangeConfirmationCard = !!params.value ? (
		<FloatingCard
			openHeight="auto"
			open={!!params.value}
			onClose={() => nav.push(`/edit-challenge/${params.entryId}/distance`)}
		>
			<ChangeChallengeDistanceConfirm
				entry={data?.challengeEntry as ChallengeEntry}
				valueId={params?.value}
			/>
		</FloatingCard>
	) : null

	return (
		<PageLayout>
			<Box grid column>
				<Box grid row nowrap verticallyAlignContent={"flex-start"}>
					<Box grid column nowrap small={8} css={[headerStyles, headerMargin]}>
						<Box grid row small={6}>
							<Text verticalMargin={false} variant={"h2"}>
								Change Your Distance
							</Text>
						</Box>
						<Box grid row small={10}>
							<Text variant="h4" light>
								Current Distance:{" "}
								<Text css={{ color: colorBrandPrimary }}>
									{data?.challengeEntry?.target?.displayName}
								</Text>
							</Text>
						</Box>
					</Box>
					<Box
						grid
						column
						alignContent={"flex-end"}
						small={2}
						medium={2}
						large={2}
					>
						<Box css={iconStyles}>
							<Image
								src={data?.challengeEntry?.target?.type?.iconFullPathWhite!}
								alt={data?.challengeEntry?.target?.displayName!}
								css={iconImageStyles}
							/>
						</Box>
					</Box>
				</Box>
				<View style={containerStyles}>
					{data?.challengeEntry?.target?.type?.targets?.edges
						?.filter(
							(
								challengeTargetEdge,
							): challengeTargetEdge is ChallengeTargetEdge =>
								!!challengeTargetEdge?.node,
						)
						.map(
							(challengeTarget): ChallengeTarget =>
								challengeTarget.node as ChallengeTarget,
						)
						.map((challengeTarget) => (
							<Box
								key={challengeTarget.value}
								small={3.3}
								medium={3.3}
								large={2}
								css={buttonContainerStyles}
							>
								<Button
									css={
										selectedTarget !== challengeTarget.id
											? buttonStyles
											: disabledButtonStyles
									}
									onPress={() => {
										selectedTarget !== challengeTarget.id
											? nav.push(
													`/edit-challenge/${
														params.entryId
													}/distance/${normalizeId(challengeTarget.id)}`,
											  )
											: null
									}}
								>
									<Text css={textStyles}>
										{String(challengeTarget.value).replace(
											/\B(?=(\d{3})+(?!\d))/g,
											",",
										)}{" "}
									</Text>
									<Text css={textStyles}>
										{" "}
										{challengeTarget.value === 1 &&
										challengeTarget.metric == "miles"
											? "mile"
											: challengeTarget.metric}
									</Text>
								</Button>
							</Box>
						))}
				</View>
			</Box>
			{challengeChangeConfirmationCard}
		</PageLayout>
	)
}
