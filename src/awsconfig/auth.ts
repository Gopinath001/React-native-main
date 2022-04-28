import {
	AWS_REGION,
	COGNITO_USER_POOL_ID,
	COGNITO_USER_POOL_WEB_ID,
	REDIRECT_URI_BASE,
} from "consts"

const authconfig = {
	domain: (
		process.env.COGNITO_AUTH_BASE ??
		"raceatyourpace-staging.auth.eu-west-2.amazoncognito.com"
	).replace(/^https?:\/\//g, ""),
	scope: ["email", "profile", "openid"],
	region: AWS_REGION,
	userPoolId: COGNITO_USER_POOL_ID,
	userPoolWebClientId: COGNITO_USER_POOL_WEB_ID,
	mandatorySignIn: false,
	redirectSignIn: `${REDIRECT_URI_BASE}/returnTo`,
	redirectSignOut: REDIRECT_URI_BASE ?? "https://rapdev.ngrok.io",
	responseType: "code",
	cookieStorage: {
		domain: REDIRECT_URI_BASE.replace(/^https?:\/\//g, ""),
		path: "/",
		expires: 365,
		secure: true,
	},
}

export default authconfig
