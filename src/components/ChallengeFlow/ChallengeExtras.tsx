import { Button } from "components/Buttons"
import { Box } from "components/Box"
import {
	Cart,
	Product,
	useCreateCartEntryLineItemMutation,
	useCreateCartMutation,
	useCreateCartProductLineItemMutation,
	useGetCurrenciesQuery,
	useGetProductsQuery,
	useSetUserCurrencyPrefsMutation,
} from "@rap-api/core"
import { Redirect, useHistory, useLocation, useParams } from "react-router"
import { Loading } from "components/Loading"
import { Text } from "components/Text"
import { useEffect, useState } from "react"
import { ChallengeRouteParams } from "./types"
import { denormalizeId, normalizeId, verticalRhythmPadding } from "utils"
import { useContext } from "react"
import { UserContext } from "providers/User"
import { RouterState } from "../../routes"
import { sizeRhythmVertical } from "@rap-theme"
import { FloatingCard } from "components/FloatingCard"
import { Select } from "../Form/Select"
import { SelectPropsOption } from "../Form/Select/types"
import ProductPage from "../../screens/Product"
import { css } from "@emotion/react"
import { ProductCollection } from "../ProductCollection"
import { Auth } from "aws-amplify"
import { useLocalStorage } from "hooks/useLocalStorage"
import { CognitoContext } from "providers/Cognito"

type UserProductAndQuantity = {
	variantId: string
	quantity: number
}

enum ValidCollectionNames {
	MonthlyTops = "Monthly Tops",
	Clearance = "Clearance",
	ClubTops = "Club Tops",
}

const COLLECTION_ORDER = new Set([
	ValidCollectionNames.MonthlyTops,
	ValidCollectionNames.Clearance,
	ValidCollectionNames.ClubTops,
])

const currencyPaddingStyles = css({
	minWidth: "100%",
	...verticalRhythmPadding,
})

