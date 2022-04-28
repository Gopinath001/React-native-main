import { Box } from "components/Box"
import { Text } from "components/Text"
import { DarkPageLayout } from "../../components/DarkPageLayout"
import {
	colorBackgroundHeader,
	colorPairingsLightOnDarkForeground,
	sizeRhythmVertical,
	sizeRhythmHorizontal,
	colorBrandPrimary,
	colorBrandAlternative,
	colorFontBase,
} from "@rap-theme"
import { css } from "@emotion/native"
import { Button } from "components/Buttons"
import { useHistory } from "react-router"
import { FunctionComponent } from "react"
import { View, Image } from "react-native"
import { MapPinIcon } from "icons/MapPin.native"
import { TickLargeIcon } from "icons/TickLarge.native"

const ICON_SIZE = 80

function Block({
	title,
	text,
	image: TargetImage,
}: {
	title: string
	text: string
	image: string | FunctionComponent
}) {
	const optionBoxStyles = css({
		backgroundColor: colorBackgroundHeader,
		marginBottom: sizeRhythmVertical,
		flexShrink: 1,
		flexGrow: 0,
		paddingVertical: sizeRhythmVertical,
	})

	const optionHeaderStyles = css({
		color: colorBrandPrimary,
		textTransform: "uppercase",
		margin: 0,
		fontWeight: "300",
	})

	const optionTextStyles = css({
		marginTop: sizeRhythmVertical / 2,
		paddingRight: sizeRhythmHorizontal,
		color: colorFontBase,
	})
	return (
		<Box row style={[optionBoxStyles, { width: "100%" }]} key={title}>
			<View
				style={{
					flex: 0.4,
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<View>
					<TargetImage />
				</View>
			</View>
			<View
				style={{
					flex: 0.6,
					height: "100%",
					justifyContent: "center",
				}}
			>
				<Text variant="h4" css={optionHeaderStyles}>
					{title}
				</Text>
				<Text css={optionTextStyles}>{text}</Text>
			</View>
		</Box>
	)
}

export function ComingSoonTracking() {
	const nav = useHistory()
	const headerStyles = css({
		color: colorPairingsLightOnDarkForeground,
		paddingVertical: sizeRhythmVertical,
	})

	const buttonBox = css({
		marginTop: sizeRhythmVertical,
		width: "100%",
	})

	return (
		<DarkPageLayout>
			<Box style={{ flex: 1, padding: 10, justifyContent: "flex-start" }}>
				<Text variant="h3" css={headerStyles}>
					In-app tracking coming soon
				</Text>

				<Block
					title="Live Maps"
					text="See your current position and route live."
					image={function Image() {
						return (
							<MapPinIcon
								fill={colorBrandPrimary}
								width={ICON_SIZE}
								height={ICON_SIZE}
							/>
						)
					}}
				/>
				<Block
					title="Pick a profile"
					text="Track for multiple profiles at once during group activity."
					image={function Img() {
						return (
							<Image
								source={require("../../../assets/images/ProfileIcon.png")}
								style={{ width: ICON_SIZE, height: ICON_SIZE }}
							/>
						)
					}}
				/>
				<Block
					title="Evidence logging"
					text="Evidence is submitted towards your chosen challenge for you."
					image={function Image() {
						return <TickLargeIcon width={ICON_SIZE} height={ICON_SIZE} />
					}}
				/>

				<View style={buttonBox}>
					<Button
						variant={"secondary"}
						onPress={() => {
							nav.replace("/join/entry")
						}}
					>
						Join a challenge
					</Button>
				</View>

				<View style={[{ justifyContent: "center" }, buttonBox]}>
					<View style={{ alignItems: "center", justifyContent: "center" }}>
						<Button
							variant={"transparent"}
							outlined
							onPress={() => {
								nav.replace("/")
							}}
							css={css({
								borderColor: colorBrandAlternative,
								alignSelf: "center",
								flex: 1,
								width: "100%",
								marginBottom: 30,
							})}
						>
							Maybe later
						</Button>
					</View>
				</View>
			</Box>
		</DarkPageLayout>
	)
}
