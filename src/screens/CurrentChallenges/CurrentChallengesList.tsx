import { useCurrentChallengeMonthsQuery } from "@rap-api/core"
import { nav } from "aws-amplify"
import { AccordionContent } from "components/Accordion"
import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { useState } from "react"
import { monthNameToIndex } from "utils"

export function CurrentChallengesList() {
	const { data: enteredMonths, loading } = useCurrentChallengeMonthsQuery({
		variables: {
			closed: false,
		},
	})
	const [openedMonths, setOpenedMonths] = useState<number | undefined>()
	const [availableMonths, setAvailableMonths] = useState<number[]>([])

	if (loading) return <Loading />

	return (
		<Box
			grid
			column
			css={{ maxWidth: "100%", paddingRight: 8, paddingLeft: 8, flexGrow: 0 }}
		>
			<AccordionContent
				content={accordionContent.reverse()}
				onChange={(tab) => {
					if (!tab.open) nav.replace(`/challenges/${selectedTab}`)
					else
						nav.replace(
							`/challenges/${selectedTab}/${monthNameToIndex(tab.month)}`,
						)
				}}
			/>
		</Box>
	)
}
