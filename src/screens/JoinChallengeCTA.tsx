import { Button } from "components/Buttons"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { useHistory } from "react-router"

export function JoinChallengeCTA() {
	const nav = useHistory()
	const guestStateLinkToJoin = () => {
		nav.push("/join/entry", {
			guestIntent: true,
		})
	}

	return (
		<Box grid column>
			<Box css={{ marginTop: 24, flexGrow: 0 }}>
				<Text variant="paragraph">
					You don&apos;t have any ongoing challenges. Check the Upcoming tab for
					challenges starting next month, and Finished for challenges
					you&apos;ve completed!
				</Text>
			</Box>
			<Box css={{ marginTop: 24, flexGrow: 0 }}>
				<Button variant="secondary" fullWidth onPress={guestStateLinkToJoin}>
					Join a challenge
				</Button>
			</Box>
		</Box>
	)
}
