import { css } from "@emotion/react"
import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { Text } from "components/Text"
import {
	colorPairingsLightOnDarkBackground,
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
} from "@rap-theme"
import { useAvailableEntryMonthsQuery } from "@rap-api/core"
import { ChildOrAdult } from "./ChallengeEntryTab"

export function ChallengeDashboard() {
	const { data: months, loading } = useAvailableEntryMonthsQuery()

	if (loading || !months?.availableEntryMonths?.edges?.length)
		return <Loading />

	const buttonStyles = css({
		backgroundColor: colorPairingsLightOnDarkBackground,
		color: colorPairingsLightOnDarkForeground,
		padding: sizeRhythmVertical,
		marginBottom: sizeRhythmVertical,
	})

	const nextMonthChallenge = months.availableEntryMonths.edges.find(
		(edge) => edge?.node?.default,
	)
	return (
		<Box grid column>
			<Text
				css={buttonStyles}
				variant="link"
				href={`/challenges/${ChildOrAdult.Adult}/${nextMonthChallenge?.node?.month}/${nextMonthChallenge?.node?.year}`}
				title={`Show challenges for the month of
			${nextMonthChallenge?.node?.displayName}`}
			>
				{nextMonthChallenge?.node?.displayName}
			</Text>
			<Text
				css={buttonStyles}
				variant="link"
				href={`/challenges/${ChildOrAdult.Child}/${nextMonthChallenge?.node?.month}/${nextMonthChallenge?.node?.year}`}
				title={`Show challenges for the month of
			${nextMonthChallenge?.node?.displayName}`}
			>
				Kids! {nextMonthChallenge?.node?.displayName}
			</Text>
		</Box>
	)
}
