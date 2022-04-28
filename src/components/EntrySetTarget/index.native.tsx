import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { Loading } from "components/Loading"
import { Text } from "components/Text"
import { sizeRhythmVertical } from "@rap-theme"
import { ChallengeEntry, useCreateCustomTargetMutation } from "@rap-api/core"
import { useState } from "react"
import { css } from "@emotion/react"
import { Input } from "components/Form/Input"

type EntrySetTargetProps = {
	entry: ChallengeEntry
	onSave: () => void
}

export const EntrySetTarget = ({ entry, onSave }: EntrySetTargetProps) => {
	const [targetValue, setTargetValue] = useState(
		entry.targetValue ? entry.targetValue.toString() : "",
	)
	const [setPersonalTarget, { loading }] = useCreateCustomTargetMutation()
	const handleSubmit = async () => {
		await setPersonalTarget({
			variables: {
				entryId: entry.id,
				targetValue: parseInt(targetValue, 10),
			},
		})

		onSave && onSave()
	}

	if (!entry) return null
	if (loading) return <Loading />

	return (
		<Box grid column>
			<Text variant="h2">Set a personalised goal</Text>
			<Text>
				This will have no effect on your ability to complete your challenge, nor
				receiving your medal; it just gives you something to aim for!
			</Text>
			<Box row css={css({ paddingTop: 20 })}>
				<Input
					type="number"
					inputMode="numeric"
					name="target"
					label="Target"
					value={targetValue}
					onChange={setTargetValue}
				/>
			</Box>

			<Box row marginV={sizeRhythmVertical}>
				<Button
					fullWidth
					variant="secondary"
					onPress={handleSubmit}
					disabled={targetValue === "" || parseInt(targetValue, 10) <= 0}
				>
					Set personalised goal
				</Button>
			</Box>
			<Box row css={css({ paddingBottom: 60 })}>
				<Button
					fullWidth
					variant="bordered-alternative"
					onPress={() => onSave && onSave()}
				>
					cancel
				</Button>
			</Box>
		</Box>
	)
}
