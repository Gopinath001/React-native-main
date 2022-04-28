import { config } from "dotenv"
import { resolve } from "path"

const envPathRaw = process.env.ENV_PATH ? process.env.ENV_PATH : "../.env"
const envPath =
	process.env.NODE_ENV === "production"
		? envPathRaw + ".production"
		: envPathRaw

config({
	path: resolve(__dirname, envPath),
})
