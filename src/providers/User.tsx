import { useCurrentUserQuery, User, UserProfile } from "@rap-api/core"
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react"
import { Loading } from "components/Loading"
import { CognitoContext } from "./Cognito"

export interface UserContextShape {
	refreshUser: () => void
	selectProfile: Dispatch<SetStateAction<UserProfile | undefined>>
	readonly selectedProfile?: UserProfile | null
	readonly user?: User | null
}

export const UserContext = createContext<UserContextShape>({
	selectedProfile: null,
	selectProfile: () => void 0,
	user: null,
	refreshUser: () => void 0,
})

export const UserContextProvider = ({
	children,
}: PropsWithChildren<unknown>): JSX.Element => {
	// Don't fetch the user yet, we check for a token.
	const { loading, refetch } = useCurrentUserQuery({
		skip: true,
	})
	const { token, setToken } = useContext(CognitoContext)
	const [user, setUser] = useState<UserContextShape["user"] | undefined>()
	const [selectedProfile, setSelectedProfile] = useState<
		UserProfile | undefined
	>()

	const getAndStoreUser = async () => {
		const { data } = await refetch()
		if (
			data.users?.edges?.length &&
			data.users.edges[0] &&
			data.users.edges[0].node &&
			data.users.edges[0].node.profiles?.edges &&
			data.users.edges[0].node.profiles?.edges[0]?.node
		) {
			setUser(data.users.edges[0].node as User)
			setSelectedProfile(
				data.users.edges[0].node.profiles?.edges[0].node as UserProfile,
			)
		}
	}

	const refreshUser = async () => {
		if (token) await getAndStoreUser()
		else {
			setUser(undefined)
			setSelectedProfile(undefined)
			setToken && setToken(undefined)
		}
	}
	useEffect(() => {
		;(async () => {
			await refreshUser()
		})()
	}, [token])

	const content = loading ? <Loading /> : children

	return (
		<UserContext.Provider
			value={{
				user: user as unknown as UserContextShape["user"],
				selectProfile: setSelectedProfile,
				selectedProfile,
				refreshUser,
			}}
		>
			{content}
		</UserContext.Provider>
	)
}
