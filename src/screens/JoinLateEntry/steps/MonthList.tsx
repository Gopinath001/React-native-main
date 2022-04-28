import { Text } from "components/Text"
import { Box } from "components/Box"
import { css } from "@emotion/react"
import { sizeRhythmVertical, sizeRhythmHorizontal } from "@rap-theme"
import { MedalImage } from "components/MedalImage"
import { useAvailableEntryMonthsQuery } from "@rap-api/core"
import { useHistory, useParams } from "react-router"
import { Button } from "components/Buttons"

const lightText = css({
	color: "white",
})
const optionHeaderStyles = css({
	textTransform: "uppercase",
	margin: 0,
	textAlign: "center",
	width: "100%",
	fontSize: 28,
})

const linkStyles = css({
	display: "flex",
	flexDirection: "row",
	backgroundColor: "white",
	marginBottom: sizeRhythmVertical,
})

export default function JoinLateMonthSelector() {
	const { kidsOrGrownUp } = useParams<{ kidsOrGrownUp: "child" }>()
	const { data } = useAvailableEntryMonthsQuery()
	const nav = useHistory()

	const months =
		data?.availableEntryMonths?.edges
			?.map((item) => {
				return item?.node
			})
			?.sort((a, b) => {
				if (!a || !b) {
					return 0
				}
				return a.year !== b.year ? b.year - a.year : b.month - a.month
			}) ?? []

	return (
		<Box
			column
			css={css({ paddingHorizontal: sizeRhythmHorizontal, paddingBottom: 300 })}
		>
			<Box row>
				<Text variant="h1" css={lightText}>
					Late entries
				</Text>
				<Text css={lightText}>
					Missed a month? You&apos;re in the right place!
				</Text>
			</Box>

			<Box row>
				{months.map((availableMonth) => {
					if (availableMonth && availableMonth.lateEntry) {
						return (
							<Button
								key={`/join/${kidsOrGrownUp}/${availableMonth.month}/${availableMonth.year}`}
								onPress={() =>
									nav.push(
										`/join/${kidsOrGrownUp}/${availableMonth.month}/${availableMonth.year}`,
									)
								}
								variant="none"
								css={[
									linkStyles,
									css({
										backgroundColor: "transparent",
										maxWidth: "33%",
										minWidth: "33%",
										maxHeight: "25%",
										paddingHorizontal: sizeRhythmHorizontal / 4,
										paddingVertical: sizeRhythmVertical / 4,
									}),
								]}
							>
								<Box
									css={css({
										backgroundColor: "#FFFFFF",
										flexShrink: 1,
										flexDirection: "column",
									})}
								>
									<Box
										row
										alignContent="center"
										css={css({
											width: "100%",
										})}
									>
										<MedalImage
											year={availableMonth.year}
											month={availableMonth.month}
											type={"running"}
											width="100%"
										/>
									</Box>
									<Box row alignContent="center">
										<Text variant="h4" css={optionHeaderStyles} light>
											{availableMonth.monthName.substr(0, 3)}{" "}
											{availableMonth.year}
										</Text>
									</Box>
								</Box>
							</Button>
						)
					}
					return null
				})}
			</Box>
		</Box>
	)
}
