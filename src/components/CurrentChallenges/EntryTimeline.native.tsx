import { Box } from "components/Box"
import { Text } from "components/Text"
import { Loading } from "components/Loading"
import {
	ChallengeEntryProgressEdge,
	useGetEntryTimelineQuery,
} from "@rap-api/core"
import { useContext } from "react"
import { UserContext } from "providers/User"
import { apiMonthToName, normalizeId, nth } from "utils"
import { css } from "@emotion/native"
import {
	colorBrandAlternative,
	colorPairingsProgressBackground,
	colorPairingsProgressForeground,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { Button } from "components/Buttons"
import { useHistory, useParams } from "react-router"
import { EvidencePill } from "./EvidencePill"
import { useEffect } from "react"

type EntryTimelineProps = {
	refreshTimeline: () => void
	entryId: string
	disallowProgressEntry?: boolean
	onAddProgress?: () => void
}

const MARKER_SIZE = 25

const containerStyles = css({
	position: "relative",
})

const timelineBackground = css({
	position: "absolute",
	height: "100%",
	top: 6,
	left: "30%",
	transform: [{ translateX: 6 }],
	width: 12,
	zIndex: 0,
	backgroundColor: colorPairingsProgressBackground,
})

const commonMarkerStyles = css({
	width: MARKER_SIZE,
	maxHeight: MARKER_SIZE,
	borderRadius: MARKER_SIZE / 2,
	zIndex: 1,
	// margin: "0 auto",
})

const addProgressStyles = css({
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical / 2,
})

const addProgressButtonStyles = css({
	width: "100%",
	paddingLeft: 8,
})

const dateStyles = css({
	paddingRight: sizeRhythmHorizontal,
	flexShrink: 1,
	flexBasis: "30%",
	maxWidth: "30%",
	height: "100%",
})

export function EntryTimeline({
	refreshTimeline,
	entryId,
	disallowProgressEntry,
	onAddProgress,
}: EntryTimelineProps) {
	const { selectedProfile } = useContext(UserContext)
	const nav = useHistory()
	const params = useParams<{ addViewProgress: string; selectedMonth: string }>()
	const { data, loading, refetch } = useGetEntryTimelineQuery({
		variables: {
			entry_uuid: entryId,
			entry_profile_uuid: normalizeId(selectedProfile?.id ?? ""),
		},
	})

	const refreshEntry = async () => {
		refreshTimeline()
		await refetch()
	}
	const defaultOnAddProgress = () =>
		nav.replace(
			`/challenges/current/${params.selectedMonth}/${entryId}/new-progress`,
		)
	useEffect(() => {
		refetch()
	}, [params.addViewProgress])

	if (loading) return <Loading />

	const addProgressRow = (
		<Box grid row css={addProgressStyles}>
			<Box
				grid
				column
				small={3}
				medium={3}
				large={3}
				alignContent="flex-end"
				verticallyAlignContent="center"
				css={dateStyles}
			>
				<Text css={{ textAlign: "right", width: "100%" }}>Today</Text>
			</Box>
			<Box
				grid
				column
				small={1}
				medium={1}
				large={1}
				alignContent="center"
				verticallyAlignContent="center"
				css={{
					flexShrink: 1,
					flexBasis: "10%",
					maxWidth: "10%",
					height: "100%",
				}}
			>
				<Box
					css={[commonMarkerStyles, { backgroundColor: colorBrandAlternative }]}
				/>
			</Box>
			{disallowProgressEntry ? null : (
				<Box
					grid
					column
					small={6}
					medium={6}
					large={6}
					css={[addProgressButtonStyles]}
				>
					<Button
						fullWidth
						variant="secondary"
						onPress={onAddProgress ?? defaultOnAddProgress}
					>
						Add progress
					</Button>
				</Box>
			)}
		</Box>
	)

	return (
		<Box grid column css={containerStyles} nowrap>
			<Box css={timelineBackground} />
			{addProgressRow}
			{data?.challengeEntryProgresses?.edges?.map((entry) => {
				const date = new Date(entry?.node?.evidenceDate ?? "")
				const dateText = `${date.getDate()}${nth(
					date.getDate(),
				)} ${apiMonthToName(date.getMonth() + 1)}`

				return (
					<Box grid column key={entry?.node?.id}>
						<Box
							grid
							row
							key={entry?.node?.id}
							alignContent="center"
							css={{
								paddingTop: sizeRhythmVertical / 2,
								paddingBottom: sizeRhythmVertical / 2,
								alignItems: "center",
							}}
						>
							<Box
								grid
								column
								small={3}
								medium={3}
								large={3}
								alignContent="flex-end"
								verticallyAlignContent="center"
								css={dateStyles}
							>
								<Text css={{ textAlign: "right", width: "100%" }}>
									{dateText}
								</Text>
							</Box>
							<Box
								grid
								column
								small={1}
								medium={1}
								large={1}
								verticallyAlignContent="center"
								css={{
									flexShrink: 1,
									flexBasis: "10%",
									maxWidth: "10%",
									height: "100%",
								}}
							>
								<Box
									css={[
										commonMarkerStyles,
										{ backgroundColor: colorPairingsProgressForeground },
									]}
								/>
							</Box>
							<Box grid column small={6} medium={6} large={6}>
								<EvidencePill
									entry={entry as ChallengeEntryProgressEdge}
									refreshEntry={refreshEntry}
								/>
							</Box>
						</Box>
					</Box>
				)
			})}
		</Box>
	)
}
