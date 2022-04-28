import { css } from "@emotion/react"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { colorPairingsLightOnDarkForeground } from "@rap-theme"
import { Button } from "components/Buttons"
import { useHistory, useParams } from "react-router"
import { sizeRhythmHorizontal, sizeRhythmVertical } from "../@rap-theme"
import { useChallengeByIdForEditingQuery } from "@rap-api/core"
import { denormalizeId } from "utils"
import { DarkPageLayout } from "../components/DarkPageLayout"
import { Image } from "react-native"

export default function ChallengeDistanceUpdated() {
	const nav = useHistory()

	const imageBox = css({
		width: 250,
		alignSelf: "center",
	})

	const confirmationText = css({
		color: colorPairingsLightOnDarkForeground,
	})

	const subConfirmationText = css({
		color: colorPairingsLightOnDarkForeground,
		paddingHorizontal: sizeRhythmHorizontal,
		marginVertical: sizeRhythmVertical,
	})

	const finalText = css({
		color: colorPairingsLightOnDarkForeground,
		textAlign: "center",
		paddingBottom: sizeRhythmVertical,
		paddingLeft: sizeRhythmHorizontal,
		paddingRight: sizeRhythmHorizontal,
	})

	const params = useParams<{ entryId: string }>()

	const { data } = useChallengeByIdForEditingQuery({
		variables: { id: denormalizeId(params.entryId, "challenge_entries") },
	})

	return (
		<DarkPageLayout>
			<Box
				grid
				column
				verticallyAlignContent="flex-start"
				alignContent="flex-start"
			>
				<Box
					grid
					row
					alignContent="center"
					verticallyAlignContent="center"
					css={imageBox}
				>
					<Image
						source={require("../../assets/images/TickLarge.png")}
						style={{ width: 250, height: 250 }}
					/>
				</Box>

				<Box grid row alignContent="center" verticallyAlignContent="center">
					<Text variant={"h2"} css={confirmationText}>
						Distance Changed
					</Text>
					<Text variant={"h4"} css={subConfirmationText}>
						Your new distance is {data?.challengeEntry?.target?.displayName}
					</Text>
					<Text css={finalText}>
						We&apos;ve update your distance. Keep pushing to the end of the
						month!
					</Text>
				</Box>

				<Box row>
					<Button fullWidth onPress={() => nav.push("/")} variant="secondary">
						Let&apos;s Go!
					</Button>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
