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
import { css } from "@emotion/react"
import { sizeRhythmHorizontal } from "@rap-theme"
import { DOBInput } from "components/Form/Input/DOB"
import { launchImageLibrary } from "react-native-image-picker"
import { EvidenceCarousel } from "components/EvidenceCarousel"
import { ReactNativeFile } from "apollo-upload-client"
import { AddEvidenceProps } from "./types"

type Evidence = {
	id: string
	contentUrl: string
	local?: boolean
}

export function AddEvidence({
	entry,
	month,
	year,
	onComplete,
}: AddEvidenceProps) {
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
	const [dateValid, setDateValid] = useState(false)

	const containerStyles = css({
		flex: 1,
		flexGrow: 1,
		flexShrink: 0,
		width: "100%",
		paddingHorizontal: sizeRhythmHorizontal,
	})

	const { data: entryValue, loading: getEntryLoading } = useEntryValueByIdQuery(
		{ variables: { id: entry } },
	)
	const [createChallengeProgress, { loading: entryProgressCreationLoading }] =
		useCreateChallengeEntryProgressMutation()
	const [uploadEvidence, { loading: uploadLoading }] =
		useUploadEvidenceMutation()

	const handleCreateChallengeProgress = async (evidence?: Evidence[]) => {
		if (!entryValue?.challengeEntry?.target?.value) return

		await createChallengeProgress({
			variables: {
				input: {
					entry: entry,
					evidenceDate: state.date,
					evidence: evidence?.length
						? evidence.map((file) => file.id)
						: undefined,
					progress: state.distance,
				},
			},
		})

		if (typeof onComplete === "function") onComplete()
	}

	const handleUpload = async () => {
		if (state.files?.length) {
			const evidence = await Promise.all(
				state.files.map(async (file) => {
					try {
						const upload = await uploadEvidence({
							variables: {
								input: {
									file: new ReactNativeFile({
										uri: file.contentUrl,
										name: file.contentUrl.split("/").pop(),
										// TODO this is a little hacky but should work for now.
										type: "image/" + file.contentUrl.split(".").pop(),
									}),
								},
							},
						})
						return {
							id: upload.data?.uploadMediaObject?.mediaObject?.id!,
							contentUrl:
								upload.data?.uploadMediaObject?.mediaObject?.contentUrl!,
						}
					} catch (error) {
						console.error("UPLOAD ERROR", error)
					}
				}),
			)

			try {
				await handleCreateChallengeProgress()
			} catch (error) {
				console.error("CREATE ERROR", error)
			}
		} else {
			await handleCreateChallengeProgress()
		}
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
		<Box grid column css={containerStyles}>
			<Text variant="h3">ADD PROGRESS</Text>
			<Box
				css={{
					paddingTop: 12,
					paddingBottom: 12,
					flex: undefined,
					flexGrow: undefined,
				}}
			>
				<Input
					label={
						entryValue?.challengeEntry?.target?.type?.name!.toLowerCase() ===
						"steps"
							? "Steps"
							: "Miles"
					}
					type="number"
					inputMode="numeric"
					name="distance"
					required
					errored={state.distance.length === 0}
					value={state.distance}
					onChange={(value) => setState({ ...state, distance: value })}
				/>
			</Box>
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
				onChange={({ day, month, year }, valid) => {
					const date =
						year !== "" && month !== "" && day !== ""
							? `${year}/${month}/${day}`
							: ""
					setState({
						...state,
						date,
					})
					setDateValid(valid)
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
				<Button
					variant="secondary"
					outlined
					fullWidth
					onPress={() =>
						launchImageLibrary({ mediaType: "photo" }, ({ assets }) =>
							setState({
								...state,
								files: [
									...state.files,
									...(assets ?? []).map((file) => ({
										id: "",
										contentUrl: file.uri,
										local: true,
									})),
								],
							}),
						)
					}
				>
					Upload evidence
				</Button>
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
					disabled={!dateValid || state.distance.length === 0}
				>
					Save
				</Button>
			</Box>
		</Box>
	)
}
