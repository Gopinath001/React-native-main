import { Box } from "components/Box"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { useHistory } from "react-router-dom"
import { DarkPageLayout } from "components/DarkPageLayout"
import {
	buttonStyles,
	containerStyles,
	contentStyles,
	headingStyles,
	noGrow,
	textStyles,
} from "./styles"

export default function ChallengeClosed() {
	const nav = useHistory()

	return (
		<DarkPageLayout>
			<Box column css={containerStyles} alignContent="center">
				<Box row css={[contentStyles, noGrow]}>
					<Text variant="h2" css={headingStyles}>
						CHALLENGE OVER
					</Text>
					<Text variant="h4" light css={headingStyles}>
						IT LOOKS LIKE YOU DIDN&apos;T COMPLETE YOUR CHALLENGE
					</Text>

					<Text css={textStyles}>
						But don&apos;t worry! The most important thing about taking part in
						Race At Your Pace challenges is to get active, no matter how far you
						go, so be proud of yourself and your achievements.
					</Text>
					<Text css={textStyles}>
						Why not enter your next challenge to keep your good work going?
					</Text>
					<Text css={textStyles}>
						If you have ordered a compression top or any extras then
						they&apos;ll still be sent to you.
					</Text>
				</Box>

				<Box row css={noGrow}>
					<Button
						onPress={() => nav.push("/join/entry")}
						variant="secondary"
						fullWidth
						css={buttonStyles}
					>
						Enter a new challenge
					</Button>
				</Box>
				<Box row>
					<Button
						onPress={() => nav.push("/")}
						variant="secondary"
						outlined
						fullWidth
						css={buttonStyles}
					>
						<Text
							bold
							css={{
								color: "#FFF",
								textTransform: "uppercase",
							}}
						>
							Back to dashboard
						</Text>
					</Button>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
