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
import { css } from "@emotion/react"
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
	left: "35%",
	width: 12,
	zIndex: 0,
	backgroundColor: colorPairingsProgressBackground,
})

const commonMarkerStyles = css({
	width: MARKER_SIZE,
	height: MARKER_SIZE,
	borderRadius: MARKER_SIZE / 2,
	zIndex: 1,
	margin: "0 auto",
})

const addProgressStyles = css({
	paddingTop: sizeRhythmVertical,
})

const addProgressButtonStyles = css({
	paddingLeft: 8,
})

const dateStyles = css({
	paddingRight: sizeRhythmHorizontal,
})

export function EntryTimeline({
	refreshTimeline,
	entryId,
	disallowProgressEntry,
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
		await refreshTimeline()
		await refetch()
	}

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
				<Text>Today</Text>
			</Box>
			<Box
				grid
				column
				small={1}
				medium={1}
				large={1}
				alignContent="center"
				verticallyAlignContent="center"
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
					css={addProgressButtonStyles}
				>
					<Button
						variant="secondary"
						onPress={() =>
							nav.replace(
								`/challenges/current/${params.selectedMonth}/${entryId}/new-progress`,
							)
						}
					>
						Add progress
					</Button>
				</Box>
			)}
		</Box>
	)

	return (
		<Box grid column css={containerStyles} nowrap>
			{addProgressRow}
			{data?.challengeEntryProgresses?.edges?.map((entry) => {
				const date = new Date(entry?.node?.evidenceDate ?? "")
				const dateText = `${date.getDate()}${nth(
					date.getDate(),
				)} ${apiMonthToName(date.getMonth() + 1)}`

				return (
					<Box grid column key={entry?.node?.id}>
						<Box grid row key={entry?.node?.id} alignContent="center">
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
								<Text>{dateText}</Text>
							</Box>
							<Box
								grid
								column
								small={1}
								medium={1}
								large={1}
								verticallyAlignContent="center"
							>
								<Box
									css={[
										commonMarkerStyles,
										{ backgroundColor: colorPairingsProgressForeground },
									]}
								/>
							</Box>
							<EvidencePill
								entry={entry as ChallengeEntryProgressEdge}
								refreshEntry={refreshEntry}
							/>
						</Box>
					</Box>
				)
			})}
			<Box css={timelineBackground} />
		</Box>
	)
}
