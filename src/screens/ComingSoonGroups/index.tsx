import { Box } from "components/Box"
import { Text } from "components/Text"
import { DarkPageLayout } from "components/DarkPageLayout"
import { Button } from "components/Buttons"
import {
	headerStyles,
	whiteBoxStyles,
	advertHeadline,
	advertNormal,
	advertFeature,
	advertEndline,
} from "./styles"

export function ComingSoonGroups() {
	return (
		<DarkPageLayout>
			<Box grid column verticallyAlignContent="center">
				<Text variant="h3" css={headerStyles}>
					Corporate challenges
				</Text>
			</Box>

			<Box grid column css={whiteBoxStyles}>
				<Box grid row>
					<Box grid column small={10}>
						<Text variant="h3" css={advertHeadline}>
							Reach your goals and celebrate your achievements, together!
						</Text>
					</Box>
				</Box>
				<Box grid row>
					<Box grid column small={10}>
						<Text css={advertNormal}>We offer group discounts of up to</Text>
					</Box>
				</Box>
				<Box grid row>
					<Box grid column small={10}>
						<Text css={advertFeature}>20%</Text>
					</Box>
				</Box>
				<Box grid row>
					<Box grid column small={10}>
						<Text css={advertNormal}>for corporate customers!</Text>
					</Box>
				</Box>
				<Box grid row>
					<Box grid column small={10}>
						<Text css={advertEndline}>
							Contact us today to get your team signed up!
						</Text>
					</Box>
				</Box>
			</Box>

			<Box grid column>
				<Button
					variant={"secondary"}
					onPress={(event) => {
						// @ts-ignore
						event.preventDefault()
						window.open("https://www.raceatyourpace.co.uk/corporate/", "_blank")
					}}
				>
					Find out more
				</Button>
			</Box>
		</DarkPageLayout>
	)
}
