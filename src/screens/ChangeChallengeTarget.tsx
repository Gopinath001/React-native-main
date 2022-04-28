import { Text } from "components/Text"
import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { useHistory, useParams } from "react-router-dom"
import { css } from "@emotion/react"
import { sizeRhythmHorizontal } from "@rap-theme"

type ChangeChallengeTargetProps = {
	entry: string
}

export function ChangeChallengeTarget({}: ChangeChallengeTargetProps) {
	const nav = useHistory()

	const containerStyles = css({
		marginLeft: sizeRhythmHorizontal,
		marginRight: sizeRhythmHorizontal,
	})
	const centerText = css({
		textAlign: "center",
	})

	const params =
		useParams<{ entryId: string; selectedTab: string; selectedMonth: string }>()

	return (
		<Box grid column css={containerStyles}>
			<Text css={centerText}>
				There is less than 1 week until the end of your current challenge.
			</Text>
			<Text css={centerText}>
				After the end of the month you will not be able to make any further
				changes to your challenge distance.
			</Text>
			<Text css={centerText}>
				Are your sure that you still want to change your challenge distance?
			</Text>

			<Box marginV={12}>
				<Button
					variant="secondary"
					outlined
					fullWidth
					onPress={() =>
						nav.push(
							`/challenges/${params.selectedTab}/${params.selectedMonth}`,
						)
					}
				>
					Keep my current distance
				</Button>
			</Box>
			<Box marginV={12}>
				<Button
					variant="secondary"
					fullWidth
					onPress={() => nav.push(`/edit-challenge/${params.entryId}/distance`)}
				>
					Change My Distance
				</Button>
			</Box>
		</Box>
	)
}
