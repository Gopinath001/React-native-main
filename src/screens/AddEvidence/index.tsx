import { Text } from "components/Text"
import { Box } from "components/Box"
import { useState } from "react"
import { Input } from "components/Form/Input"
import { Button } from "components/Buttons"
import {
	useCreateChallengeEntryProgressMutation,
	useEntryValueByIdQuery,
	useUploadEvidenceMutation,
} from "@rap-api/core"
import { Loading } from "components/Loading"
import { denormalizeId } from "utils"
import { useRef } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { css } from "@emotion/react"
import { sizeRhythmHorizontal } from "@rap-theme"
import { RouterState } from "../../routes"
import { DOBInput } from "components/Form/Input/DOB"
import { EvidenceCarousel } from "components/EvidenceCarousel"
import { AddEvidenceProps } from "./types"

type Evidence = {
	id: string
	contentUrl: string
	local?: boolean
}

export function AddEvidence({ entry, month, year }: AddEvidenceProps) {
	const [state, setState] = useState<{
		distance: string
		entry: string
		date: string
		files: Evidence[]
	}>({
		entry,
		date: "",
		distance: "",
		files: [],
	})
	const nav = useHistory()

	const containerStyles = css({
		maxWidth: "100%",
		marginLeft: sizeRhythmHorizontal,
		marginRight: sizeRhythmHorizontal,
	})

	const headingStyles = css({
		lineHeight: 1,
	})

	const { data: entryValue, loading: getEntryLoading } = useEntryValueByIdQuery(
		{ variables: { id: denormalizeId(entry, "challenge_entries") } },
	)
	const [createChallengeProgress, { loading: entryProgressCreationLoading }] =
		useCreateChallengeEntryProgressMutation()
	const [uploadEvidence, { loading: uploadLoading }] =
		useUploadEvidenceMutation()
	const evidenceFile = useRef<HTMLInputElement | null>(null)
	const params =
		useParams<{ entryId: string; selectedTab: string; selectedMonth: string }>()
	const routerState = useLocation<RouterState>().state

	const handleCreateChallengeProgress = (evidence?: Evidence[]) => {
		if (!entryValue?.challengeEntry?.target?.value) return

		return createChallengeProgress({
			variables: {
				input: {
					entry: denormalizeId(entry, "challenge_entries"),
					evidenceDate: state.date,
					evidence: evidence?.length
						? evidence.map((file) => file.id)
						: undefined,
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

			await handleCreateChallengeProgress([
				...state.files.filter((file) => !file.local),
				...evidence,
			])
		} else {
			await handleCreateChallengeProgress()
		}

		nav.push(
			`/challenges/${params.selectedTab}/${params.selectedMonth}/${params.entryId}/view-progress`,
			routerState,
		)
	}

	if (entryProgressCreationLoading || getEntryLoading || uploadLoading)
		return <Loading />

	const date =
		state.date && state.date.length > 0 ? new Date(state.date) : new Date()

	const minDate = new Date(year, month, 1)
	const maxDate = new Date()

	// Min is midnight on the 1st and max is at 23:59:59:99 on the current date.
	minDate.setHours(0, 0, 0, 0)
	maxDate.setHours(23, 59, 59, 99)

	return (
		<Box css={containerStyles}>
			<Text variant="h3" css={headingStyles}>
				ADD PROGRESS
			</Text>
			<Input
				label="Distance"
				type="number"
				name="distance"
				required
				errored={state.distance.length === 0}
				value={state.distance}
				onChange={(value) => setState({ ...state, distance: value })}
			/>

			<DOBInput
				min={minDate}
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

			<Box marginV={12}>
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
			<Box marginV={12}>
				<Button
					variant="secondary"
					outlined
					fullWidth
					onPress={() => evidenceFile.current?.click()}
				>
					Upload evidence
				</Button>
			</Box>
			<Box marginV={12}>
				<Button
					variant="secondary"
					fullWidth
					onPress={handleUpload}
					disabled={state.distance.length === 0 || state.date.length < 4}
				>
					Save
				</Button>
			</Box>
		</Box>
	)
}
