import { Box } from "components/Box"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { useHistory, useParams } from "react-router-dom"
import { denormalizeId } from "utils"
import { useChallengeByIdForCompletionQuery } from "@rap-api/core"
import { Loading } from "components/Loading"
import { DarkPageLayout } from "components/DarkPageLayout"
import { MedalImage } from "components/MedalImage"
import { congratsTextStyles, contentStyles, textStyles } from "./styles"
import { sizeRhythmVertical } from "@rap-theme"

export default function ChallengeCompleted() {
	const nav = useHistory()
	const params = useParams<{ entryId: string }>()
	const { data, loading } = useChallengeByIdForCompletionQuery({
		variables: { id: denormalizeId(params.entryId, "challenge_entries") },
	})

	if (loading) return <Loading />

	const medalShippingText =
		data?.challengeEntry?.month &&
		data?.challengeEntry?.month &&
		Date.now() >
			new Date(
				data.challengeEntry.year,
				data.challengeEntry.month - 1,
				25,
			).valueOf()
			? "within 5 working days"
			: "on the 25th"

	return (
		<DarkPageLayout>
			<Box column alignContent="center" css={contentStyles}>
				<Box row verticallyAlignContent="center" css={{ flexGrow: 0 }}>
					<Text variant="h2" css={[textStyles, congratsTextStyles]}>
						Congratulations!
					</Text>
					<Text variant="h4" css={textStyles}>
						{data?.challengeEntry?.personalisedMedal ? (
							<>
								You&apos;ve completed your{" "}
								{data?.challengeEntry?.target?.type?.name?.toLowerCase()!}{" "}
								challenge!
							</>
						) : (
							<>
								You&apos;ve completed your{" "}
								{data?.challengeEntry?.target?.displayName.replace(/s$/, " ")}
								{data?.challengeEntry?.target?.type?.name?.toLowerCase()!}{" "}
								challenge!
							</>
						)}
					</Text>
				</Box>
				<Box
					row
					alignContent="center"
					verticallyAlignContent="center"
					marginV={sizeRhythmVertical}
					css={{ flexGrow: 0 }}
				>
					{data?.challengeEntry &&
						data.challengeEntry.target &&
						data.challengeEntry.target.type && (
							<MedalImage
								month={data.challengeEntry.month}
								year={data.challengeEntry.year}
								width={250}
								height={250}
								type={String(data.challengeEntry.target?.type?.name)}
							/>
						)}
				</Box>
				<Box
					row
					alignContent="center"
					verticallyAlignContent="center"
					marginV={sizeRhythmVertical}
					css={{ flexGrow: 0 }}
				>
					<Text css={textStyles}>
						Your medal will be shipped {medalShippingText}.
					</Text>
				</Box>

				<Box
					row
					alignContent="center"
					verticallyAlignContent="center"
					marginV={sizeRhythmVertical}
					css={{ flexGrow: 0 }}
				>
					<Button onPress={() => nav.push("/")} fullWidth variant="secondary">
						Done!
					</Button>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
