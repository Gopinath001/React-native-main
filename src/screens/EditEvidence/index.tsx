import { useRef, useState } from "react"
import { Box } from "components/Box"
import { Input } from "components/Form/Input"
import { Button } from "components/Buttons"
import {
	ChallengeEntryProgress,
	Maybe,
	useUpdateChallengeEntryProgressMutation,
	useUploadEvidenceMutation,
} from "@rap-api/core"
import { Loading } from "components/Loading"
import { DOBInput } from "components/Form/Input/DOB"
import { EvidenceCarousel } from "components/EvidenceCarousel"
import { Text } from "components/Text"

type Evidence = {
	id: string
	contentUrl: string
	local?: boolean
}

type EditEvidenceProps = {
	entry: ChallengeEntryProgress
	refreshEntry: () => void
	handleClose: () => void
}

export function EditEvidence({
	entry,
	refreshEntry,
	handleClose,
}: EditEvidenceProps) {
	const [state, setState] = useState<{
		distance?: string
		date?: Maybe<string>
		files: Evidence[]
	}>({
		date: entry?.evidenceDate,
		distance: entry?.progressString,
		files:
			entry?.evidence?.edges?.map((file) => ({
				id: file?.node?.id!,
				contentUrl: file?.node?.contentUrl!,
			})) || [],
	})

	const [updateChallengeProgress, { loading: entryProgressUpdateLoading }] =
		useUpdateChallengeEntryProgressMutation()
	const [uploadEvidence, { loading: uploadLoading }] =
		useUploadEvidenceMutation()
	const evidenceFile = useRef<HTMLInputElement | null>(null)

	const handleUpdateChallengeProgress = (evidence?: Evidence[]) => {
		return updateChallengeProgress({
			variables: {
				input: {
					id: entry.id,
					evidenceDate: state.date,
					evidence: evidence
						? evidence.map((file) => file.id)
						: state.files.map((file) => file.id),
					progress: state.distance,
				},
			},
		})
	}

	const handleUpload = async () => {
		if (evidenceFile.current && evidenceFile.current.files?.length) {
			const evidence = await Promise.all(
				Array.from(evidenceFile.current.files).map(async (file) => {
					const upload = await uploadEvidence({
						variables: {
							input: {
								file: file,
							},
						},
					})
					return {
						id: upload.data?.uploadMediaObject?.mediaObject?.id!,
						contentUrl:
							upload.data?.uploadMediaObject?.mediaObject?.contentUrl!,
					}
				}),
			)

			await handleUpdateChallengeProgress([
				...state.files.filter((file) => !file.local),
				...evidence,
			])
		} else {
			await handleUpdateChallengeProgress()
		}
		refreshEntry()
		handleClose()
	}

	if (entryProgressUpdateLoading || uploadLoading) return <Loading />

	const date =
		state.date && state.date.length > 0 ? new Date(state.date) : new Date()

	const maxDate = new Date()

	// Min is midnight on the 1st and max is at 23:59:59:99 on the current date.
	maxDate.setHours(23, 59, 59, 99)

	return (
		<>
			<Text variant="h3">EDIT PROGRESS</Text>
			<Box
				css={{
					paddingTop: 12,
					paddingBottom: 12,
					flex: undefined,
					flexGrow: undefined,
				}}
			>
				<Input
					label="Distance"
					type="number"
					name="distance"
					required
					errored={state?.distance?.length === 0}
					value={state.distance || ""}
					onChange={(value) => setState({ ...state, distance: value })}
				/>
			</Box>
			<DOBInput
				max={maxDate}
				day={date.getDate().toString()}
				month={(date.getMonth() + 1).toString()}
				year={date.getFullYear().toString()}
				label="Date"
				exampleString={`${new Date().getDate()}/${
					new Date().getMonth() + 1
				}/${new Date().getFullYear()}`}
				onChange={({ day, month, year }) => {
					const date =
						year !== "" && month !== "" && day !== ""
							? `${year}/${month}/${day}`
							: ""
					setState({
						...state,
						date,
					})
				}}
			/>

			<Box
				marginV={12}
				css={{
					flex: undefined,
					flexGrow: undefined,
				}}
			>
				{state.files?.length ? (
					<EvidenceCarousel
						options={state.files}
						onRemove={(id) =>
							setState({
								...state,
								files: state.files?.filter((file) => file.id !== id),
							})
						}
					/>
				) : null}
			</Box>
			<Box
				grid
				row
				marginV={12}
				css={{
					flex: undefined,
					flexGrow: undefined,
				}}
			>
				<input
					type="file"
					multiple
					name="evidence"
					ref={evidenceFile}
					hidden
					onChange={() => {
						evidenceFile.current &&
							evidenceFile.current.files?.length &&
							setState({
								...state,
								files: [
									...state.files,
									...Array.from(evidenceFile.current.files).map((file) => ({
										id: "",
										contentUrl: URL.createObjectURL(file),
										local: true,
									})),
								],
							})
					}}
				/>
			</Box>
			<Box
				grid
				row
				nowrap
				marginV={12}
				css={{
					flex: undefined,
					flexGrow: undefined,
				}}
			>
				<Button
					variant="secondary"
					fullWidth
					onPress={handleUpload}
					disabled={
						state?.distance?.length === 0 ||
						(state?.date ? state?.date?.length < 4 : false)
					}
				>
					Save
				</Button>
			</Box>
		</>
	)
}
