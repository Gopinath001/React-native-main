import { getMonthListCallback } from "../utils"

jest.useFakeTimers().setSystemTime(new Date("2022-01-01").getTime())

describe("Current, Upcoming and Completed challenges should filter correctly.", () => {
	it("Should return expected functions for selected tab name.", () => {
		expect(getMonthListCallback("current").name).toBe("currentTabMonths")
		expect(getMonthListCallback("upcoming").name).toBe("upcomingTabMonths")
	})

	it("Should filter current months properly", () => {
		const currentFilter = getMonthListCallback("current")
		// Set it to just before the challenge fixture so it's "Current" and thus true.
		jest.useFakeTimers().setSystemTime(new Date("2022-01-01").getTime())
		expect(currentFilter(1, 2022)).toBe(true)

		// Set it to just after the challenge fixture so it's "Upcoming" and thus false.
		jest.useFakeTimers().setSystemTime(new Date("2021-12-01").getTime())
		expect(currentFilter(1, 2022)).toBe(false)
	})

	it("Should filter upcoming months properly", () => {
		const currentFilter = getMonthListCallback("upcoming")
		// Set it to just before the challenge fixture so it's "Current" and thus false.
		jest.useFakeTimers().setSystemTime(new Date("2022-01-01").getTime())
		expect(currentFilter(1, 2022)).toBe(false)

		// Set it to just after the challenge fixture so it's "Upcoming" and thus true.
		jest.useFakeTimers().setSystemTime(new Date("2021-12-01").getTime())
		expect(currentFilter(1, 2022)).toBe(true)
	})

	it("Should return all completed months", () => {
		const currentFilter = getMonthListCallback("completed")
		// Set it to just before the challenge fixture so it's "Current" and thus false.
		jest.useFakeTimers().setSystemTime(new Date("2022-01-01").getTime())
		expect(currentFilter(1, 2022)).toBe(true)

		// Set it to just after the challenge fixture so it's "Upcoming" and thus true.
		jest.useFakeTimers().setSystemTime(new Date("2021-12-01").getTime())
		expect(currentFilter(1, 2022)).toBe(true)
	})
})
