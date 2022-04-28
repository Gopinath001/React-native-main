import { Text } from "components/Text"
import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { useHistory, useParams } from "react-router-dom"
import { colorBrandAlternative } from "@rap-theme"
import { denormalizeId } from "utils"
import { ChallengeEntry, useUpdateChallengeMutation } from "@rap-api/core"
import { containerStyles, headingStyles } from "./styles"

type ChangeChallengeDistanceConfirmProps = {
	entry: ChallengeEntry
	valueId: string
}

export function ChangeChallengeDistanceConfirm({
	entry,
	valueId,
}: ChangeChallengeDistanceConfirmProps) {
	const nav = useHistory()

	const params =
		useParams<{ entryId: string; selectedTab: string; selectedMonth: string }>()

	const value = denormalizeId(valueId, "challenge_targets")

	const newTarget = entry?.target?.type?.targets?.edges?.filter((target) => {
		return target?.node?.id === value
	})[0]

	const [updateChallenge] = useUpdateChallengeMutation()

	return (
		<Box grid column css={containerStyles}>
			<Text css={headingStyles}>
				You are changing your distance from {entry?.target?.displayName} to{" "}
				{newTarget?.node?.displayName}. Are you sure?
			</Text>
			<Text css={{ color: colorBrandAlternative, textAlign: "center" }}>
				You are free to change your distance as many times as you like up until
				the last day of the month.
			</Text>

			<Box marginV={12}>
				<Button
					variant="secondary"
					fullWidth
					onPress={async () => {
						if (!!entry && !!newTarget) {
							await updateChallenge({
								variables: {
									input: {
										id: entry.id,
										target: newTarget?.node?.id,
									},
								},
							})
							nav.push(`/edit-challenge/${params.entryId}/updated/distance`)
						}
					}}
				>
					Change My Distance
				</Button>
			</Box>
			<Box style={{ marginTop: 0, marginBottom: 20 }}>
				<Button
					variant="secondary"
					outlined
					fullWidth
					onPress={() => nav.push(`/edit-challenge/${params.entryId}/distance`)}
				>
					Cancel
				</Button>
			</Box>
		</Box>
	)
}
