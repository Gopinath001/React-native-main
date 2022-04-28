import { Box } from "components/Box"
import { Text } from "components/Text"
import { Loading } from "components/Loading"
import { PageLayout } from "components/PageLayout"
import { usePagesBySlugQuery } from "@rap-api/cms"
import { Button } from "components/Buttons"
import { useUpdateUserRealMutation } from "@rap-api/core"
import { useContext } from "react"
import { UserContext } from "providers/User"
import { useHistory } from "react-router"
import Markdown from "react-native-markdown-renderer"

export function Terms() {
	const nav = useHistory()
	const { data, loading } = usePagesBySlugQuery({
		variables: {
			slug: "terms",
		},
		context: {
			clientName: "CMS",
		},
	})

	const { user, refreshUser } = useContext(UserContext)

	// // Why UpdateUserReal? Because UpdateUser actually updates the user profile and I don't want to refactor
	const [updateUser] = useUpdateUserRealMutation()

	if (loading) return <Loading size={30} />

	return (
		<PageLayout>
			<Box grid column verticallyAlignContent="center">
				{data && data.pages && data.pages[0] ? (
					<>
						<Text accent variant="h2">
							{data.pages[0].Title}
						</Text>
						<Box grid row>
							<Box grid column small={10} medium={10} large={10}>
								<Markdown>{String(data.pages[0].Content)}</Markdown>
							</Box>
						</Box>
						<Box grid row>
							<Box grid column small={10} medium={10} large={10}>
								<Button
									variant={"secondary"}
									onPress={async () => {
										if (user) {
											const today = new Date()

											const month = String(today.getMonth())
											const paddedMonth =
												month.length == 1 ? "0" + month : month

											const day = String(today.getDay())
											const paddedDay = day.length == 1 ? "0" + day : day
											await updateUser({
												variables: {
													input: {
														id: user.id,
														tosAccepted:
															today.getFullYear() +
															"-" +
															paddedMonth +
															"-" +
															paddedDay,
													},
												},
											})
											refreshUser && (await refreshUser())
											nav.push("/register/complete-profile")
										}
									}}
								>
									I accept these terms and conditions
								</Button>
							</Box>
						</Box>
					</>
				) : null}
			</Box>
		</PageLayout>
	)
}
