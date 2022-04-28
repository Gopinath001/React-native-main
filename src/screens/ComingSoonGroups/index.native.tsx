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
import { Linking } from "react-native"

export function ComingSoonGroups() {
	return (
		<DarkPageLayout>
			<Box
				grid
				column
				verticallyAlignContent="center"
				alignContent="center"
				css={{ width: "100%", paddingLeft: 16, paddingRight: 16 }}
			>
				<Box grid column css={{ width: "100%" }}>
					<Text variant="h3" css={headerStyles}>
						Corporate challenges
					</Text>

					<Box grid column css={whiteBoxStyles}>
						<Box grid row>
							
							<Text variant="h3" light css={advertHeadline}>
								REACH YOUR GOALS AND CELEBRATE YOUR ACHIEVEMENTS, TOGETHER!
							</Text>
							
						</Box>
						<Box grid row>
							<Box grid column small={10}>
								<Text css={advertNormal}>
									We offer group discounts of up to
								</Text>
							</Box>
						</Box>
						
						<Text css={advertFeature}>20%</Text>
						
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

					<Box grid column css={{ width: "100%" }}>
						<Box css={{ flexGrow: 0, width: "100%", marginTop: 24 }}>
							<Button
								fullWidth
								variant={"secondary"}
								onPress={() => {
									// @ts-ignore
									Linking.openURL("https://www.raceatyourpace.co.uk/corporate/")
								}}
							>
								Find out more
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
