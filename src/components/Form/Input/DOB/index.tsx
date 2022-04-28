import { Box } from "components/Box"
import { Input } from "../"
import { useState } from "react"
import { InputProps } from "../types"
import { useEffect } from "react"
import { Text } from "components/Text"
import { apiMonthToName, nth } from "utils"
import {
	errorTextStyles,
	exampleStyles,
	fieldsetStyles,
	monthStyles,
} from "./styles"
import { Fieldset } from "components/Form/Fieldset"

type DOBInputProps = Omit<
	InputProps,
	"onChange" | "type" | "name" | "value" | "max" | "min"
> & {
	day: string
	month: string
	year: string
	exampleString?: string
	max?: Date
	min?: Date
	hideLabel?: boolean
	onChange: (
		date: { day: string; month: string; year: string },
		valid?: boolean,
	) => void
}

export function DOBInput(props: DOBInputProps) {
	const [{ tooHigh, tooLow }, setMinMaxErrors] = useState<{
		tooHigh: boolean
		tooLow: boolean
	}>({
		tooLow: false,
		tooHigh: false,
	})
	const [{ day, month, year }, setDOB] = useState({
		day: typeof props.day === "undefined" ? "" : props.day,
		month: typeof props.month === "undefined" ? "" : props.month,
		year: typeof props.year === "undefined" ? "" : props.year,
	})

	const [errorState, setErrorState] = useState({
		day: false,
		month: false,
		year: false,
	})

	useEffect(() => {
		const yearNum = parseInt(year, 10)
		const monthNum = parseInt(month, 10)
		const dayNum = parseInt(day, 10)

		if (!isNaN(yearNum) && !isNaN(monthNum) && !isNaN(dayNum)) {
			const newDate = new Date(yearNum, monthNum - 1, dayNum)
			const tooHigh =
				typeof props.max !== "undefined"
					? newDate.valueOf() > props.max.valueOf()
					: false
			const tooLow =
				typeof props.min !== "undefined"
					? newDate.valueOf() < props.min.valueOf()
					: false

			setMinMaxErrors({
				tooHigh,
				tooLow,
			})

			setErrorState({
				day: tooHigh || tooLow || day === "0",
				month: tooHigh || tooLow || month === "0",
				year: tooHigh || tooLow,
			})
		}

		if (props.onChange)
			props.onChange(
				{
					day,
					month,
					year,
				},
				!Object.values(errorState).some(Boolean),
			)
	}, [day, month, year])

	return (
		<Fieldset
			role="group"
			aria-describedby="dob-hint"
			css={fieldsetStyles(tooHigh, tooLow)}
		>
			<Box grid row>
				{!props.hideLabel ? (
					<>
						<Text bold>{props.label}</Text>
						<Text css={exampleStyles}>
							Example: {props.exampleString ?? "21/10/1972"}
						</Text>
					</>
				) : null}
				{tooHigh ? (
					<Text css={errorTextStyles}>
						Dates must be before {props.max!.getDate()}
						{nth(props.max!.getDate())} of{" "}
						{apiMonthToName(props.max!.getMonth() + 1)}{" "}
						{props.max!.getFullYear()}
					</Text>
				) : null}
				{tooLow ? (
					<Text css={errorTextStyles}>
						Dates must be after {props.min!.getDate()}
						{nth(props.min!.getDate())} of{" "}
						{apiMonthToName(props.min!.getMonth() + 1)}{" "}
						{props.max!.getFullYear()}
					</Text>
				) : null}
				<Box grid row>
					<Box grid column small={3.3} medium={3.3} large={3.3}>
						<Input
							label="Day"
							name="dob-day"
							type="text"
							autoComplete="bday-day"
							pattern="[0-9]+"
							inputMode="numeric"
							value={day}
							errored={errorState.day}
							onChange={(value: string) => {
								let nextValue: string | number = value.replace(/[^0-9]/, "")
								if (nextValue && nextValue.length > 0) {
									nextValue = Math.max(1, Math.min(parseInt(nextValue, 10), 31))
								}

								setDOB({
									day: nextValue.toString(),
									month,
									year,
								})
								setErrorState({
									...errorState,
									day: value.replace(/[^0-9]/, "").length === 0,
								})
							}}
						/>
					</Box>
					<Box
						grid
						column
						small={3.3}
						medium={3.3}
						large={3.3}
						css={monthStyles}
					>
						<Input
							label="Month"
							name="dob-month"
							type="text"
							autoComplete="bday-month"
							pattern="[0-9]*"
							inputMode="numeric"
							value={month}
							errored={errorState.month}
							onChange={(value: string) => {
								let nextValue: string | number = value.replace(/[^0-9]/, "")
								if (nextValue && nextValue.length > 0) {
									nextValue = Math.max(1, Math.min(parseInt(nextValue, 10), 12))
								}

								setDOB({
									day,
									month: nextValue.toString(),
									year,
								})
								setErrorState({
									...errorState,
									month: value.replace(/[^0-9]/, "").length === 0,
								})
							}}
						/>
					</Box>
					<Box grid column small={3.3} medium={3.3} large={3.3}>
						<Input
							label="Year"
							name="dob-year"
							type="text"
							autoComplete="bday-year"
							pattern="[0-9]*"
							inputMode="numeric"
							value={year}
							errored={errorState.year}
							onChange={(value: string) => {
								setDOB({
									day,
									month,
									year: value.replace(/[^0-9]/, ""),
								})
								setErrorState({
									...errorState,
									year: value.replace(/[^0-9]/, "").length === 0,
								})
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Fieldset>
	)
}
