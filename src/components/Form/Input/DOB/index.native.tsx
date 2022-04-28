import { Box } from "components/Box"
import { Input } from "components/Form/Input/index.native"
import { useState } from "react"
import { InputProps } from "../types"
import { useEffect } from "react"
import { Text } from "components/Text"
import { apiMonthToName, nth } from "utils"
import { errorTextStyles, exampleStyles, monthStyles } from "./styles"

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
	required?: boolean
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
		day: true,
		month: true,
		year: true,
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
			const nextErrorState = {
				day: tooHigh || tooLow || day === "0" || day === "",
				month: tooHigh || tooLow || month === "0" || month === "",
				year: tooHigh || tooLow || year === "" || year.length !== 4,
			}
			setErrorState(nextErrorState)
		} else {
			setErrorState({
				day: isNaN(dayNum),
				month: isNaN(monthNum),
				year: isNaN(yearNum),
			})
		}
		if (typeof props.onChange === "function")
			props.onChange(
				{
					day,
					month,
					year,
				},
				!errorState.day && !errorState.month && !errorState.year,
			)
	}, [day, month, year])

	useEffect(() => {
		if (typeof props.onChange === "function")
			props.onChange(
				{
					day,
					month,
					year,
				},
				!errorState.day && !errorState.month && !errorState.year,
			)
	}, [tooLow, tooHigh, errorState])

	return (
		
		<Box
			grid
			row
			css={{
				minWidth: "100%",
				flex: undefined,
				flexGrow: undefined,
			}}
		>
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
					{apiMonthToName(props.max!.getMonth() + 1)} {props.max!.getFullYear()}
				</Text>
			) : null}
			{tooLow ? (
				<Text css={errorTextStyles}>
					Dates must be after {props.min!.getDate()}
					{nth(props.min!.getDate())} of{" "}
					{apiMonthToName(props.min!.getMonth() + 1)} {props.min!.getFullYear()}
				</Text>
			) : null}
			<Box grid row css={{ flex: undefined }}>
				<Box grid column small={3.3} medium={3.3} large={3.3}>
					<Input
						required={props.required}
						label="Day"
						name="dob-day"
						type="number"
						autoComplete="bday-day"
						pattern="[0-9]+"
						inputMode="numeric"
						value={day}
						errored={errorState.day}
						onChange={(value: string) => {
							let nextValue: string | number = value.replace(/[^0-9]/, "")
							const leadingZero = value.startsWith("0") && value !== "0"
							if (nextValue && nextValue.length > 0) {
								const val = parseInt(nextValue, 10)
								nextValue = Math.max(0, Math.min(val, 31))
							}

							if (nextValue < 10 && leadingZero) nextValue = "0" + nextValue

							setDOB({
								day: nextValue.toString(),
								month,
								year,
							})
						}}
					/>
				</Box>
				<Box grid column small={3.3} medium={3.3} large={3.3} css={monthStyles}>
					<Input
						label="Month"
						required={props.required}
						name="dob-month"
						type="number"
						autoComplete="bday-month"
						pattern="[0-9]*"
						inputMode="numeric"
						value={month}
						errored={errorState.month}
						onChange={(value: string) => {
							let nextValue: string | number = value.replace(/[^0-9]/, "")
							const leadingZero = value.startsWith("0") && value !== "0"
							if (nextValue && nextValue.length > 0) {
								nextValue = Math.max(0, Math.min(parseInt(nextValue, 10), 12))
							}
							if (nextValue < 10 && leadingZero) nextValue = "0" + nextValue

							setDOB(() => ({
								day,
								month: nextValue.toString(),
								year,
							}))
						}}
					/>
				</Box>
				<Box grid column small={3.3} medium={3.3} large={3.3}>
					<Input
						label="Year"
						required={props.required}
						name="dob-year"
						type="number"
						autoComplete="bday-year"
						pattern="[0-9]*"
						inputMode="numeric"
						value={year}
						errored={errorState.year}
						onChange={(value: string) => {
							setDOB(() => ({
								day,
								month,
								year: value.replace(/[^0-9]/, ""),
							}))
						}}
					/>
				</Box>
			</Box>
		</Box>
		
	)
}
