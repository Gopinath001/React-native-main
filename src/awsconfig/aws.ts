import { REDIRECT_URI_BASE } from "consts"
import authconfig from "./auth"

const awsconfig = {
	Auth: authconfig,
	API: {
		endpoints: [
			{
				name: "rap",
				endpoint: REDIRECT_URI_BASE,
			},
		],
	},
}

export default awsconfig
