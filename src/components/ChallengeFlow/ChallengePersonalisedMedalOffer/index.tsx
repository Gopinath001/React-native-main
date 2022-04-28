import { Avatar } from "components/Avatar"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { UserContext } from "providers/User"
import { useContext, useState } from "react"
import { Redirect, useHistory, useLocation, useParams } from "react-router"
import { css } from "@emotion/react"
import { denormalizeId, normalizeId } from "utils"
import {
	colorBrandAlternative,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { Button } from "components/Buttons"
import {
	useCartByIdQuery,
	usePersonalisedMedalPricingQuery,
	UserProfile,
	useSetEntryPersonalisedMutation,
} from "@rap-api/core"
import { RouterState } from "routes"
import { ChallengeRouteParams } from "../types"
import { Loading } from "components/Loading"
import { CurrencyText } from "../../CurrencyText"
import { useEffect } from "react"
import { MedalImage } from "../../MedalImage"
import { priceStyles } from "./styles"
import { BooleanSwitch } from "components/Form/Switch"
import { View } from "react-native"

export function ChallengePersonalisedMedalOffer() {
	const { user } = useContext(UserContext)
	const nav = useHistory()
	const params = useParams<ChallengeRouteParams>()
	const { state: routerState } = useLocation<RouterState>()
	const { data: pricing, loading: pricingLoading } =
		usePersonalisedMedalPricingQuery()
	const [setPersonalisedFor, { loading: settingPersonalised }] =
		useSetEntryPersonalisedMutation()
	const {
		data: cart,
		loading: cartLoading,
		refetch,
	} = useCartByIdQuery({
		variables: {
			id: denormalizeId(params.cartId!, "carts"),
		},
	})
	const [selected, setSelected] = useState<Set<String>>(new Set([]))

	useEffect(() => {
		refetch()
	}, [])
	useEffect(() => {
		if (routerState?.guestIntent) {
			setSelected(new Set())
		} else {
			setSelected(
				new Set(
					cart?.cart?.entryLineItems?.edges
						?.filter(
							(entryLineItemEdge) =>
								entryLineItemEdge?.node?.personalisedMedal === 1,
						)
						.map((entryLineItemEdge) =>
							normalizeId(entryLineItemEdge!.node!.profile!.id!),
						),
				),
			)
		}
	}, [cart?.cart?.entryLineItems?.edges, routerState?.guestIntent])

	if (
		!cart?.cart?.entryLineItems?.edges ||
		!Array.isArray(cart?.cart?.entryLineItems?.edges) ||
		cart.cart.entryLineItems.edges.length <= 0
	)
		return <Loading />

	if (!cart?.cart?.entryLineItems?.edges[0]?.node) return <Loading />

	const { month, year, challengeTarget } =
		cart?.cart?.entryLineItems?.edges[0].node

	if (!routerState?.guestIntent && (!user || !user.ownerProfile))
		return (
			<Redirect
				to={{
					pathname: "/auth",
					search: "returnTo=" + escape(nav.location.pathname),
					state: routerState,
				}}
			/>
		)

	const rowStyles = css({
		marginBottom: sizeRhythmVertical,
		justifyContent: "center",
	})
	const textStyles = css({
		textTransform: "uppercase",
		margin: "auto",
		marginLeft: sizeRhythmHorizontal,
		fontSize: 20,
		overflow: "hidden",
	})

	const emphasisTextStyles = css({
		color: colorBrandAlternative,
	})

	const handleRowPress = (id: string, entryId: string) => async () => {
		let medalValue = 0
		if (!routerState?.guestIntent) {
			const normalisedId = normalizeId(id)
			if (selected.has(normalisedId)) {
				setSelected(
					new Set(
						[...selected].filter((selectedId) => selectedId !== normalisedId),
					),
				)
			} else {
				setSelected(new Set([...selected, normalisedId]))
				medalValue = 1
			}
		} else {
			if (selected.has("yes")) {
				medalValue = 0
				setSelected(new Set())
			} else {
				medalValue = 1
				setSelected(new Set(["yes"]))
			}
		}

		await setPersonalisedFor({
			variables: {
				entryId,
				personalisedMedal: medalValue,
			},
		})
	}

	const cartCurrency = cart?.cart?.priceBreakdown?.subtotalPrice.currencyCode!
	const personalisedPriceDifference = {
		adult: pricing?.challengeEntryOptions?.edges
			?.find((pricingEdge) => pricingEdge?.node?.forChildren === false)
			?.node?.personalisedMedalPricingDifference?.find(
				(apiCost: { currencyCode: string; amount: Number }) =>
					apiCost.currencyCode === cartCurrency,
			)?.amount,
		child: pricing?.challengeEntryOptions?.edges
			?.find((pricingEdge) => pricingEdge?.node?.forChildren)
			?.node?.personalisedMedalPricingDifference?.find(
				(apiCost: { currencyCode: string; amount: Number }) =>
					apiCost.currencyCode === cartCurrency,
			)?.amount,
	}

	const handleNext = async () => {
		nav.push(
			`/join/${params.kidsOrGrownUp}/${params.month}/${params.year}/${params.challengeId}/${params.targetId}/extras/${params.cartId}`,
			routerState,
		)
	}

	if (pricingLoading || settingPersonalised || cartLoading) return <Loading />

	return (
		<Box column marginH={8} css={{ width: "100%" }}>
			<Text accent variant="h2" marginV={16}>
				Personalised Medals
			</Text>
			<View style={{ flexDirection: "row", paddingVertical: 16 }}>
				<Box grid row>
					<View style={{ width: "30%" }}>
						<MedalImage
							year={year}
							month={month}
							type={challengeTarget?.type?.name!}
							width="100%"
						/>
					</View>
					<View style={{ width: "70%", flex: 1, flexDirection: "column" }}>
						<Text css={{ marginTop: 0 }} marginV={12}>
							If you&apos;d prefer a medal with your exact distance engraved
							then this is for you!
						</Text>
						<Text> </Text>
						<Text css={{ marginTop: 0 }} marginV={12}>
							Clock up your miles and add progress as normal and we’ll take care
							of the rest.
						</Text>
					</View>
				</Box>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "flex-start",
					paddingVertical: sizeRhythmVertical,
				}}
			>
				<Text css={emphasisTextStyles}>
					Enable the toggle to add this to your challenge for just{" "}
					<CurrencyText
						variant="inline"
						css={emphasisTextStyles}
						amount={personalisedPriceDifference["adult"]}
						isoCode={cartCurrency}
					/>
					!
				</Text>
			</View>
			<Box grid row>
				{cart?.cart?.entryLineItems?.edges
					?.map((entry) => {
						const profile = user?.profiles?.edges?.find(
							(edge) => edge?.node?.id === entry?.node?.profile?.id,
						)
						return { ...profile, entryId: entry?.node?.id! }
					})
					?.filter((profile) => {
						if (routerState?.guestIntent) {
							return true
						}
						if (params.kidsOrGrownUp === "child") return profile?.node?.isChild
						else return true
					})
					?.map((profile) => {
						if (!routerState?.guestIntent && !profile?.node) return null

						const aviStyles = css({
							borderWidth: 2,
							borderStyle: "solid",
							borderColor: selected.has(
								routerState?.guestIntent
									? "yes"
									: profile?.node?.id
									? normalizeId(profile?.node?.id)
									: "none",
							)
								? colorBrandAlternative
								: "white",
						})

						const targetPriceDifferenceCategory =
							routerState?.guestIntent && routerState?.guestDOB
								? new Date(routerState?.guestDOB).valueOf() >
								  Date.now() - new Date(new Date().getFullYear() - 16).valueOf()
									? "adult"
									: "child"
								: profile?.node?.isChild
								? "child"
								: "adult"

						return (
							<Box
								grid
								row
								key={profile?.node?.id}
								css={rowStyles}
								onPress={handleRowPress(profile?.node?.id!, profile.entryId)}
								verticallyAlignContent="center"
								alignContent="center"
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "center",
										width: "70%",
									}}
								>
									<Box grid row nowrap css={{ maxWidth: "100%" }}>
										{!routerState?.guestIntent && (
											<Avatar
												imageCss={aviStyles}
												user={profile?.node as UserProfile}
											/>
										)}

										<Text css={textStyles}>
											{routerState?.guestIntent ? "You" : profile?.node?.name}
										</Text>
									</Box>
								</View>
								<View
									style={{
										width: "20%",
										flexDirection: "column",
										justifyContent: "center",
										alignContent: "center",
									}}
								>
									<Box
										grid
										row
										alignContent="center"
										verticallyAlignContent="center"
									>
										<Text variant="inline" css={priceStyles}>
											+
										</Text>
										<CurrencyText
											variant="inline"
											css={priceStyles}
											amount={
												personalisedPriceDifference[
													targetPriceDifferenceCategory
												]
											}
											isoCode={cartCurrency}
										/>
									</Box>
								</View>
								<View style={{ width: "10%", flexDirection: "column" }}>
									<BooleanSwitch
										checked={selected.has(
											routerState?.guestIntent
												? "yes"
												: normalizeId(profile?.node?.id!),
										)}
										onChange={handleRowPress(
											profile?.node?.id!,
											profile.entryId,
										)}
									/>
								</View>
							</Box>
						)
					})}
			</Box>
			{cartLoading ? (
				<Box row>
					<Loading size={25} />
				</Box>
			) : (
				<Box row>
					<Button
						fullWidth
						variant="secondary"
						onPress={handleNext}
						css={{ flex: 1 }}
					>
						Next
					</Button>
				</Box>
			)}
		</Box>
	)
}
