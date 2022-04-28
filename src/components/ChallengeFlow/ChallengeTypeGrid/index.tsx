import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { Text } from "components/Text"
import { apiMonthToName, normalizeId } from "utils"
import {
	ChallengeType,
	ChallengeTypeEdge,
	useChallengesListQuery,
} from "@rap-api/core"
import { useHistory, useParams } from "react-router"
import { ChildOrAdult } from "../ChallengeEntryTab"
import { ChallengeSelectorButton } from "../ChallengeSelectorButton"
import { ChallengeRouteParams } from "../types"
import {
	containerStyles,
	dateStyles,
	gutterStyles,
	horizontalRhythm,
} from "./styles"

export function ChallengeTypeGrid() {
	const { kidsOrGrownUp, month, year } = useParams<ChallengeRouteParams>()
	const {
		data: challenges,
		loading,
		error,
	} = useChallengesListQuery({
		variables: {
			forChildren: kidsOrGrownUp === ChildOrAdult.Child,
		},
	})
	const nav = useHistory()

	if (loading) return <Loading />

	if (error)
		return (
			<Box>
				<Text>{error.message}</Text>
			</Box>
		)

	return (
		<Box
			grid
			column
			small={10}
			medium={10}
			large={10}
			css={{ paddingLeft: 8, paddingRight: 8 }}
		>
			<Box grid row css={{ paddingBottom: 16, flexGrow: 0 }}>
				<Text variant="h2" css={horizontalRhythm} accent verticalMargin={false}>
					<Text variant="h2" verticalMargin={false} css={dateStyles}>
						{apiMonthToName(parseInt(month!))}
					</Text>{" "}
					<Text variant="h2" light verticalMargin={false} css={dateStyles}>
						{new Date().getFullYear()}
					</Text>{" "}
				</Text>
				<Text light variant="h3" css={horizontalRhythm}>
					CHOOSE YOUR CHALLENGE
				</Text>
			</Box>
			<Box css={containerStyles}>
				{challenges?.challengeTypes?.edges
					?.filter(
						(challengeTypeEdge): challengeTypeEdge is ChallengeTypeEdge =>
							!!challengeTypeEdge?.node,
					)
					.map(
						
						(challengeType): ChallengeType =>
							challengeType.node as ChallengeType,
					)
					.map((challengeType, i) => {
						return (
							<Box
								css={[
									gutterStyles,
									{
										paddingLeft: i % 2 !== 0 ? 8 : 0,
										paddingRight: i % 2 === 0 ? 8 : 0,
									},
								]}
								key={challengeType.id}
							>
								<ChallengeSelectorButton
									challengeType={challengeType}
									onPress={(challengeType: ChallengeType) =>
										nav.push(
											`/join/${kidsOrGrownUp}/${month}/${year}/${normalizeId(
												challengeType.id,
											)}`,
											{
												challengeType,
											},
										)
									}
								/>
							</Box>
						)
					})}
			</Box>
		</Box>
	)
}
