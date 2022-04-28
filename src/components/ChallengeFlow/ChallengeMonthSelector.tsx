import { Box } from "components/Box"
import { Text } from "components/Text"
import { ChevronButton } from "components/Buttons/Chevron"
import { ChallengeTarget, ChallengeType } from "@rap-api/core"
import { css } from "@emotion/react"
import {
	colorBrandAlternative,
	colorPairingsLightOnDarkBackground,
	colorPairingsLightOnDarkForeground,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { Image } from "components/Image"
import { useState } from "react"
import { Button } from "components/Buttons"
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"
import { ChevronButtonDirection } from "components/Buttons/Chevron/types"

type Props = {
	challengeType: ChallengeType
	challengeTarget: ChallengeTarget
}

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

export function ChallengeMonthSelector({
	challengeType,
	challengeTarget,
}: Props) {
	const nav = useHistory()
	const params = useParams<{ challengeId: string; targetId: string }>()
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
	const headerStyles = css({
		textTransform: "uppercase",
	})
	const headerMargin = css({
		marginLeft: sizeRhythmHorizontal / 2,
	})
	const challengeStyles = css({
		width: "100%",
		height: "100%",
		color: "#FFFFFF",
		paddingLeft: sizeRhythmHorizontal,
		paddingRight: sizeRhythmHorizontal,
		textAlign: "center",

		svg: {
			alignSelf: "center",
			maxWidth: "70%",
			maxHeight: "50%",
		},

		p: {
			color: colorPairingsLightOnDarkForeground,
			textTransform: "uppercase",
		},
	})
	const iconStyles = css({
		color: colorPairingsLightOnDarkForeground,
		backgroundColor: colorBrandAlternative,
	})
	const distanceStyles = css({
		backgroundColor: colorPairingsLightOnDarkBackground,
	})
	const columns = css({
		padding: sizeRhythmVertical,
	})
	const textStyles = css({
		marginBottom: 0,
	})
	const numberStyles = css({
		margin: 0,
		fontSize: 70,
	})
	const monthSelectorStyles = css({
		textAlign: "center",
		boxShadow: "0 5px 12px rgba(0, 0, 0, 0.15)",
		margin: sizeRhythmVertical / 2,
	})
	const monthNameStyles = css({
		fontSize: 50,
		margin: 0,
		textTransform: "uppercase",
		width: "100%",
	})

	const handleMonthUp = () => {
		const nextMonth = currentMonth + 1

		if (nextMonth > 11) {
			if (currentYear === new Date().getFullYear() + 1) setCurrentMonth(0)
			else setCurrentMonth(11)
			setCurrentYear(Math.min(new Date().getFullYear() + 1, currentYear + 1))
		} else {
			setCurrentMonth(currentMonth + 1 > 11 ? 0 : currentMonth + 1)
		}
	}
	const handleMonthDown = () => {
		const nextMonth = currentMonth - 1

		if (nextMonth < 0) {
			if (currentYear === new Date().getFullYear() - 1) setCurrentMonth(0)
			else setCurrentMonth(11)
			setCurrentYear(Math.max(new Date().getFullYear() - 1, currentYear - 1))
		} else {
			setCurrentMonth(currentMonth - 1 < 0 ? 11 : currentMonth - 1)
		}
	}

	const handleNext = () => {
		const nextUri = `/challenges/${params.challengeId}/${params.targetId}/${currentMonth}-${currentYear}`
		if (typeof window !== "undefined") {
			window.localStorage.setItem("returnTo", nextUri)
		}
		nav.push(nextUri)
	}

	return (
		<>
			<Box grid row>
				<Box grid row verticallyAlignContent="flex-start">
					<Box small={9}>
						<Text
							css={[headerStyles, headerMargin]}
							accent
							verticalMargin={false}
							variant={"h2"}
						>
							{challengeType.name} distance
						</Text>
						<Text css={headerMargin}>How far can you go?</Text>
					</Box>
				</Box>

				<Box grid row>
					<Box grid column small={5} css={columns}>
						<Box
							grid
							column
							css={[iconStyles, challengeStyles]}
							alignContent="center"
							verticallyAlignContent="center"
						>
							<Image
								src={challengeType.iconFullPathWhite}
								alt={challengeType.name + " icon"}
							/>
							<Text css={textStyles}>{challengeType.name}</Text>
						</Box>
					</Box>

					<Box grid column small={5} css={columns}>
						<Box
							grid
							column
							css={[distanceStyles, challengeStyles]}
							alignContent="center"
							verticallyAlignContent="center"
						>
							<Text css={numberStyles}>{challengeTarget.value}</Text>
							<Text css={textStyles}>{challengeTarget.metric}</Text>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box grid row alignContent="center" css={monthSelectorStyles}>
				<Box grid column small={1}>
					<ChevronButton
						direction={ChevronButtonDirection.LEFT}
						onPress={handleMonthDown}
					/>
				</Box>
				<Box grid column small={7} verticallyAlignContent="center">
					<Text css={monthNameStyles}>{months[currentMonth]}</Text>
					<Text>{currentYear}</Text>
				</Box>
				<Box grid column small={1}>
					<ChevronButton
						direction={ChevronButtonDirection.RIGHT}
						onPress={handleMonthUp}
					/>
				</Box>
			</Box>

			<Box grid row alignContent="center">
				<Button variant="secondary" onPress={handleNext}>
					Continue
				</Button>
			</Box>
		</>
	)
}
