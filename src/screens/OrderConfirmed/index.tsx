import { Box } from "components/Box"
import { Text } from "components/Text"
import { DarkPageLayout } from "components/DarkPageLayout"
import { Button } from "components/Buttons"
import { useHistory } from "react-router"
import { confirmationText, subConfirmationText, finalText } from "./styles"
import { sizeRhythmHorizontal, sizeRhythmVertical } from "@rap-theme"
import { TickLargeIcon } from "icons/TickLarge.native"

export default function OrderConfirmed() {
	const nav = useHistory()

	return (
		<DarkPageLayout>
			<Box
				column
				css={{
					width: "100%",
					paddingLeft: sizeRhythmHorizontal,
					paddingRight: sizeRhythmHorizontal,
				}}
			>
				<Box
					grid
					row
					css={{
						flexGrow: 0,
						alignItems: "center",
						justifyContent: "center",
						paddingTop: sizeRhythmVertical,
						paddingBottom: sizeRhythmVertical,
					}}
				>
					<TickLargeIcon width={120} height={120} />
				</Box>

				<Box grid row css={{ width: "100%", flexGrow: 0 }}>
					<Text variant={"h2"} css={confirmationText}>
						Confirmation
					</Text>
				</Box>

				<Box
					grid
					row
					css={{
						flexGrow: 0,
						paddingTop: sizeRhythmVertical,
						paddingBottom: sizeRhythmVertical,
					}}
				>
					<Text variant={"h4"} css={subConfirmationText}>
						You have successfully entered your challenge... Good luck!
					</Text>
				</Box>

				<Box
					grid
					row
					css={{
						flexGrow: 0,
						paddingTop: sizeRhythmVertical,
						paddingBottom: sizeRhythmVertical,
					}}
				>
					<Text css={finalText}>
						Don&apos;t forget to keep track of and record your progress!
					</Text>
				</Box>
				<Box
					css={{
						flexGrow: 0,
						paddingTop: sizeRhythmVertical,
						paddingBottom: sizeRhythmVertical,
					}}
				>
					<Button onPress={() => nav.push("/")} variant={"secondary"} fullWidth>
						Back to dashboard
					</Button>
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
