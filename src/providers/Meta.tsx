import Helmet from "react-helmet"

export function Meta() {
	return (
		<Helmet
			encodeSpecialCharacters={true}
			defaultTitle="Race At Your Pace | Running, Walking, Cycling &amp; Swimming Virtual Challenges"
		></Helmet>
	)
}
