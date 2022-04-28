import { useAnnualPassesQuery } from "@rap-api/core"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { PageLayout } from "../components/PageLayout"
import { AnnualPass } from "../components/AnnualPass"
import { Tab, TabbedContent } from "../components/TabbedContent"
import { useHistory, useParams } from "react-router"
import { useEffect, useState } from "react"
import { Button } from "components/Buttons"
import {
	sizeRhythmVertical,
	colorBrandAlternative,
	colorPairingsProgressForeground,
} from "@rap-theme"
import { Linking } from "react-native"
import { css } from "@emotion/react"

const currentTime = new Date()
const currentYear = currentTime.getFullYear()

function ActivePasses() {
	const { data, loading } = useAnnualPassesQuery()

	if (loading) return <Loading />

	const passes =
		data?.annualPasses?.edges?.filter((pass) => {
			return pass && pass.node && pass.node.year == currentYear
		}) ?? []

	return (
		<>
			{passes.length == 0 ? (
				<Text>You currently have no active annual passes.</Text>
			) : null}
			{passes.map((pass) => (
				<>
					{pass?.node?.year == currentYear ? (
						<AnnualPass {...pass.node} />
					) : null}
				</>
			))}
		</>
	)
}

function FuturePasses() {
	const { data, loading } = useAnnualPassesQuery()

	if (loading) return <Loading />

	const passes =
		data?.annualPasses?.edges?.filter((pass) => {
			return pass && pass.node && pass.node.year > currentYear
		}) ?? []

	return (
		<>
			{passes.length == 0 ? (
				<Text>You have not purchased any future annual passes.</Text>
			) : null}
			{passes.map((pass) => (
				<>
					{pass?.node?.year ? (
						<>
							<AnnualPass {...pass.node} />
						</>
					) : null}
				</>
			))}
		</>
	)
}

function PastPasses() {
	const { data, loading } = useAnnualPassesQuery()

	if (loading) return <Loading />

	const passes =
		data?.annualPasses?.edges?.filter((pass) => {
			return pass && pass.node && pass.node.year < currentYear
		}) ?? []

	return (
		<>
			{passes.length == 0 ? <Text>You have no past annual passes.</Text> : null}
			{passes.map((pass) => (
				<>
					{pass?.node?.year ? (
						<>
							<AnnualPass {...pass.node} />
						</>
					) : null}
				</>
			))}
		</>
	)
}

const tabbedContent: Tab[] = [
	{
		name: "active",
		content: ActivePasses,
	},
	{
		name: "future",
		color: colorBrandAlternative,
		content: FuturePasses,
	},
	{
		name: "past",
		color: colorPairingsProgressForeground,
		content: PastPasses,
	},
]

export default function AnnualPasses() {
	const nav = useHistory()
	const { selectedTab } =
		useParams<{ selectedTab?: "active" | "future" | "past" }>()
	const [currentTab, setCurrentTab] = useState(
		tabbedContent.findIndex(({ name }) => name.toLowerCase() === selectedTab) ??
			0,
	)

	useEffect(() => {
		if (selectedTab)
			setCurrentTab(
				tabbedContent.findIndex(
					({ name }) => name.toLowerCase() === selectedTab,
				) ?? 0,
			)
		else setCurrentTab(0)
	}, [selectedTab])

	return (
		<PageLayout>
			<Box grid column>
				<Box row>
					<Text accent variant="h3">
						Your annual passes
					</Text>
				</Box>

				<Box row>
					<TabbedContent
						variant="secondary"
						tabs={tabbedContent}
						currentTab={currentTab}
						setCurrentTab={(index) => {
							switch (index) {
								case 0:
									return nav.replace("/annual-passes/active")
								case 1:
									return nav.replace("/annual-passes/future")
								case 2:
									return nav.replace("/annual-passes/past")
							}
						}}
					/>
				</Box>

				<Box grid row css={css({ marginVertical: sizeRhythmVertical })}>
					<Button
						variant={"primary"}
						onPress={(event) => {
							event.preventDefault()
							Linking.openURL("https://www.raceatyourpace.co.uk/annual-pass/")
						}}
					>
						Find out more
					</Button>
				</Box>
			</Box>
		</PageLayout>
	)
}