export function ChallengeExtras() {
	const { clearStorage, setItem } = useLocalStorage()
	const { setToken } = useContext(CognitoContext)
	const { data: currencies, loading: currenciesLoading } =
		useGetCurrenciesQuery()
	const [setUserCurrency] = useSetUserCurrencyPrefsMutation()
	const routerState = useLocation<RouterState>().state ?? {}
	const { selectedProfile, user } = useContext(UserContext)
	const [currencySelectorOpen, setCurrencySelectorOpen] = useState(
		!user?.currencyPreference,
	)
	const [cartKey, setCartKey] = useState(
		routerState.challengers ? routerState.challengers[0]?.id : "guest",
	)
	const [createCart, { loading: creatingCart }] = useCreateCartMutation()
	const [createEntryLineItem, { loading: creatingEntryLineItem }] =
		useCreateCartEntryLineItemMutation()
	const [createProductLineItem, { loading: creatingProductLineItem }] =
		useCreateCartProductLineItemMutation()
	const nav = useHistory()
	const [currency, setCurrency] = useState(user?.currencyPreference ?? "GBP")
	const [usersProducts, setUsersProducts] = useState<
		Record<string, UserProductAndQuantity[]>
	>({})
	const params = useParams<ChallengeRouteParams>()
	const [productCollections, setProductCollections] = useState<
		Record<string, Product[]>
	>({})
	const [productPreview, setProductPreview] = useState<Product | null>(null)

	const paddedMonths =
		params.month?.length == 1 ? "0" + params.month : params.month
	const filter = params.year + " " + paddedMonths
	const { data: products, loading: productsLoading } = useGetProductsQuery({
		variables: {
			monthFilter: filter,
		},
	})
	const handleSaveCurrency = async () => {
		if (user?.id) {
			await setUserCurrency({
				variables: {
					user: user.id,
					currency: currency ?? "GBP",
				},
			})
		}
		setCurrencySelectorOpen(false)
	}

	useEffect(() => {
		setCartKey(
			routerState.challengers?.length
				? routerState.challengers[0]?.id
				: "guest",
		)
	}, [routerState.challengers ? routerState.challengers[0]?.id : "guest"])

	useEffect(() => {
		const nextUsersProducts = { ...usersProducts }
		if (
			Array.isArray(routerState.challengers) &&
			routerState.challengers.length > 0
		) {
			for (const challenger of routerState.challengers) {
				if (!Object.hasOwnProperty.call(nextUsersProducts, challenger.id))
					nextUsersProducts[challenger.id] = []
			}
		} else {
			nextUsersProducts.guest = []
		}

		setUsersProducts(nextUsersProducts)
	}, [routerState.challengers])

	
	useEffect(() => {
		const nextProductCollections: Record<string, Product[]> = {}
		if (products?.products?.edges) {
			for (const product of products?.products?.edges) {
				if (product?.node) {
					if (product.node.collections && product.node.collections.length > 0) {
						for (const productCollection of product.node.collections) {
							if (
								!Array.isArray(nextProductCollections[productCollection.title])
							)
								nextProductCollections[productCollection.title] = []

							nextProductCollections[productCollection.title].push(product.node)
						}
					} else {
						const nextProduct = { ...product.node }
						// Push a faux collection into this product.
						nextProduct.collections = [
							{
								title: "",
								descriptionHtml: "",
							},
						]

						if (!Array.isArray(nextProductCollections["Other great products"]))
							nextProductCollections["Other great products"] = [nextProduct]
						else
							nextProductCollections["Other great products"].push(nextProduct)
					}
				}
			}
			setProductCollections(nextProductCollections)
		}
	}, [products?.products])
	useEffect(() => {
		const nextUsersProducts: Record<string, UserProductAndQuantity[]> = {
			[cartKey]: [],
		}
		const products = routerState.cart?.productLineItems?.edges

		if (!products) return

		products.forEach((productEdge) => {
			nextUsersProducts[cartKey].push({
				variantId: productEdge?.node?.variantId!,
				quantity: productEdge?.node?.quantity!,
			})
		})

		setUsersProducts(nextUsersProducts)
	}, [routerState.cart?.entryLineItems?.edges])

	if (!selectedProfile && !routerState.guestIntent) {
		return (
			<Redirect
				to={{
					pathname: "/auth?returnTo=" + escape(nav.location.pathname),
					state: { guestIntent: true, returnTo: nav.location.pathname },
				}}
			/>
		)
	}

	
	const handleCartItems = (productId: string, quantity: number): void => {
		const nextUsersProducts = { ...usersProducts }
		if (cartKey) {
			const targetIndex =
				cartKey && nextUsersProducts[cartKey]
					? nextUsersProducts[cartKey].findIndex(
							(variant) => variant.variantId === productId,
					  )
					: -1

			if (targetIndex < 0) {
				if (!Array.isArray(nextUsersProducts[cartKey]))
					nextUsersProducts[cartKey] = []
				nextUsersProducts[cartKey ?? "guest"].push({
					variantId: productId,
					quantity: 1,
				})
			} else {
				if (quantity === 0) {
					nextUsersProducts[cartKey].splice(targetIndex, 1)
				} else {
					nextUsersProducts[cartKey][targetIndex].quantity = quantity
				}
			}
		}
		setUsersProducts(nextUsersProducts)
	}
	const handleCartCreate = async (noRetry?: boolean): Promise<void> => {
		let targetCart = routerState.cart
		if (!routerState.cart)
			try {
				targetCart = await createCart({
					variables: {
						input: {
							presentmentCurrencyCode: currency,
						},
					},
				}).then((cartData) => cartData.data?.createCart?.cart! as Cart)
			} catch (error) {
				if (
					(error as Error).message ===
						"Response not successful: Received status code 401" &&
					!routerState.guestIntent
				) {
					await Auth.federatedSignIn()
					if (!noRetry) {
						await handleCartCreate(true)
						return
					}
				} else {
					await clearStorage()
					
					if (typeof setToken === "function") setToken(null)
				}
			}

		if (routerState.guestIntent && targetCart?.id) {
			const { data } = await createEntryLineItem({
				variables: {
					input: {
						cart: targetCart!.id,
						challengeTarget: denormalizeId(
							params.targetId as string,
							"challenge_targets",
						),
						month: parseInt(params.month!, 10),
						year: parseInt(params.year!, 10),
						withMedal: 1,
						personalisedMedal: 0,
						personalisedMedalTargetValue: 0,
					},
				},
			})

			setItem(
				"entryLineItem",
				data?.createCartEntryLineItem?.cartEntryLineItem?.id!,
			)

			await Promise.all(
				usersProducts[cartKey]?.map((variant) => {
					return createProductLineItem({
						variables: {
							input: {
								cart: targetCart?.id as string,
								variantId: variant.variantId,
								quantity: variant.quantity,
							},
						},
					})
				}),
			)
		} else {
			await Promise.all(
				routerState.challengers!.map(
					async (challenger) => {
						if (!targetCart?.entryLineItems?.edges?.length) {
							const { data } = await createEntryLineItem({
								variables: {
									input: {
										profile: challenger.id,
										cart: targetCart?.id as string,
										challengeTarget: denormalizeId(
											params.targetId as string,
											"challenge_targets",
										),
										month: parseInt(params.month!, 10),
										year: parseInt(params.year!, 10),
										withMedal: 1,
										personalisedMedal: 0,
										personalisedMedalTargetValue: 0,
									},
								},
							})

							setItem(
								"entryLineItem",
								data?.createCartEntryLineItem?.cartEntryLineItem?.id!,
							)
						}
					},

					// Previously this was run profile, I think? Incorrect, I think.
					await Promise.all(
						usersProducts[cartKey]
							.filter((variant) => !!variant?.quantity)
							.map((variant) => {
								return createProductLineItem({
									variables: {
										input: {
											cart: targetCart?.id as string,
											variantId: variant.variantId,
											quantity: variant.quantity,
										},
									},
								})
							}),
					),
				),
			)
		}

		nav.push(
			`/join/${params.kidsOrGrownUp}/${params.month}/${params.year}/${
				params.challengeId
			}/${params.targetId}/personalised-medals/${normalizeId(
				targetCart?.id as string,
			)}`,
			{ ...routerState, currency },
		)
	}

	
	if (
		!routerState.guestIntent &&
		(!routerState || !routerState.challengers?.length)
	) {
		nav.push(nav.location.pathname.replace("/extras", ""), {
			...routerState,
		})
		return null
	}

	if (productsLoading) return <Loading />
	if (creatingCart || creatingEntryLineItem || creatingProductLineItem)
		return <Loading />

	return (
		<Box
			grid
			column
			css={{ paddingBottom: sizeRhythmVertical * 2, width: "100%" }}
		>
			<Box row>
				<Text variant="h2" accent>
					Challenge Extras
				</Text>
			</Box>
			<Box row css={{ paddingVertical: sizeRhythmVertical }}>
				<Text>Add rewards to make your hard work feel even better!</Text>
			</Box>

			{Array.from(COLLECTION_ORDER)
				.filter(
					(key) =>
						Array.isArray(productCollections[key]) &&
						productCollections[key].length > 0,
				)
				.map((key) => {
					return (
						<ProductCollection
							key={key}
							title={key}
							description={
								productCollections[key][0].collections[0].descriptionHtml
							}
							setProductPreview={setProductPreview}
							currency={currency ?? "GBP"}
							basket={cartKey ? usersProducts[cartKey] : []}
							products={
								key === ValidCollectionNames.ClubTops
									? productCollections[key].filter((product) =>
											new Set(product.tags).has(
												`Only ${routerState.challengeType?.name}`,
											),
									  )
									: productCollections[key]
							}
							handleCartItems={handleCartItems}
						/>
					)
				})}
			<Box row>
				<Button
					variant="secondary"
					fullWidth
					onPress={() => handleCartCreate()}
					disabled={creatingEntryLineItem || creatingProductLineItem}
				>
					Next
				</Button>
			</Box>
			<FloatingCard open={currencySelectorOpen} openHeight="50%">
				<Box grid column css={currencyPaddingStyles}>
					<Text variant="h2">Confirm your currency</Text>
					{currenciesLoading ? (
						<Loading />
					) : (
						<Box css={{ paddingTop: 8, width: "100%" }}>
							<Select
								onChange={(value) => {
									setCurrency(value)
								}}
								value={currency ?? "GBP"}
								options={
									(currencies?.currencies?.edges?.map((edge) => ({
										label: edge?.node?.iso,
										value: edge?.node?.iso,
									})) as SelectPropsOption[]) ?? []
								}
							/>
							<Button
								fullWidth
								variant="secondary"
								onPress={handleSaveCurrency}
							>
								Confirm
							</Button>
						</Box>
					)}
				</Box>
			</FloatingCard>
			<FloatingCard
				open={productPreview !== null}
				openHeight="90%"
				onClose={() => setProductPreview(null)}
			>
				{productPreview && <ProductPage product={productPreview} />}
			</FloatingCard>
		</Box>
	)
}
