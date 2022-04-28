import { Text } from "components/Text"
import { useEffect, useState } from "react"
import CurrentPreviousMonths from "components/CurrentChallenges/CurrentPreviousMonths"
import { PageLayout } from "components/PageLayout"
import { TabbedContent, Tab } from "components/TabbedContent"
import {
	colorBrandAlternative,
	colorPairingsProgressForeground,
} from "@rap-theme"
import { useHistory, useParams } from "react-router"
import { headingStyles } from "./styles"

const tabbedContent: Tab[] = [
	{
		name: "current",
		content: CurrentPreviousMonths,
	},
	{
		name: "Upcoming",
		color: colorBrandAlternative,
		content: CurrentPreviousMonths,
	},
	{
		name: "Finished",
		color: colorPairingsProgressForeground,
		content: CurrentPreviousMonths,
	},
]
export default function CurrentChallengesPage() {
	const nav = useHistory()
	const { selectedTab = "current" } =
		useParams<{ selectedTab?: "current" | "upcoming" | "completed" }>()
	const [currentTab, setCurrentTab] = useState(
		tabbedContent.findIndex(({ name }) => name.toLowerCase() === selectedTab) ??
			0,
	)

	useEffect(() => {
		if (selectedTab) {
			if (selectedTab == "completed") {
				setCurrentTab(2)
			} else {
				setCurrentTab(
					tabbedContent.findIndex(
						({ name }) => name.toLowerCase() === selectedTab,
					) ?? 0,
				)
			}
		} else setCurrentTab(0)
	}, [selectedTab])

	return (
		<PageLayout>
			<Text variant="h3" verticalMargin={false} css={headingStyles}>
				CHALLENGES
			</Text>
			<TabbedContent
				variant="secondary"
				tabs={tabbedContent}
				currentTab={currentTab}
				setCurrentTab={(index) => {
					switch (index) {
						case 0:
							return nav.replace("/challenges/current")
						case 1:
							return nav.replace("/challenges/upcoming")
						case 2:
							return nav.replace("/challenges/completed")
					}
				}}
			/>
		</PageLayout>
	)
}
