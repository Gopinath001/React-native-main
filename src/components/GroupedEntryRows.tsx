import { denormalizeId } from "utils"
import {
	CartEntryLineItem,
	CartEntryLineItemConnection,
	CartEntryLineItemEdge,
} from "@rap-api/core"
import { EntryRow } from "../components/EntryRow"

type GroupedEntryRows = {
	entryLineItems: Pick<CartEntryLineItemConnection, "edges">
	priceBreakdown: { lineItems: { edges: any[] } }
	onDelete: () => void
}

export function GroupedEntryRows({
	entryLineItems,
	priceBreakdown,
	onDelete,
}: GroupedEntryRows) {
	const lineItems = entryLineItems.edges

	function GroupPriceBreakdownByVariant(priceBreakdown: {
		lineItems: { edges: any[] }
	}): Record<string, CartEntryLineItemEdge[]> {
		return priceBreakdown?.lineItems?.edges
			?.filter(
				(lineItem: { node: { title: string } }) =>
					lineItem?.node?.title === "Challenge entry",
			)
			.reduce(function (rv, x): Record<string, CartEntryLineItemEdge[]> {
				;(rv[x.node.variant.id] = rv[x.node.variant.id] || []).push(x)
				return rv
			}, {})
	}

	function GroupEntryLineItems(
		entryLineItems: any[],
		priceBreakdown: { lineItems: { edges: any[] } },
	) {
		const groupedPriceBreakdown = GroupPriceBreakdownByVariant(priceBreakdown)

		return Object.entries(groupedPriceBreakdown).map(([k, items]) => {
			// TODO undo the undefined ignorance in utils.tsx#L8&L21
			const cartEntryLineItemIds = items.map((lineItem) =>
				denormalizeId(
					(
						lineItem?.node as CartEntryLineItem & {
							customAttributes: { key: string; value: string }[]
						}
					)?.customAttributes?.find(
						(customAttribute: { key: string }) => customAttribute.key == "ID",
					)?.value,
					"cart_entry_line_items",
				),
			)
			const cartEntryLineItems = cartEntryLineItemIds.map(
				(cartEntryLineItemId: any) =>
					entryLineItems.find(
						(entryLineItemEdge) =>
							entryLineItemEdge.node.id == cartEntryLineItemId,
					),
			)
			return {
				key: k,
				quantity: items.length,
				cartEntryLineItems: cartEntryLineItems,
			}
		})
	}

	const groupedEntryLineItems = GroupEntryLineItems(
		lineItems ?? [],
		priceBreakdown,
	)

	return (
		<>
			{groupedEntryLineItems.map((entryLineItem) => {
				return (
					<EntryRow
						key={entryLineItem.key}
						onDelete={onDelete}
						entryLineItem={entryLineItem.cartEntryLineItems[0]}
						quantity={entryLineItem.quantity}
						priceBreakdown={priceBreakdown}
						lineItems={entryLineItem.cartEntryLineItems}
					/>
				)
			})}
		</>
	)
}
