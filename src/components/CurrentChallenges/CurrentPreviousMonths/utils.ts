import { realDate } from "utils"

function currentTabMonths(month: number, year: number) {
	// Get the date
	const today = realDate()
	const currentMonth = today.getMonth() + 1
	const currentYear = today.getFullYear()

	if (currentYear !== year) {
		return year < currentYear
	}
	return month <= currentMonth
}

function upcomingTabMonths(month: number, year: number) {
	// Get the date
	const today = realDate()
	const currentMonth = today.getMonth() + 1
	const currentYear = today.getFullYear()

	if (currentYear !== year) {
		return year > currentYear
	}
	return month > currentMonth
}

export function getMonthListCallback(
	currentTab: "current" | "upcoming" | "completed",
) {
	switch (currentTab) {
		case "current":
			return currentTabMonths
		case "upcoming":
			return upcomingTabMonths
		case "completed":
		default:
			return () => true
	}
}
