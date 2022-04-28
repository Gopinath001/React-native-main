export type CognitoErrorResponseType =
	| "invalid_request" // Something bad happened, reauth.
	| "invalid_client" // We done goofed (devs) fix needed.
	| "invalid_grant" // Refresh token has been revoked OR Authorization code has been consumed already or does not exist.
	| "unauthorized_client"
	| "unsupported_grant_type" // We goofed again.
