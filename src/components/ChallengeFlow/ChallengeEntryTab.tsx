import { useLocation } from "react-router-dom"
import { RouterState } from "../../routes"
import { ChallengeExtras } from "./ChallengeExtras"
import { ChallengeMonthSelector } from "./ChallengeMonthSelector"
import { ChallengeMonthSelectorWithQuery } from "./ChallengeMonthSelectorWithQuery"
import { ChallengePersonalisedMedalOffer } from "./ChallengePersonalisedMedalOffer"
import { ChallengeProfileSelector } from "./ChallengeProfilesSelector"
import { ChallengeTargetGrid } from "./ChallengeTargetGrid"
import { ChallengeTargetGridWithQuery } from "./ChallengeTargetGridWithQuery"
import { ChallengeTypeGrid } from "./ChallengeTypeGrid"
import { ChallengeDashboard } from "./ChallengeDashboard"

export enum ChallengeEntryStage {
	ChildOrAdult = "child-or-adult",
	Type = "type",
	Target = "target",
	Month = "month",
	Profiles = "profiles",
	Extras = "extras",
	PersonalisedMedal = "personalised-offer",
	Details = "user-details",
	ConfirmEntry = "confirm-entry",
	Confirmed = "confirmed",
}

export enum ChildOrAdult {
	Child = "child",
	Adult = "adult",
}

type ChallengeEntryTabProps = {
	stage: ChallengeEntryStage
}

export function ChallengeEntryTab({ stage }: ChallengeEntryTabProps) {
	const routerState = useLocation<RouterState>().state
	const challengeTypeState = routerState?.challengeType
	const challengeTargetState = routerState?.challengeTarget

	switch (stage) {
		default:
		case ChallengeEntryStage.ChildOrAdult:
			return <ChallengeDashboard />
		case ChallengeEntryStage.Type:
			return <ChallengeTypeGrid />
		case ChallengeEntryStage.Target:
			if (challengeTypeState)
				return <ChallengeTargetGrid challengeType={challengeTypeState} />
			else return <ChallengeTargetGridWithQuery />

		case ChallengeEntryStage.Month:
			if (challengeTypeState && challengeTargetState)
				return (
					<ChallengeMonthSelector
						challengeType={challengeTypeState}
						challengeTarget={challengeTargetState}
					/>
				)
			else return <ChallengeMonthSelectorWithQuery />
		case ChallengeEntryStage.Profiles:
			return <ChallengeProfileSelector />
		case ChallengeEntryStage.PersonalisedMedal:
			return <ChallengePersonalisedMedalOffer />
		case ChallengeEntryStage.Extras:
			return <ChallengeExtras />
	}
}
