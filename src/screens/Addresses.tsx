import { sizeRhythmHorizontal, sizeRhythmVertical } from "@rap-theme"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { AddressList } from "../components/AddressList"
import { PageLayout } from "../components/PageLayout"

export default function AddressesScreen() {
	return (
		<PageLayout>
			<Box column marginH={sizeRhythmHorizontal}>
				<Box row>
					<Text variant="h1">Your addresses</Text>
				</Box>
				<Box row css={{ marginTop: sizeRhythmVertical }}>
					<AddressList onSelect={console.log} />
				</Box>
			</Box>
		</PageLayout>
	)
}
