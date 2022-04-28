import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {
	ChallengeEntryStage,
	ChallengeEntryTab,
} from "../components/ChallengeFlow/ChallengeEntryTab"
import { ChallengeRouteParams } from "../components/ChallengeFlow/types"
import { PageLayout } from "../components/PageLayout"
import { Tab, TabbedContent } from "../components/TabbedContent"
import ChallengeAddressScreen from "./ChallengeAddress"
import ChallengeEntryConfirmScreen from "./ChallengeEntryConfirm"
import OrderConfirmed from "./OrderConfirmed"

export default function ChallengesFlowScreen() {
	const [currentTab, setCurrentTab] = useState(0)
	const {
		challengeId,
		targetId,
		month,
		extras,
		cartId,
		confirm: confirmStage,
		confirmed,
	} = useParams<ChallengeRouteParams>()

	const stageFromParams = (): ChallengeEntryStage => {
		if (confirmed) return ChallengeEntryStage.Confirmed
		else if (confirmStage) return ChallengeEntryStage.ConfirmEntry
		else if (extras && extras === "personalised-medals")
			return ChallengeEntryStage.PersonalisedMedal
		else if (cartId) return ChallengeEntryStage.Details
		else if (extras && extras === "extras") return ChallengeEntryStage.Extras
		else if (targetId) return ChallengeEntryStage.Profiles
		else if (challengeId) return ChallengeEntryStage.Target
		else if (month) return ChallengeEntryStage.Type
		else return ChallengeEntryStage.ChildOrAdult
	}
	const stage = stageFromParams()

	useEffect(() => {
		setCurrentTab(
			stage === ChallengeEntryStage.ConfirmEntry
				? 2
				: stage === ChallengeEntryStage.Details
				? 1
				: 0,
		)
	}, [stage])

	if (stage === ChallengeEntryStage.Confirmed) return <OrderConfirmed />

	const tabbedContent: Tab[] = [
		{
			name: "Enter",
			disabled: true,
			content: function EnterChallenge() {
				return <ChallengeEntryTab stage={stage} />
			},
		},
		{
			name: "Your Details",
			disabled: true,
			content: ChallengeAddressScreen,
		},
		{
			name: "Confirmation",
			disabled: true,
			content: ChallengeEntryConfirmScreen,
		},
	]

	return (
		<PageLayout>
			<TabbedContent
				tabs={tabbedContent}
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			/>
		</PageLayout>
	)
}
