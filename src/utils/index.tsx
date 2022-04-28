import { CartProductLineItem, Maybe, Product } from "@rap-api/core"
import { Dispatch, SetStateAction, useState } from "react"
import { sizeRhythmHorizontal, sizeRhythmVertical } from "@rap-theme"
import { IRIName } from "./types"

export function realDate(year?: number, month?: number, day?: number) {
	const today = new Date()
	const date = new Date(
		Date.UTC(
			year ?? today.getFullYear(),
			(typeof month === "undefined" ? today.getMonth() + 1 : month) - 1,
			day ?? today.getDate(),
			1,
		),
	)

	date.setHours(0, 0, 0, 0)

	return date
}

export const normalizeId = (id: string): string => id.split("/").reverse()[0]

export const denormalizeId = (id?: string, type?: IRIName): string => {
	
	if (!id || !type) return "#"

	return `/api/${type}/${id}`
}

export const setReturnTo = async (returnTo: string = "/") => {
	if (typeof window?.localStorage !== "undefined")
		window.localStorage.setItem("redirectTo", returnTo)
}

export const getReturnTo = async (): Promise<{
	uri: string
	data?: Record<string, string>
}> => {
	if (typeof window !== "undefined") {
		const search = new URLSearchParams(window.location.search)
		const raw = search.getAll("data")
		let data = {}

		// Try to decode the data, ignore any errors here.
		if (raw && raw.length) {
			try {
				data = JSON.parse(raw[0])
			} catch {}
		}

		return {
			uri:
				typeof window !== "undefined" && "undefined"
					? window.localStorage.getItem("redirectTo") ?? "/"
					: "/",
			data,
		}
	}

	return { uri: "/" }
}


export type ProductPrice = {
	amount: string
	currencyCode: string
}
export type ProductVariant = {
	id: string
	title: string
	requiresShipping: boolean
	sku: string
	productId: Maybe<string>
	price: ProductPrice
	presentmentPrices: ProductPrice[]
}

export const variantById = (
	variants: ProductVariant[],
	id: string,
): ProductVariant | undefined =>
	!variants || !id
		? undefined
		: variants.find((variant: ProductVariant) => variant.id === id)

export const monthNameToIndex = (monthName: string): number =>
	new Date(`${monthName} 01, 2021 00:00:00`).getMonth()

export const formatDate = (date: Date) => {
	const month = String(date.getMonth() + 1)
	const paddedMonth = month.length == 1 ? "0" + month : month
	const day = String(date.getDate())
	const paddedDay = day.length == 1 ? "0" + day : day
	return date.getFullYear() + "-" + paddedMonth + "-" + paddedDay
}

export const formatShortDate = (year: number, month: number, day: number) => {
	const date = new Date(year, month - 1, day - 1, 0, 0, 0)
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`
}

export const apiMonthToName = (apiMonth: number = 0): string => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	// month paramenter is zero-indexed
	const realMonth = apiMonth - 1
	return months[realMonth]
}

export const productLineItemIdFromVariantId = (
	products: CartProductLineItem[],
	variantId: string,
): string | undefined =>
	products.find((product) => product.variantId === variantId)?.id


export const useQuantityState = (
	initialQuantity: number = 0,
): [
	number,
	(max?: number) => void,
	(min?: number) => void,
	Dispatch<SetStateAction<number>>,
] => {
	const [quantity, setQuantity] = useState(initialQuantity)

	const increase = (max: number = Infinity) => {
		if (quantity + 1 > max) setQuantity(max)
		else setQuantity(quantity + 1)
	}
	const decrease = (min: number = 0) => {
		if (quantity - 1 < min) setQuantity(1)
		else setQuantity(quantity - 1)
	}

	return [quantity, increase, decrease, setQuantity]
}

export const productByVariantId = (
	products: Product[],
	variantId: string,
): Product | undefined => {
	return products?.find(
		(product) =>
			(product?.variants as ProductVariant[])?.find(
				(variant) => variant.id === variantId,
			) !== undefined,
	)
}

export const noop = () => {}

export const nth = (day: number) => {
	if (day > 3 && day < 21) return "th"
	switch (day % 10) {
		case 1:
			return "st"
		case 2:
			return "nd"
		case 3:
			return "rd"
		default:
			return "th"
	}
}

export const kFormatNumber = (num: number) => {
	return Math.abs(num) > 999
		? (Math.sign(num) * (Math.abs(num) / 1000)).toFixed(0) + "k"
		: Math.sign(num) * Math.abs(num)
}

export const horizontalRhythmPadding = {
	paddingLeft: sizeRhythmHorizontal,
	paddingRight: sizeRhythmHorizontal,
}
export const verticalRhythmPadding = {
	paddingTop: sizeRhythmVertical,
	paddingBottom: sizeRhythmVertical,
}
export function round(value: number, precision: number) {
	var multiplier = Math.pow(10, precision || 0)
	return Math.round(value * multiplier) / multiplier
}
export function printDateGB(date: Date) {
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
export function printDateUS(date: Date) {
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}
export const progressNumberFormatter = (num: number) => {
	if (num > 99999) {
		return round(num / 1000, 0) + "k"
	} else if (num > 9999) {
		return round(num, 0)
	} else if (num > 999) {
		return round(num, 1)
	} else return round(num, 2)
}
