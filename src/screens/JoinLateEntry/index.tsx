import { DarkPageLayout } from "components/DarkPageLayout"
import { useParams } from "react-router"
import { JoinLateKidsOrGrownUp } from "./steps/ChildOrAdult"
import JoinLateMonthSelector from "./steps/MonthList"

export default function JoinLateEntry() {
	const { kidsOrGrownUp } = useParams<{ kidsOrGrownUp?: "child" }>()
	let content = <JoinLateKidsOrGrownUp />

	if (kidsOrGrownUp) content = <JoinLateMonthSelector />

	return <DarkPageLayout>{content}</DarkPageLayout>
}
