import { Loading } from "components/Loading"
import { denormalizeId } from "utils"
import { useChallengeTargetsByChallengeQuery } from "@rap-api/core"
import { useParams } from "react-router-dom"
import { ChallengeTargetGrid } from "./ChallengeTargetGrid"

export function ChallengeTargetGridWithQuery() {
	const params = useParams<{ challengeId: string }>()
	const id = params.challengeId
	const { data, loading } = useChallengeTargetsByChallengeQuery({
		variables: {
			id: denormalizeId(id, "challenge_types"),
		},
	})

	if (loading || !data?.challengeType) return <Loading />

	return <ChallengeTargetGrid challengeType={data.challengeType} />
}
