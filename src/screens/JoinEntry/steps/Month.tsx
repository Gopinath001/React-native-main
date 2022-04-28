import { sizeRhythmVertical } from "@rap-theme"
import { Box } from "components/Box"
import { DarkPageLayout } from "components/DarkPageLayout"
import { MedalImage } from "components/MedalImage"
import { View } from "react-native"
import { Redirect, useHistory, useParams } from "react-router"
import { Text } from "components/Text"
import {
	lightText,
	optionsWrapperStyles,
	optionBoxStyles,
	imageColumnStyles,
	textColumnStyles,
	optionHeaderStyles,
	optionTextStyles,
	containerStyles,
} from "../styles"
import { apiMonthToName } from "utils"

export function JoinMonth() {
	const { year, month } = useParams<{
		month?: string
		year?: string
	}>()
	const nav = useHistory()

	if (!month || !year) return <Redirect to="/join/entry" />

	const monthName = apiMonthToName(parseInt(month, 10))

	return (
		<DarkPageLayout>
			<Box grid column css={containerStyles}>
				<Text variant="h1" css={lightText}>
					{monthName} Challenges
				</Text>
				<Text css={lightText}>
					Get started on one of our monthly challenges now!
				</Text>

				<Box grid column css={optionsWrapperStyles}>
					<Box
						grid
						row
						css={optionBoxStyles}
						onPress={() => {
							nav.push(`/join/entry/${month}/${year}/adult`)
						}}
					>
						<Box grid css={imageColumnStyles}>
							<MedalImage
								year={parseInt(year, 10)}
								month={parseInt(month, 10)}
								type={"running"}
							/>
						</Box>
						<Box
							grid
							column
							small={7}
							medium={7}
							large={6}
							css={textColumnStyles}
						>
							<Text variant="h4" css={optionHeaderStyles}>
								Adult challenges
							</Text>
							<Text css={optionTextStyles}>
								Join this month&apos;s challenge to earn your unique medal!
							</Text>
						</Box>
					</Box>

					<Box
						grid
						row
						css={optionBoxStyles}
						onPress={() => {
							nav.push(`/join/entry/${month}/${year}/child`)
						}}
					>
						<Box
							small={3}
							medium={3}
							large={3}
							alignContent="center"
							verticallyAlignContent="center"
							css={imageColumnStyles}
						>
							<MedalImage
								year={parseInt(year, 10)}
								month={parseInt(month, 10)}
								type={"running"}
							/>
						</Box>

						<Box
							grid
							column
							small={7}
							medium={7}
							large={6}
							css={textColumnStyles}
						>
							<View style={{ paddingVertical: sizeRhythmVertical }}>
								<Text
									variant="h4"
									css={[
										optionHeaderStyles,
										{
											paddingTop: 0,
											paddingBottom: 3,
										},
									]}
								>
									Kids challenges
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									flex: 10,
									width: "100%",
									marginTop: -12,
								}}
							>
								<Text css={optionTextStyles}>
									Get the kid&apos;s involved with these shorter distances.
								</Text>
							</View>
						</Box>
					</Box>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
