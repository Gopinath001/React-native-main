export enum ChallengeEntryMonths {
	Jan,
	Feb,
	Mar,
	Apr,
	May,
	Jun,
	Jul,
	Aug,
	Sep,
	Oct,
	Nov,
	Dec,
}

export type ChallengeRouteParams = {
	kidsOrGrownUp?: string
	challengeId?: string
	targetId?: string
	month?: string
	year?: string
	extras?: "personalised-medals" | "extras"
	cartId?: string
	confirm?: string
	confirmed?: string
}
