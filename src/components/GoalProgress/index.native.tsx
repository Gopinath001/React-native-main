import { Box } from "components/Box"
import { Text } from "components/Text"
import { sizeFontSmall } from "@rap-theme"
import { Maybe } from "graphql/jsutils/Maybe"
import { kFormatNumber } from "utils"
import {
	containerStyles,
	markContainerStyles,
	markInnerContainerStyles,
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
		<Box css={[containerStyles, style]}>
			<Box css={markContainerStyles}>
				{/* @ts-ignore */}
				<Box css={markInnerContainerStyles(progressPercent)} />
				{renderBars()}
			</Box>
			<Box
				css={[
					progressIndicatorStyles,
					{
						top: -12,
						left: `${Math.min(
							progressPercent >= 88 ? 88 : progressPercent,
							100,
						)}%`,
					},
				]}
			>
				<Text
					css={[
						textStyles,
						{
							
							fontSize: progress > 999 ? sizeFontSmall : undefined,
							// paddingTop: progress > 999 ? 10 : undefined,
							width: "100%",
						},
					]}
				>
					{kFormatNumber(progress)}
				</Text>
			</Box>
		</Box>
	)
}
