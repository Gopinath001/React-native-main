import {
	colorBrandAlternative,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { useLocation } from "react-router-dom"
import { DarkPageLayout } from "../../components/DarkPageLayout"
import { ImageByName } from "../../components/ImageByName"
import { lightText } from "../JoinEntry/styles"
import {
	bodyContentStyles,
	bodyStyles,
	buttonStyles,
	headerStyles,
	medalStyles,
} from "./styles"
import { useSignInUp } from "hooks/useSignInUp"

export function AnnualPassPromo() {
	const state = useLocation<{ year: number }>().state
	const year = (state ?? {}).year
	const { signIn } = useSignInUp()

	return (
		<DarkPageLayout>
			<Box grid column css={{ paddingHorizontal: sizeRhythmHorizontal }}>
				<Text variant="h1" css={lightText}>
					Annual Pass {year}
				</Text>
				<Box grid column css={bodyStyles}>
					<ImageByName name="annual-pass-promo-header" height={45} />
					<Box grid column css={bodyContentStyles}>
						<Box grid row alignContent="center" verticallyAlignContent="center">
							<Text
								variant="h2"
								verticalMargin={false}
								css={[lightText, headerStyles, { textAlign: "center" }]}
								light
							>
								LET&apos;S MAKE {year} THE BEST YEAR YET!
							</Text>
							<Text
								css={{
									textAlign: "center",
									marginVertical: sizeRhythmVertical,
								}}
							>
								Get your Annual Pass today! Receive one entry completely free
								and be automatically included in the Loyalty Reward for another
								free, personalised medal at the end of the year!
							</Text>
						</Box>
						<Box
							grid
							row
							alignContent="center"
							verticallyAlignContent="center"
							css={medalStyles}
						>
							<ImageByName name="loyalty-medal" width="100%" height={250} />
						</Box>
						<Box grid row alignContent="center" verticallyAlignContent="center">
							<Text css={{ color: colorBrandAlternative, textAlign: "center" }}>
								Simply login or create your account today to get yours!
							</Text>
						</Box>
					</Box>
				</Box>
				<Button
					fullWidth
					variant="secondary"
					onPress={signIn}
					css={buttonStyles}
				>
					Login / Register
				</Button>
			</Box>
		</DarkPageLayout>
	)
}
