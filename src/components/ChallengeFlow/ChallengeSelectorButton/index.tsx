import { SerializedStyles } from "@emotion/react"
import { BaseButtonProps } from "components/Buttons/types"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { Button } from "components/Buttons"
import { ChallengeType } from "@rap-api/core"
import { ImageByName } from "components/ImageByName"
import {
	absPos,
	boxStyles,
	buttonStyles,
	imageStyles,
	textStyles,
} from "./styles"

type Props = BaseButtonProps & {
	challengeType: ChallengeType
}

function ChallengeImageByChallenge({
	challenge,
}: {
	challenge: ChallengeType
	css?: SerializedStyles[]
}) {
	let imageNameForSearch
	switch (challenge.name?.toLowerCase()) {
		case "steps":
			imageNameForSearch = "adultSteps"
			break
		case "walking":
			imageNameForSearch = "adultWalking"
			break
		case "running":
			imageNameForSearch = "adultRunning"
			break
		case "swimming":
			imageNameForSearch = "adultSwimming"
			break
		case "wheelchair":
			imageNameForSearch = "adultWheelchair"
			break
		case "cycling":
			imageNameForSearch = "adultCycling"
			break
	}

	if (!imageNameForSearch) return null

	return <ImageByName name={imageNameForSearch} width={172} height={172} />
}

export function ChallengeSelectorButton(props: Props) {
	const handlePress = () => {
		if (props.onPress) props.onPress(props.challengeType)
	}

	return (
		<Box
			css={boxStyles}
			verticallyAlignContent="center"
			alignContent="center"
			onPress={handlePress}
		>
			<ChallengeImageByChallenge
				css={[absPos, imageStyles]}
				challenge={props.challengeType}
			/>
			<Button
				css={[absPos, buttonStyles]}
				onPress={handlePress}
				variant={"primary"}
			>
				<Text variant={"button"} css={textStyles}>
					{props.challengeType.displayName ?? props.challengeType.name}
				</Text>
			</Button>
		</Box>
	)
}
