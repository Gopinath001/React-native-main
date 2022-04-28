import { Loading } from "components/Loading"
import { denormalizeId } from "utils"
import {
	ChallengeTarget,
	ChallengeType,
	useChallengeTargetsByChallengeQuery,
	useGetChallengeTargetQuery,
} from "@rap-api/core"
import { useParams } from "react-router-dom"
import { ChallengeMonthSelector } from "./ChallengeMonthSelector"

export function ChallengeMonthSelectorWithQuery() {
	const params = useParams<{ challengeId: string; targetId: string }>()
	const id = params.challengeId
	const { data: challengeType, loading: challengeTypeLoading } =
		useChallengeTargetsByChallengeQuery({
			variables: {
				id: denormalizeId(id, "challenge_types"),
			},
		})
	const { data: challengeTarget, loading: challengeTargetLoading } =
		useGetChallengeTargetQuery({
			variables: {
				id: denormalizeId(params.targetId, "challenge_targets"),
			},
		})

	if (
		challengeTypeLoading ||
		!challengeType?.challengeType ||
		challengeTargetLoading ||
		!challengeTarget?.challengeTarget
	)
		return <Loading />

	
	return (
		<ChallengeMonthSelector
			challengeType={challengeType.challengeType as ChallengeType}
			challengeTarget={challengeTarget.challengeTarget as ChallengeTarget}
		/>
	)
}
