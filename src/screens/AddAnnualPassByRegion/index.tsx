import { Avatar } from "components/Avatar"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { useContext, useEffect, useState } from "react"
import { useHistory, useLocation, useParams } from "react-router"
import { css } from "@emotion/react"
import {
	colorBrandAlternative,
	sizeRhythmHorizontal,
	sizeRhythmVertical,
} from "@rap-theme"
import { Button } from "components/Buttons"
import {
	Maybe,
	useAnnualPassesQuery,
	useAnnualPassPurchasablesQuery,
	useCreateAnnualPassCartMutation,
	useGetCurrenciesQuery,
	UserProfile,
	useSetUserCurrencyPrefsMutation,
} from "@rap-api/core"
import { AddIcon } from "icons/Add"
import { AddNewProfile } from "components/AddNewProfile"
import { View } from "react-native"
import {
	addProfileRowStyles,
	addProfileTextStyles,
	plusStyles,
} from "components/ChallengeFlow/ChallengeProfilesSelector/styles"
import { PageLayout } from "components/PageLayout"
import { Loading } from "components/Loading"
import { UserContext } from "providers/User"
import InAppBrowser from "react-native-inappbrowser-reborn"
import BackgroundTimer from "react-native-background-timer"
import { FloatingCard } from "components/FloatingCard"
import { Select } from "components/Form/Select"
import { SelectPropsOption } from "components/Form/Select/types"
import { verticalRhythmPadding } from "utils"

interface Purchasable {
	readonly purchaseableId: string
	readonly profile: {
		readonly id: string
		readonly initials?: Maybe<string>
		readonly name?: Maybe<string>
	}
}

