export enum MonthDataType {
	Current,
	Upcoming,
	Completed,
}

export type CurrentPreviousMonthsProps = {
	dataType: MonthDataType
}

export type OpenMonth = {
	node: {
		month: number
		year: number
	}
}
