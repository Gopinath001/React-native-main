import { Box } from "components/Box"
import { Text } from "components/Text"
import { sizeFontSmall } from "@rap-theme"
import { Maybe } from "graphql/jsutils/Maybe"
import { kFormatNumber } from "utils"
import {
	containerStyles,
	markContainerStyles,
	progressIndicatorStyles,
	textStyles,
	markStyles,
} from "./styles"
import { SerializedStyles } from "@emotion/react"

type GoalProgressProps = {
	progressPercent?: number
	progress?: number
	target?: Maybe<number>
	style?: SerializedStyles
}

export function GoalProgress({
	progress,
	progressPercent,
	target,
	style,
}: GoalProgressProps) {
	if (
		!target ||
		typeof progressPercent === "undefined" ||
		typeof progress === "undefined"
	)
		return null

	const renderBars = () => {
		let bars = []
		for (let i = 0; i < 5; i++) {
			bars.push(<Box key={i} css={markStyles} />)
		}
		return bars
	}

	return (
		<Box
			grid
			column
			verticallyAlignContent="center"
			css={[
				containerStyles,
				{ backgroundSize: `${Math.min(progressPercent, 100)}%, 100%` },
				style,
			]}
		>
			<Box css={markContainerStyles}>{renderBars()}</Box>
			<Box css={progressIndicatorStyles}>
				<Text
					verticalMargin={false}
					css={[
						textStyles,
						{
							
							fontSize: progress > 999 ? sizeFontSmall : undefined,
							paddingTop: progress > 999 ? 10 : undefined,
							left: `${Math.min(progressPercent, 100)}%`,
							transform: `translateX: ${progressPercent >= 80 ? "-100%" : 0}`,
						},
					]}
				>
					{kFormatNumber(progress)}
				</Text>
			</Box>
		</Box>
	)
}