const currencyPaddingStyles = css({
	minWidth: "100%",
	...verticalRhythmPadding,
})
export function AddAnnualPassByRegion() {
	const { user, refreshUser } = useContext(UserContext)
	const [annualPassesCount, setAnnualPassesCount] = useState(0)
	const { data: currencies, loading: currenciesLoading } =
		useGetCurrenciesQuery()
	const { refetch: getAnnualPasses } = useAnnualPassesQuery({
		skip: true,
	})
	const {
		data,
		loading,
		refetch: reloadAnnualPasses,
	} = useAnnualPassPurchasablesQuery()
	const [createAnnualPassCart, { loading: creatingCart }] =
		useCreateAnnualPassCartMutation()
	const { state: routerState } = useLocation<{ year: number }>()
	const [selected, setSelected] = useState<Set<String>>(new Set([]))
	const { region } = useParams<{ region: "uk" | "international" }>()
	const [showAddProfile, setShowAddProfile] = useState(false)
	const [availableProfiles, setAvailableProfiles] = useState<Purchasable[]>([])
	const [poll, setPoll] = useState(false)
	const [currencySelectorOpen, setCurrencySelectorOpen] = useState(
		!user?.currencyPreference,
	)
	const [setUserCurrency] = useSetUserCurrencyPrefsMutation()
	const [currency, setCurrency] = useState(user?.currencyPreference ?? "GBP")
	const nav = useHistory()

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
	const textStyles = css({
		textTransform: "uppercase",
		margin: "auto",
		marginLeft: sizeRhythmHorizontal,
		fontSize: 20,
		alignSelf: "center",
	})

	const handleRowPress = (id: string) => () => {
		if (selected.has(id)) {
			setSelected(
				new Set([...selected].filter((selectedId) => selectedId !== id)),
			)
		} else {
			setSelected(new Set([...selected, id]))
		}
	}

	// Get the initial count.
	useEffect(() => {
		;(async () => {
			const APs = await getAnnualPasses()

			setAnnualPassesCount(APs?.data?.annualPasses?.edges?.length ?? 0)
		})()
	}, [])

	useEffect(() => {
		// Don't poll if the user hasn't pressed continue
		if (!poll) return void 0

		BackgroundTimer.runBackgroundTimer(async function () {
			const nextCount = await getAnnualPasses()

			if (!nextCount?.data?.annualPasses?.edges?.length) return

			if (nextCount.data.annualPasses.edges.length > annualPassesCount) {
				BackgroundTimer.stopBackgroundTimer()
				await refreshUser()
				nav.push(nav.location.pathname + "/confirmed")
				InAppBrowser.close()
			}
		}, 3000)

		return () => {
			BackgroundTimer.stopBackgroundTimer()
		}
	}, [poll])

	const handleNext = async () => {
		if (!user?.id) {
			return
		}

		if (selected.size === 0) {
			alert(
				"Please select at least one profile to take part in this challenge.",
			)
			return
		}

		const { data: createdCart } = await createAnnualPassCart({
			variables: {
				input: {
					user: user!.id,
					purchasablePriceIds: Array.from(selected),
					presentmentCurrencyCode: currency,
				},
			},
		})

		setPoll(true)
		await InAppBrowser.isAvailable()
		const { type } = await InAppBrowser.open(
			createdCart?.createAnnualPassCart?.annualPassCart?.checkoutUrl! +
				`&step=contact_information`,
			{
				showTitle: false,
				enableUrlBarHiding: true,
				enableDefaultShare: false,
				ephemeralWebSession: false,
				modalPresentationStyle: "overFullScreen",
			},
		)

		if (type !== "cancel" && type !== "dismiss")
			nav.push(`${nav.location.pathname}/confirmed`)
	}

	useEffect(() => {
		if (
			!data?.annualPassPurchasables?.edges ||
			!Array.isArray(data?.annualPassPurchasables?.edges)
		) {
			setAvailableProfiles([])
			return
		}
		const nextAvailableUsers = data.annualPassPurchasables.edges
			.filter((passEdge) => {
				if (!passEdge?.node?.prices || !Array.isArray(passEdge?.node?.prices)) {
					return false
				}

				const availableRegion = passEdge.node.prices.find(
					(priceEdge) => priceEdge?.region === region,
				)

				return !!availableRegion
			})
			.map(
				(passEdge): Purchasable => ({
					profile: passEdge!.node!.profile!,
					purchaseableId: passEdge!.node!.prices!.find(
						(priceEdge: { region?: "uk" | "international" }) =>
							priceEdge?.region === region,
					)!.id,
				}),
			)

		setAvailableProfiles(nextAvailableUsers)
	}, [data?.annualPassPurchasables?.edges])

	if (loading)
		return (
			<PageLayout>
				<Loading />
			</PageLayout>
		)

	return (
		<PageLayout>
			<Box
				column
				style={{
					width: "100%",
					paddingHorizontal: sizeRhythmHorizontal,
					paddingVertical: sizeRhythmVertical,
				}}
			>
				<Box
					row
					css={css({
						flexGrow: 0,
						marginBottom: sizeRhythmVertical,
					})}
				>
					<Text
						accent
						variant="h2"
						css={css({ marginBottom: sizeRhythmVertical })}
					>
						Buy Annual pass {routerState.year}
					</Text>
					<Text>Tap or click the names of who this Annual Pass is for.</Text>
					<Text
						css={{
							color: colorBrandAlternative,
							marginVertical: sizeRhythmVertical,
						}}
					>
						If you can&apos;t see your profile, you may already have an Annual
						Pass! Check the Your Annual Passes page in the menu.
					</Text>
				</Box>

				<Box
					row
					css={css({
						flexGrow: 0,
						marginBottom: sizeRhythmVertical,
					})}
				>
					<Box column>
						{availableProfiles?.map((profile) => {
							if (!profile) return null

							const aviStyles = css({
								borderWidth: 2,
								borderStyle: "solid",
								borderColor: selected.has(profile.purchaseableId)
									? colorBrandAlternative
									: "white",
							})

							return (
								<Box
									row
									css={css({
										marginBottom: sizeRhythmVertical,
									})}
									key={profile.profile.id}
									onPress={handleRowPress(profile.purchaseableId)}
								>
									<Box row>
										<Avatar
											css={aviStyles}
											user={profile.profile as UserProfile}
										/>
										<Text css={textStyles}>{profile.profile.name}</Text>
									</Box>
								</Box>
							)
						})}

						<Box
							row
							onPress={() => setShowAddProfile(true)}
							css={addProfileRowStyles}
						>
							<Box grid row>
								<Box column css={plusStyles}>
									<View
										style={{
											justifyContent: "center",
											alignItems: "center",
											flex: 1,
											width: "100%",
										}}
									>
										<AddIcon fill="#FFFFFF" />
									</View>
								</Box>
								<Text variant="inline" css={[textStyles, addProfileTextStyles]}>
									Add profile
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box row>
					<Button
						fullWidth
						disabled={selected.size < 1 || !!creatingCart}
						variant="secondary"
						onPress={handleNext}
						css={{ width: "100%", minWidth: "100%" }}
					>
						Purchase
					</Button>
				</Box>
				<AddNewProfile
					showAddProfile={showAddProfile}
					onClose={() => {
						reloadAnnualPasses()
						setShowAddProfile(false)
					}}
				/>
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
		</PageLayout>
	)
}
