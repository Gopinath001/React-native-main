import { REDIRECT_URI_BASE } from "consts"

export function goToShopify(
	checkoutUrl: string,
	_returnUri: string,
	enabled: boolean,
) {
	if (!enabled) return

	window.location.replace(
		checkoutUrl +
			`&step=contact_information&redirect_uri=${REDIRECT_URI_BASE}/returnTo`,
	)
}
