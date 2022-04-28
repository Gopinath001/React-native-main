import { Redirect, useParams } from "react-router"
import { JoinMonth } from "./steps/Month"
import { JoinType } from "./steps/Type"

export default function JoinEntry() {
	const { year, month, kidsOrGrownUp } = useParams<{
		month?: string
		year?: string
		kidsOrGrownUp?: "child" | "adult"
	}>()

	// If the user hasn't selected anything, show the type screen.
	if (!month && !year && !kidsOrGrownUp) return <JoinType />

	
	if (month && year && kidsOrGrownUp)
		return <Redirect to={`/join/${kidsOrGrownUp}/${month}/${year}`} />

	if (month && year && !kidsOrGrownUp) return <JoinMonth />

	// If the user hasn't selected anything, show the type screen.
	return <JoinType />
}
