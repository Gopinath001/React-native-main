import { CognitoUserSession } from "amazon-cognito-identity-js"
import { Auth } from "aws-amplify"

export async function refreshUserToken(
	onToken: (token: string) => Promise<void>,
): Promise<void> {
	try {
		const session = await Auth.currentSession()
		const cognitoUser = await Auth.currentAuthenticatedUser()
		if (cognitoUser)
			cognitoUser.refreshSession(
				session.getRefreshToken(),
				async (err?: Error, session?: CognitoUserSession) => {
					if (err) throw err
					if (session) {
						const jwt = session.getAccessToken().getJwtToken()
						if (jwt) {
							onToken(jwt)
						}
					}
				},
			)
	} catch {}
}
