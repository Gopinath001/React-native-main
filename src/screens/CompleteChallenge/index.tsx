import { Text } from "components/Text"
import { Loading } from "components/Loading"
import {
	colorBrandAlternative,
	colorPairingsProgressForeground,
} from "@rap-theme"
import {
	useChallengeByIdForCompletionQuery,
	useCompleteChallengeMutation,
} from "@rap-api/core"
import { useHistory, useParams } from "react-router"
import { PageLayout } from "components/PageLayout"
import { useState, useEffect } from "react"
import { Box } from "components/Box"
import { denormalizeId } from "utils"
import { Image } from "components/Image"
import { GoalProgress } from "components/GoalProgress"
import { BooleanSwitch as Switch } from "components/Form/Switch"
import { Button } from "components/Buttons"
import { formatDate, apiMonthToName } from "utils"
import { Input } from "components/Form/Input"
import {
	collapseRow,
	contentStyles,
	detailStyles,
	distanceStyles,
	helpTextStyles,
	iconImageStyles,
	iconStyles,
	inputStyles,
	profileWrapper,
	progressStyles,
	switchColumnStyles,
	textStyles,
} from "./styles"
import { dateStyles, dateContainerStyles } from "./styles.native"

export default function CompleteChallenge() {
	const nav = useHistory()
	const params = useParams<{ entryId: string }>()
	const { data, loading } = useChallengeByIdForCompletionQuery({
		variables: { id: denormalizeId(params.entryId, "challenge_entries") },
	})

	const [didCompleteChallenge, setDidCompleteChallenge] = useState(true)
	const [confirmCompleteChallenge, setConfirmCompleteChallenge] =
		useState(false)
	const [customEngraving, setCustomEngraving] = useState(false)

	const [completeChallenge, { loading: completingChallenge }] =
		useCompleteChallengeMutation()
	const [personalisedMedalValue, setPersonalisedMedalValue] = useState<string>(
		data?.challengeEntry?.personalisedMedalTargetValue ?? "",
	)

	useEffect(() => {
		if (data?.challengeEntry?.personalisedMedal)
			setDidCompleteChallenge(data?.challengeEntry?.personalisedMedal)
		if (data?.challengeEntry?.personalisedMedalTargetValue)
			setPersonalisedMedalValue(
				data?.challengeEntry?.personalisedMedalTargetValue,
			)
	}, [data])

	if (loading || completingChallenge) return <Loading />

	const handleSubmit = async () => {
		const today = new Date()

		const getEngravingValue = () => {
			if (personalisedMedalValue.length > 0) return personalisedMedalValue
			else if (parseInt(data?.challengeEntry?.totalProgress!) > 0)
				return data?.challengeEntry?.totalProgress
			else return data?.challengeEntry?.targetValue.toString()
		}

		await completeChallenge({
			variables: {
				completed: didCompleteChallenge ? formatDate(today) : undefined,
				closed: didCompleteChallenge ? undefined : formatDate(today),
				challenge_id: denormalizeId(params.entryId, "challenge_entries"),
				engravingValue: data?.challengeEntry?.personalisedMedal
					? getEngravingValue()
					: undefined,
			},
		})

		if (didCompleteChallenge)
			nav.push(`/complete-challenge/${params.entryId}/completed`)
		else nav.push(`/complete-challenge/${params.entryId}/closed`)
	}

	const profileContent = (
		<Box column css={profileWrapper}>
			<Box grid row css={dateContainerStyles}>
				<Text bold variant="h4" css={dateStyles}>
					{apiMonthToName(data?.challengeEntry?.month ?? 0)}{" "}
				</Text>
				<Text bold variant="h4" css={dateStyles}>
					{data?.challengeEntry?.year ?? new Date().getFullYear()}
				</Text>
			</Box>
			<Box grid row css={detailStyles}>
				<Box column small={1} css={iconStyles}>
					<Image
						width={32}
						height={32}
						src={data?.challengeEntry?.target?.type?.iconFullPathWhite!}
						alt={data?.challengeEntry?.target?.displayName!}
						css={iconImageStyles}
					/>
				</Box>
				<Box
					column
					small={3.5}
					medium={3}
					large={2}
					verticallyAlignContent={"center"}
				>
					<Text margin={0} light variant="h4" css={distanceStyles}>
						{data?.challengeEntry?.personalisedMedal
							? "PERSONALISED"
							: data?.challengeEntry?.target?.displayName}
					</Text>
				</Box>
				<Box
					column
					small={5}
					medium={6}
					large={7}
					verticallyAlignContent="center"
					alignContent="center"
				>
					<GoalProgress
						style={progressStyles}
						target={data?.challengeEntry?.targetValue}
						progress={Number(data?.challengeEntry?.totalProgress)}
						progressPercent={data?.challengeEntry?.totalProgressPercentage}
					/>
				</Box>
			</Box>

			{data?.challengeEntry?.personalisedMedal ? (
				<>
					<Box grid row css={{ marginBottom: 6, height: 50 }}>
						<Text>
							Do you want to have a different distance engraved on your medal?
						</Text>
					</Box>
					<Box grid row nowrap alignContent="center">
						<Text
							css={[switchColumnStyles, { marginHorizontal: 0 }]}
							margin={0}
						>
							No
						</Text>
						<Box css={switchColumnStyles}>
							<Switch
								onColor={colorPairingsProgressForeground}
								onChange={setCustomEngraving}
								checked={customEngraving}
							/>
						</Box>
						<Text
							css={[switchColumnStyles, { marginHorizontal: 0 }]}
							margin={0}
						>
							Yes
						</Text>
					</Box>
					<Box grid row>
						<Text css={helpTextStyles}>
							{customEngraving
								? "Your medal will be engraved with the number of miles that you enter below."
								: "Your medal will be engraved with the number of miles shown in the progress bar above."}
						</Text>
						{customEngraving ? (
							<Input
								css={inputStyles}
								type="number"
								name="value"
								label="Distance (miles)"
								value={personalisedMedalValue ?? ""}
								onChange={(value) => setPersonalisedMedalValue(value ?? "")}
							/>
						) : null}
					</Box>
				</>
			) : (
				<>
					<Box grid row css={{ marginBottom: 12, height: 30 }}>
						<Text>Did you reach your target distance as shown above?</Text>
					</Box>
					<Box grid row nowrap>
						<Box column css={switchColumnStyles} marginH={0}>
							<Text margin={0}>No</Text>
						</Box>
						<Box column css={switchColumnStyles}>
							<Switch
								onColor={colorPairingsProgressForeground}
								onChange={setDidCompleteChallenge}
								checked={didCompleteChallenge}
							/>
						</Box>
						<Box column css={switchColumnStyles} marginH={0}>
							<Text margin={0}>Yes</Text>
						</Box>
					</Box>
					<Box grid row>
						<Text css={helpTextStyles}>
							Once confirmed, if you reached your target distance, we will start
							preparing your medal pack.{"\n\n"}If you have ordered a
							compression top, we will send this out even if you didn&apos;t
							reach your challenge distance.
						</Text>
						{data?.challengeEntry?.personalisedMedal && didCompleteChallenge ? (
							<Input
								css={inputStyles}
								type="number"
								name="value"
								label="Distance (miles)"
								value={personalisedMedalValue ?? ""}
								onChange={(value) => setPersonalisedMedalValue(value ?? "")}
							/>
						) : null}
					</Box>
				</>
			)}

			<Box grid row nowrap alignContent="center">
				<Box grid column css={{ paddingRight: 8 }}>
					<Input
						name="confirm"
						type="checkbox"
						onChange={() =>
							setConfirmCompleteChallenge(!confirmCompleteChallenge)
						}
						label="I confirm I wish to complete my challenge."
						checked={confirmCompleteChallenge}
						value={confirmCompleteChallenge}
					/>
				</Box>
			</Box>
			<Box grid row marginV={20}>
				<Button
					fullWidth
					onPress={handleSubmit}
					variant="secondary"
					disabled={!confirmCompleteChallenge}
				>
					Submit
				</Button>
			</Box>
		</Box>
	)

	return (
		<PageLayout>
			<Box column css={contentStyles}>
				<Box row css={collapseRow}>
					<Text variant="h2" css={textStyles}>
						Finish your challenge
					</Text>
					<Text variant="paragraph" css={textStyles}>
						If you have finshed your challenge, you can let us know here.
					</Text>
					<Text
						variant="paragraph"
						css={[
							textStyles,
							{
								color: colorBrandAlternative,
							},
						]}
					>
						If you mark your challenge as finished, you won&apos;t be able to
						make any further changes or upload any more progress.
					</Text>
				</Box>

				<Box row css={collapseRow}>
					{profileContent}
				</Box>
			</Box>
		</PageLayout>
	)
}
