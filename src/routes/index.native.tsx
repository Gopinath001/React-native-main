import {
	Redirect,
	Route,
	RouteComponentProps,
	Switch,
	useHistory,
	useLocation,
} from "react-router-native"
import { FourOhFour } from "screens/404"
import {
	Cart,
	ChallengeTarget,
	ChallengeType,
	UserProfile,
} from "@rap-api/core"
import { AuthPage } from "screens/Auth"
import { setReturnTo } from "utils"
import { ComingSoonGroups } from "screens/ComingSoonGroups"
import { ComingSoonTracking } from "screens/ComingSoonTracking"
import { Terms } from "screens/Terms"
import { useContext, useEffect } from "react"

// Screens.
import HomeScreen from "screens/Home"
import SetupProfileScreen from "screens/SetupProfile"
import AddressesScreen from "screens/Addresses"
import AnnualPassesScreen from "screens/AnnualPasses"
import ProfileSwitcherScreen from "screens/ProfileSwitcher"
import CompletedChallengeScreen from "screens/CompletedChallenge"
import ClosedChallengeScreen from "screens/ClosedChallenge"
import CompleteChallengeScreen from "screens/CompleteChallenge"
import CurrentChallengesScreen from "screens/CurrentChallenges"
import ChallengeDistanceUpdatedScreen from "screens/ChallengeDistanceUpdated"
import EditChallengeScreen from "screens/EditChallenge"
import JoinEntryScreen from "screens/JoinEntry"
import JoinLateEntryScreen from "screens/JoinLateEntry"
import ChallengesFlowScreen from "screens/ChallengesFlow"
import UpdateProfile from "screens/UpdateProfile"
import { BackHandler } from "react-native"
import { ReturnTo } from "components/ReturnTo"
import { CognitoContext } from "providers/Cognito"
import AddAnnualPass from "screens/AddAnnualPass"
import { AddAnnualPassByRegion } from "screens/AddAnnualPassByRegion"
import AddAnnualPassConfirmed from "screens/AddAnnualPassConfirmed"
import { AnnualPassPromo } from "screens/AnnualPassPromo"


export type RouterState = {
	challengers?: UserProfile[]
	challengeType?: ChallengeType
	challengeTarget?: ChallengeTarget
	guestIntent?: boolean
	guestsAllowed?: boolean
	guestDOB?: string
	currency?: string
	cart?: Cart
}

const AuthRoute = (props: {
	path: string
	exact?: boolean
	component?:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>
	render?: (props: RouteComponentProps<any>) => React.ReactNode
}) => {
	const location = useLocation()
	const { token } = useContext(CognitoContext)

	// If we have a token, just render the route.
	if (token) return <Route {...props} />

	
	if (location.pathname !== "/auth") {
		setReturnTo(props.path)
		return <Redirect to="/auth" />
	}

	
	return <AuthPage />
}

export default function Routes(): JSX.Element {
	const { goBack } = useHistory()
	const { authRedirectTo, clearForceTo } = useContext(CognitoContext)

	// Does auth want us to go somewhere?
	if (authRedirectTo) {
		clearForceTo()
		return <Redirect to={authRedirectTo} />
	}

	useEffect(() => {
		const handler = () => {
			goBack()
			return true
		}
		BackHandler.addEventListener("hardwareBackPress", handler)

		return () => BackHandler.removeEventListener("hardwareBackPress", handler)
	}, [])

	return (
		<Switch>
			<AuthRoute path="/" exact component={HomeScreen} />
			<AuthRoute path="/profile" exact component={UpdateProfile} />
			<AuthRoute path="/profile/addresses" exact component={AddressesScreen} />
			<AuthRoute
				path="/annual-passes/:selectedTab?"
				exact
				component={AnnualPassesScreen}
			/>
			<AuthRoute
				path="/register/complete-profile"
				exact
				component={SetupProfileScreen}
			/>
			<AuthRoute
				path="/switch-profile"
				exact
				component={ProfileSwitcherScreen}
			/>
			<AuthRoute
				path="/complete-challenge/:entryId/completed"
				component={CompletedChallengeScreen}
			/>
			<AuthRoute
				path="/complete-challenge/:entryId/closed"
				component={ClosedChallengeScreen}
			/>
			<AuthRoute
				path="/complete-challenge/:entryId"
				component={CompleteChallengeScreen}
			/>
			<AuthRoute
				path="/challenges/:selectedTab?/:selectedMonth?/:entryId?/:addViewProgress?"
				component={CurrentChallengesScreen}
			/>
			<AuthRoute
				path="/edit-challenge/:entryId/updated/:attributeName"
				component={ChallengeDistanceUpdatedScreen}
			/>
			<AuthRoute
				path="/edit-challenge/:entryId/:attributeName?/:value?"
				component={EditChallengeScreen}
			/>
			<Route
				path="/join/entry/:month?/:year?/:kidsOrGrownUp?"
				exact
				component={JoinEntryScreen}
			/>
			<Route
				path="/previous-challenges/:kidsOrGrownUp?"
				exact
				component={JoinLateEntryScreen}
			/>
			<Route
				path="/join/:kidsOrGrownUp?/:month?/:year?/:challengeId?/:targetId?/:extras?/:cartId?/:confirm?/:confirmed?"
				component={ChallengesFlowScreen}
			/>
			<AuthRoute path="/buy-annual-pass" exact component={AddAnnualPass} />
			<Route path="/annual-pass-promo" exact component={AnnualPassPromo} />
			<AuthRoute
				path="/buy-annual-pass/:region"
				exact
				component={AddAnnualPassByRegion}
			/>
			<AuthRoute
				path="/buy-annual-pass/:region/confirmed"
				exact
				component={AddAnnualPassConfirmed}
			/>
			<Route path="/terms" exact component={Terms} />
			<Route path="/groups" exact component={ComingSoonGroups} />
			<AuthRoute path="/tracker" exact component={ComingSoonTracking} />

			<AuthRoute path="/auth" exact render={() => <AuthPage />} />
			<AuthRoute path="/returnTo" component={ReturnTo} />
			<AuthRoute path="*" component={FourOhFour} />
		</Switch>
	)
}
