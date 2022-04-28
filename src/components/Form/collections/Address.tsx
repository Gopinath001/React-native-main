import { Country, useCountriesListQuery, UserAddress } from "@rap-api/core"
import { useState } from "react"
import { Text } from "components/Text"
import { Input } from "../Input"
import { Select } from "../Select"
import { Loading } from "components/Loading"
import { useEffect } from "react"

type Address = Pick<
	UserAddress,
	"address1" | "address2" | "city" | "zip" | "province" | "country"
>
const requiredFields = ["address1", "city", "zip", "province", "country"]
export type AddressFormProps = {
	address?: Address
	onValidityChange: (valid: boolean) => void
	onChange: (address: Address) => void
}

export function AddressForm({
	address,
	onChange,
	onValidityChange,
}: AddressFormProps) {
	const { data: countries, loading: countriesLoading } = useCountriesListQuery()
	const [errorState, setErrorState] = useState<Record<keyof Address, boolean>>({
		address1: false,
		address2: false,
		city: false,
		zip: false,
		province: false,
		country: false,
	})
	const [formState, setFormState] = useState<Address>({
		address1: "",
		address2: "",
		city: "",
		zip: "",
		province: "",
		country: "GB",
		...(address || {}),
	})

	const validateFields = () =>
		requiredFields.every(
			(requiredKey) => !!formState[requiredKey as keyof Address]?.length,
		)

	useEffect(() => {
		onChange && onChange(formState)
		onValidityChange && onValidityChange(validateFields())
	}, [formState])

	if (countriesLoading) return <Loading />

	return (
		<>
			<Text>All address fields are required.</Text>
			<Input
				required
				type="text"
				name="address1"
				label="Address line 1"
				value={formState.address1 ?? ""}
				errored={errorState.address1}
				onChange={(value) => {
					onChange && onChange(formState)
					setFormState({ ...formState, address1: value })
					setErrorState({ ...errorState, address1: value.length === 0 })
				}}
			/>
			<Input
				type="text"
				name="address2"
				label="Address line 2"
				value={formState.address2 ?? ""}
				errored={errorState.address2}
				onChange={(value) => {
					onChange && onChange(formState)
					setFormState({ ...formState, address2: value })
				}}
			/>
			<Input
				required
				type="text"
				name="city"
				label="City"
				value={formState.city ?? ""}
				errored={errorState.city}
				onChange={(value) => {
					onChange && onChange(formState)
					setFormState({ ...formState, city: value })
					setErrorState({ ...errorState, city: value.length === 0 })
				}}
			/>
			<Input
				required
				type="text"
				name="county"
				label="County"
				value={formState.province ?? ""}
				errored={errorState.province}
				onChange={(value) => {
					onChange && onChange(formState)
					setFormState({ ...formState, province: value })
					setErrorState({ ...errorState, province: value.length === 0 })
				}}
			/>
			<Select
				value={formState.country}
				errored={errorState.country}
				options={
					countries?.countries?.edges
						?.filter((edge) => !!edge && !!edge?.node)
						
						?.map((edge) => edge?.node as Country)
						?.map((country) => ({
							label: country.name,
							value: country.iso2,
						}))
						?.sort((a, b) => a.label.localeCompare(b.label)) ?? []
				}
				onChange={(value) => {
					onChange && onChange(formState)
					setFormState({ ...formState, country: value })
					setErrorState({ ...errorState, country: value.length === 0 })
				}}
			/>
			<Input
				type="text"
				name="postcode"
				required
				label="Postcode / Zip Code"
				value={formState.zip ?? ""}
				errored={errorState.zip}
				onChange={(value) => {
					const nextState = {
						...formState,
						zip: value,
					}
					onChange && onChange(nextState)
					setFormState(nextState)
					setErrorState({ ...errorState, zip: value.length === 0 })
				}}
			/>
		</>
	)
}
