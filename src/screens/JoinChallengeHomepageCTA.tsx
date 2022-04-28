import { Button } from "components/Buttons"
import { Box } from "components/Box"
import { Text } from "components/Text"
import { useHistory } from "react-router"
import { useAvailableEntryMonthsQuery } from "@rap-api/core"
import { Loading } from "components/Loading"
import { MedalImage } from "components/MedalImage"
import { sizeRhythmVertical } from "@rap-theme"

export function JoinChallengeHomepageCTA() {
	const { data, loading } = useAvailableEntryMonthsQuery()
	const nav = useHistory()

	const guestStateLinkToJoin = () => {
		nav.push("/join/entry", {
			guestIntent: true,
		})
	}

	if (loading) return <Loading />

	const months =
		data?.availableEntryMonths?.edges
			?.map((item) => item?.node)
			?.filter((item) => item?.default) ?? []

	return (
		<Box column css={{ width: "100%", alignItems: "center" }}>
			<Text
				variant="paragraph"
				css={{ textAlign: "center", marginVertical: sizeRhythmVertical }}
			>
				You don&apos;t have any ongoing challenges. Check the Upcoming tab for
				challenges starting next month, and Finished for challenges you&apos;ve
				completed!
			</Text>
			<Box
				grid
				column
				small={8}
				medium={8}
				large={5}
				css={{ marginLeft: "auto", marginRight: "auto" }}
			>
				{months.map((defaultMonth) => {
					if (!defaultMonth) {
						return null
					}
					return (
						<MedalImage
							key={defaultMonth.month + defaultMonth.year}
							month={defaultMonth.month}
							year={defaultMonth.year}
							type={"running"}
							height={300}
							width={300}
						/>
					)
				})}
			</Box>
			<Box row>
				<Button variant="secondary" fullWidth onPress={guestStateLinkToJoin}>
					Join a challenge
				</Button>
			</Box>
		</Box>
	)
}
