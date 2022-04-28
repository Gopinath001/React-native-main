import { DarkPageLayout } from "components/DarkPageLayout"
import { Box } from "components/Box"
import { useHistory, useLocation } from "react-router"
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
} from "../JoinEntry/styles"
import { ImageByName } from "components/ImageByName"
import { sizeRhythmHorizontal } from "@rap-theme"

export default function AddAnnualPass() {
	const nav = useHistory()
	const state = useLocation<{ year: number }>().state
	const year = (state ?? {}).year

	return (
		<DarkPageLayout>
			<Box grid column css={containerStyles}>
				<Text variant="h1" css={lightText}>
					Annual Pass {year}
				</Text>
				<Text css={lightText}>Get 2 medals for free!</Text>

				<Box grid column css={optionsWrapperStyles}>
					<Box
						grid
						row
						css={optionBoxStyles}
						onPress={() => {
							nav.push(`/buy-annual-pass/uk`, { year })
						}}
					>
						<Box
							css={[
								imageColumnStyles,
								{
									width: "100%",
									height: "100%",
									paddingLeft: sizeRhythmHorizontal,
									paddingRight: sizeRhythmHorizontal,
								},
							]}
						>
							<ImageByName
								name="annual-pass-ticket"
								width="100%"
								height="100%"
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
								UK Pass
							</Text>
							<Text css={optionTextStyles}>
								The UK Annual Pass entitles you to 12 months entry to our
								challenges, with 1 month free! Price inclusive of UK delivery
							</Text>
						</Box>
					</Box>

					<Box
						row
						css={optionBoxStyles}
						onPress={() => {
							nav.push(`/buy-annual-pass/international`, { year })
						}}
					>
						<Box
							grid
							css={[
								imageColumnStyles,
								{
									width: "100%",
									height: "100%",
									paddingLeft: sizeRhythmHorizontal,
									paddingRight: sizeRhythmHorizontal,
								},
							]}
						>
							<ImageByName
								name="international-annual-pass-ticket"
								width="100%"
								height="100%"
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
								International Pass
							</Text>
							<Text css={optionTextStyles}>
								The International Annual Pass entitles you to 12 months entry to
								our challenges, with 1 month free! Price inclusive of
								international delivery
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
