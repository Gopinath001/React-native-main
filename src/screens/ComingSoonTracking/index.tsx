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
import { css } from "@emotion/react"
import { Button } from "components/Buttons"
import { useHistory } from "react-router"
import { Image } from "components/Image"
import { ImageByName } from "../../components/ImageByName"
import { FunctionComponent } from "react"

function Block({
	title,
	text,
	image: TargetImage,
}: {
	title: string
	text: string
	image: string | FunctionComponent
}) {
	const imageStyles = css({
		width: "60px",
	})
	const optionBoxStyles = css({
		backgroundColor: colorBackgroundHeader,
		marginBottom: sizeRhythmVertical,
	})

	const optionHeaderStyles = css({
		color: colorBrandPrimary,
		textTransform: "uppercase",
		margin: 0,
		paddingTop: sizeRhythmVertical,
		fontWeight: 300,
	})

	const optionTextStyles = css({
		marginTop: sizeRhythmVertical / 2,
		paddingRight: sizeRhythmHorizontal,
		color: colorFontBase,
	})
	return (
		<Box grid column key={title}>
			<Box grid row css={optionBoxStyles}>
				<Box
					grid
					column
					small={3}
					medium={3}
					large={3}
					alignContent="center"
					verticallyAlignContent="center"
				>
					{typeof TargetImage === "string" ? (
						<Image src={TargetImage} alt={title} css={imageStyles} />
					) : (
						<TargetImage />
					)}
				</Box>
				<Box grid column small={7} medium={7} large={7}>
					<Text variant="h4" css={optionHeaderStyles}>
						{title}
					</Text>
					<Text css={optionTextStyles}>{text}</Text>
				</Box>
			</Box>
		</Box>
	)
}

export function ComingSoonTracking() {
	const nav = useHistory()

	const headerStyles = css({
		color: colorPairingsLightOnDarkForeground,
	})

	const buttonBox = css({
		marginTop: sizeRhythmVertical,
	})

	return (
		<DarkPageLayout>
			<Box grid column verticallyAlignContent="center">
				<Text variant="h3" css={headerStyles}>
					In-app tracking coming soon
				</Text>
			</Box>

			<Block
				title="Live Maps"
				text="See your current position and route live."
				image="/MapPin.svg"
			/>
			<Block
				title="Pick a profile"
				text="Track for multiple profiles at once during group activity."
				image={function Image() {
					return <ImageByName width={60} name="profileIcon" />
				}}
			/>
			<Block
				title="Evidence logging"
				text="Evidence is submitted towards your chosen challenge for you."
				image="/TickLarge.svg"
			/>

			<Box grid column css={buttonBox}>
				<Button
					variant={"secondary"}
					onPress={() => {
						nav.replace("/join/entry")
					}}
				>
					Join a challenge
				</Button>
			</Box>

			<Box grid column css={buttonBox}>
				<Button
					variant={"transparent"}
					outlined
					onPress={() => {
						nav.replace("/")
					}}
					css={css({
						borderColor: colorBrandAlternative,
					})}
				>
					Maybe later
				</Button>
			</Box>
		</DarkPageLayout>
	)
}
