import { DarkPageLayout } from "components/DarkPageLayout"
import { Text } from "components/Text"
import { Box } from "components/Box"
import { Loading } from "components/Loading"
import { MedalImage } from "components/MedalImage"
import { useAvailableEntryMonthsQuery } from "@rap-api/core"
import { Fragment, useContext } from "react"
import { ImageByName } from "components/ImageByName"
import { sizeRhythmHorizontal, sizeRhythmVertical } from "@rap-theme"
import {
	containerStyles,
	lightText,
	optionsWrapperStyles,
	optionBoxStyles,
	optionHeaderStyles,
	optionTextStyles,
	imageColumnStyles,
	textColumnStyles,
} from "../styles"
import { useHistory } from "react-router"
import { View } from "react-native"
import { UserContext } from "providers/User"

export function JoinType() {
	const { data, loading } = useAvailableEntryMonthsQuery()
	const nav = useHistory()
	const { user } = useContext(UserContext)

	if (loading) return <Loading />

	const months =
		data?.availableEntryMonths?.edges
			?.map((item) => {
				return item?.node
			})
			?.filter((item) => {
				return item?.default
			}) ?? []

	const today = new Date()
	const date = today.getDay() + 1
	let year = today.getFullYear()
	let month = today.getMonth() + 1

	// What year do we show in the annual pass row?
	const annualPassYear =
		month >= 10 ? today.getFullYear() + 1 : today.getFullYear()

	if (date > 15) {
		if (month + 1 > 11) {
			month = 0
			year = year += 1
		} else {
			month += 1
		}
	}

	return (
		<DarkPageLayout>
			<Box grid column css={containerStyles}>
				<Text variant="h1" css={lightText}>
					Join a challenge
				</Text>
				<Text css={lightText}>
					Get started on one of our monthly challenges now!
				</Text>
				<Box grid column css={optionsWrapperStyles}>
					{months.map((defaultMonth, i) => {
						if (!defaultMonth) {
							return null
						}

						return (
							<Fragment key={i}>
								<Box
									grid
									row
									css={optionBoxStyles}
									onPress={() => {
										nav.push(
											`/join/entry/${defaultMonth.month}/${defaultMonth.year}`,
										)
									}}
								>
									<Box grid css={imageColumnStyles}>
										<MedalImage
											year={defaultMonth.year}
											month={defaultMonth.month}
											type={"running"}
										/>
									</Box>
									<Box
										grid
										column
										small={7}
										medium={7}
										large={6}
										css={textColumnStyles}
									>
										<Text variant="h4" css={optionHeaderStyles}>
											{defaultMonth.monthName} challenges
										</Text>
										<Text css={optionTextStyles}>
											Join this month&apos;s challenge to earn your unique
											medal!
										</Text>
									</Box>
								</Box>

								<Box
									grid
									row
									css={optionBoxStyles}
									onPress={() => nav.push(`/previous-challenges`)}
								>
									<Box
										small={3}
										medium={3}
										large={3}
										alignContent="center"
										verticallyAlignContent="center"
										css={[
											imageColumnStyles,
											{
												flexDirection: "column",
												paddingLeft: sizeRhythmHorizontal,
												paddingRight: sizeRhythmHorizontal,
											},
										]}
									>
										<ImageByName name="lateEntry" />
									</Box>

									<Box
										grid
										column
										small={7}
										medium={7}
										large={6}
										css={textColumnStyles}
									>
										<View style={{ paddingVertical: sizeRhythmVertical }}>
											<Text
												variant="h4"
												css={[
													optionHeaderStyles,
													{
														paddingTop: 0,
														paddingBottom: 3,
													},
												]}
											>
												late entries
											</Text>
										</View>
										<View
											style={{
												flexDirection: "row",
												flex: 10,
												width: "100%",
												marginTop: -12,
											}}
										>
											<Text css={optionTextStyles}>
												Missed a month? No problem! Sign up for any of our last
												12 months to receive your medal.
											</Text>
										</View>
									</Box>
								</Box>

								<Box
									grid
									row
									css={optionBoxStyles}
									onPress={() => {
										if (!user)
											nav.push("/annual-pass-promo", { year: annualPassYear })
										else nav.push("/buy-annual-pass", { year: annualPassYear })
									}}
								>
									<Box
										column
										small={3}
										medium={3}
										large={3}
										alignContent="center"
										verticallyAlignContent="center"
										css={[
											imageColumnStyles,
											{
												flexDirection: "column",
												paddingLeft: sizeRhythmHorizontal,
												paddingRight: sizeRhythmHorizontal,
											},
										]}
									>
										<ImageByName
											name="annual-pass-ticket-pair"
											width="100%"
											height="100%"
										/>
									</Box>
									<Box
										grid
										column
										small={7}
										medium={7}
										large={6}
										css={textColumnStyles}
									>
										<Text variant="h4" css={optionHeaderStyles}>
											Annual pass {annualPassYear}
										</Text>
										<Text>
											Get 2 medals for free! If you already have 2022
											challenges, the price of your Annual Pass will be
											discounted at checkout.
										</Text>
									</Box>
								</Box>
							</Fragment>
						)
					})}
				</Box>
			</Box>
		</DarkPageLayout>
	)
}
