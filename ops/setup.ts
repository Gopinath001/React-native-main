// This file is automatically run by a postinstall hook.
// It sets up the environment and checks for connectivity.
import { access, copyFile } from "fs/promises"
import { constants } from "fs"
import { resolve, join } from "path"
import { config } from "dotenv-safe"
import { get } from "https"

const setup = async () => {
	const envPath = join(__dirname, "..", ".env")
	const envStatus = await access(resolve(envPath), constants.O_RDWR)
		.then(() => 1)
		.catch(() => 0)

	if (!envStatus) {
		try {
			await copyFile(envPath + ".example", envPath)
			console.info("Just wrote %s for you.", envPath)
		} catch {
			throw new Error(
				`Want RW permissions to create environment variables file. You can also manually copy ${envPath}.example to ${envPath}. This process will now exit`,
			)
		}
	}

	// We can now "source" our env file and check for connectivity to the api.
	config({
		example: envPath + ".example",
		path: envPath,
	})

	const { CORE_API_ROOT } = process.env

	const apiReachable = await new Promise((resolve) =>
		get(CORE_API_ROOT + "/graphql", (res) => {
			if (!res || !res.statusCode || res?.statusCode >= 400) resolve(false)
			else resolve(true)
		}),
	)

	if (!apiReachable)
		console.warn(
			`\u001b[33mThe configured API '${CORE_API_ROOT}' isn't reachable right now or it errored when I ran a request to it. I'm going to carry on as if it was but this likely will result in error. Please check the API service is running.\u001b[0m`,
		)
}

setup()
