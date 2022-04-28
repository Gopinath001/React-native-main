import { Box } from "components/Box"
import { Text } from "components/Text"
import {
	ChallengeTarget,
	ChallengeTargetEdge,
	ChallengeTargetsByChallengeQuery,
} from "@rap-api/core"
import { Button } from "components/Buttons"
import { useHistory, useLocation, useParams } from "react-router"
import { normalizeId } from "utils"
import { Image } from "components/Image"
import { ChallengeRouteParams } from "../types"
import {
	buttonContainerStyles,
	buttonStyles,
	headerMargin,
	headerWrapperStyles,
	headerStyles,
	iconImageStyles,
	iconStyles,
	targetGridContainerStyles,
	textStyles,
} from "./styles"
import { RouterState } from "routes"
import { View } from "react-native"

type Props = {
	challengeType: ChallengeTargetsByChallengeQuery["challengeType"]
}

export function ChallengeTargetGrid({ challengeType }: Props) {
	const nav = useHistory()
	const params = useParams<ChallengeRouteParams>()
	const { state } = useLocation<RouterState>()

	if (!challengeType) return null

	return (
		<Box grid column css={{ paddingLeft: 8, paddingRight: 8 }}>
			<Box
				grid
				row
				nowrap
				verticallyAlignContent="flex-start"
				css={{ maxHeight: 58 }}
			>
				<Box css={headerWrapperStyles}>
					<Text css={headerStyles} accent verticalMargin={false} variant={"h2"}>
						{challengeType.name} distance
					</Text>
					<View style={iconStyles}>
						<Image
							src={challengeType.iconFullPathWhite}
							alt={challengeType.name + " icon"}
							css={iconImageStyles}
						/>
					</View>
				</Box>
			</Box>

			<Box css={{ maxHeight: 33 }}>
				<Text css={headerMargin}>How far can you go?</Text>
			</Box>

			<Box grid row css={targetGridContainerStyles}>
				{challengeType?.targets?.edges
					?.filter(
						(challengeTargetEdge): challengeTargetEdge is ChallengeTargetEdge =>
							!!challengeTargetEdge?.node,
					)
					.map(
						(challengeTarget): ChallengeTarget =>
							challengeTarget.node as ChallengeTarget,
					)
					.map((challengeTarget) => (
						<View key={challengeTarget.value} css={buttonContainerStyles}>
							<Button
								css={buttonStyles}
								variant="primary"
								onPress={() => {
									nav.push(
										`/join/${params.kidsOrGrownUp}/${params.month}/${
											params.year
										}/${params.challengeId}/${normalizeId(challengeTarget.id)}`,
										{ ...(state ?? {}), challengeTarget, challengeType },
									)
								}}
							>
								<Text css={textStyles} bold>
									{String(challengeTarget.value).replace(
										/\B(?=(\d{3})+(?!\d))/g,
										",",
									)}
								</Text>
								<Text css={textStyles} bold>
									{" "}
									{challengeTarget.value === 1 &&
									challengeTarget.metric == "miles"
										? "mile"
										: challengeTarget.metric}
								</Text>
							</Button>
						</View>
					))}
			</Box>
		</Box>
	)
}
