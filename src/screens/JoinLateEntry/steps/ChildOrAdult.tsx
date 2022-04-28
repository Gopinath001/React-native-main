import { Box } from "components/Box"
import { useHistory } from "react-router"
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
} from "../../JoinEntry/styles"
import { ImageByName } from "components/ImageByName"
import { sizeRhythmHorizontal } from "@rap-theme"

export function JoinLateKidsOrGrownUp() {
	const nav = useHistory()

	return (
		<Box grid column css={containerStyles}>
			<Text variant="h1" css={lightText}>
				Late Entries
			</Text>
			<Text css={lightText}>
				Missed a month? You&apos;re in the right place!
			</Text>

			<Box grid column css={optionsWrapperStyles}>
				<Box
					grid
					row
					css={optionBoxStyles}
					onPress={() => {
						nav.push(`/previous-challenges/adult`)
					}}
				>
					<Box
						grid
						css={[
							imageColumnStyles,
							{
								flexDirection: "column",
								paddingLeft: sizeRhythmHorizontal,
								paddingRight: sizeRhythmHorizontal,
							},
						]}
					>
						<ImageByName name="lateEntry" />
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
							Missed a month? No problem! Sign up for any of our last 12 months
							to receive your medal.
						</Text>
					</Box>
				</Box>

				<Box
					grid
					row
					css={optionBoxStyles}
					onPress={() => {
						nav.push(`/previous-challenges/child`)
					}}
				>
					<Box
						grid
						css={[
							imageColumnStyles,
							{
								flexDirection: "column",
								paddingLeft: sizeRhythmHorizontal,
								paddingRight: sizeRhythmHorizontal,
							},
						]}
					>
						<ImageByName name="lateEntry" />
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
							Kids challenges
						</Text>
						<Text css={optionTextStyles}>
							Missed a month? No problem! Sign up for any of our last 12 months
							to receive your medal.
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
