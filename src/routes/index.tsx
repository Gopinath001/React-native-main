import { Redirect, Route, RouteComponentProps, Switch } from "react-router"
import loadable from "@loadable/component"
import { Loading } from "components/Loading"
import { FourOhFour } from "screens/404"
import { PageLayout } from "components/PageLayout"
import {
	Cart,
	ChallengeTarget,
	ChallengeType,
	UserProfile,
} from "@rap-api/core"
import { AuthPage } from "screens/Auth"
import { ComingSoonGroups } from "screens/ComingSoonGroups"
import { ComingSoonTracking } from "screens/ComingSoonTracking"
import { Terms } from "screens/Terms"
import { UserContext } from "providers/User"
import { useContext } from "react"
import { ReturnTo } from "components/returnTo"
import { CognitoContext } from "providers/Cognito"

const loadableOpts = {
	fallback: (
		<PageLayout>
			<Loading />
		</PageLayout>
	),
}


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
	// TODO implement guest terms acceptance properly
	const { user } = useContext(UserContext)

	if (user && !user?.countryIso) {
		if (props.path === "/register/complete-profile") return <Route {...props} />
		return <Redirect to="/register/complete-profile" />
	}

	if (user?.tosAccepted || !user) {
		if (props.path === "/terms") return <Redirect to="/" />
		return <Route {...props} />
	} else {
		if (props.path === "/terms") return <Route {...props} />
		return <Redirect to="/terms" />
	}
}

export default function Routes(): JSX.Element {
	const { authRedirectTo, clearForceTo } = useContext(CognitoContext)

	// Does auth want us to go somewhere?
	if (authRedirectTo) {
		clearForceTo()
		return <Redirect to={authRedirectTo} />
	}

	return (
		<Switch>
			<AuthRoute
				path="/"
				exact
				component={loadable(() => import("../screens/Home"), loadableOpts)}
			/>
			<AuthRoute
				path="/profile"
				exact
				component={loadable(
					() => import("../screens/UpdateProfile"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/profile/addresses"
				exact
				component={loadable(() => import("../screens/Addresses"), loadableOpts)}
			/>
			<AuthRoute
				path="/annual-passes/:selectedTab?"
				exact
				component={loadable(
					() => import("../screens/AnnualPasses"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/register/complete-profile"
				exact
				component={loadable(
					() => import("../screens/SetupProfile"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/switch-profile"
				exact
				component={loadable(
					() => import("../screens/ProfileSwitcher"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/complete-challenge/:entryId/completed"
				component={loadable(
					() => import("../screens/CompletedChallenge"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/complete-challenge/:entryId/closed"
				component={loadable(
					() => import("../screens/ClosedChallenge"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/complete-challenge/:entryId"
				component={loadable(
					() => import("../screens/CompleteChallenge"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/challenges/:selectedTab?/:selectedMonth?/:entryId?/:addViewProgress?"
				component={loadable(
					() => import("../screens/CurrentChallenges"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/edit-challenge/:entryId/updated/:attributeName"
				component={loadable(
					() => import("../screens/ChallengeDistanceUpdated"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/edit-challenge/:entryId/:attributeName?/:value?"
				component={loadable(
					() => import("../screens/EditChallenge"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/join/entry/:month?/:year?/:kidsOrGrownUp?"
				exact
				component={loadable(() => import("../screens/JoinEntry"), loadableOpts)}
			/>
			<AuthRoute
				path="/previous-challenges/:kidsOrGrownUp?"
				exact
				component={loadable(
					() => import("../screens/JoinLateEntry"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/buy-annual-pass"
				exact
				component={loadable(
					() => import("../screens/AddAnnualPass"),
					loadableOpts,
				)}
			/>
			<AuthRoute
				path="/join/:kidsOrGrownUp?/:month?/:year?/:challengeId?/:targetId?/:extras?/:cartId?/:confirm?/:confirmed?"
				component={loadable(
					() => import("../screens/ChallengesFlow"),
					loadableOpts,
				)}
			/>
			<AuthRoute path="/terms" exact component={Terms} />
			<AuthRoute path="/groups" exact component={ComingSoonGroups} />
			<AuthRoute path="/tracker" exact component={ComingSoonTracking} />

			<AuthRoute path="/auth" exact render={() => <AuthPage />} />
			<AuthRoute path="/returnTo" component={ReturnTo} />
			<AuthRoute path="*" component={FourOhFour} />
		</Switch>
	)
}
