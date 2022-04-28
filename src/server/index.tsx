import express from "express"
import { GraphQLContext } from "providers/Apollo"
import { StaticRouter } from "react-router-dom"
import Routes from "../routes"
import createEmotionServer from "@emotion/server/create-instance"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import Helmet from "react-helmet"
import { getDataFromTree } from "@apollo/client/react/ssr"
import cookieParser from "cookie-parser"
import { CognitoContextProvider } from "providers/Cognito"
import BugSnagProvider from "providers/BugSnag"
import { Meta } from "providers/Meta"
import { UserContextProvider } from "providers/User"

const { NODE_ENV, PORT, COOKIE_SIGNING_KEY, WEB_ROOT_URI, APP_PROTOCOL } =
	process.env
const dev = NODE_ENV !== "production"
const app = express()
const key = "styles-cache"
const cache = createCache({ key })

if (dev) {
	require("./dev-mode").default(app)
}

app.use(cookieParser(COOKIE_SIGNING_KEY ?? "MY COOKIE SECRET"))
app.use(express.static("dist"))
app.use(express.static("static"))

app.get("/user/tokens/:redirectTo", (request, reply) => {
	switch (request.params.redirectTo) {
		case "web":
		default:
			reply.redirect(`${WEB_ROOT_URI}/`)
			break
		case "mobile":
			reply.redirect(`${APP_PROTOCOL}/dashboard`)
	}
})

app.get("/*", async (req, res) => {
	const context = {}

	const { extractCriticalToChunks, constructStyleTagsFromChunks } =
		createEmotionServer(cache)

	let element = () => (
		<BugSnagProvider>
			<CacheProvider value={cache}>
				<CognitoContextProvider>
					<GraphQLContext
						ssrMode={true}
						headers={{
							Authorization: req.header("Authorization"),
						}}
					>
						<UserContextProvider>
							<Meta />
							<StaticRouter location={req.url} context={context}>
								<Routes />
							</StaticRouter>
						</UserContextProvider>
					</GraphQLContext>
				</CognitoContextProvider>
			</CacheProvider>
		</BugSnagProvider>
	)

	// This runs all the queries this tree finds.
	const content = await getDataFromTree(element())

	// This extracts all the css.
	const { html, styles } = extractCriticalToChunks(content)

	// This gets us the meta information we set during the rendering of this tree.
	const meta = Helmet.renderStatic()

	res.status(200).header("Content-Type", "text/html").send(`<!DOCTYPE html>
<html lang="en" ${meta.htmlAttributes.toString()}>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
		${meta.title.toString()}
		${meta.meta.toString()}
		${meta.link.toString()}
		${meta.script.toString()}
		<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link
			href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&family=Ropa+Sans&family=Assistant:wght@700&display=swap" rel="stylesheet">
			<style>
				html {
					box-sizing: border-box;
				}
				body {
					margin: 0;
				}
				*, *:before, *:after {
					box-sizing: inherit;
				}
			</style>
    ${constructStyleTagsFromChunks({ html, styles })}
</head>
<body ${meta.bodyAttributes.toString()}>
    <div id="app">${html}</div>

		<script src="/runtime.js"></script>
    <script src="/main.js"></script>
		<script src="/vendor.js" async></script>
		<script src="/aws.js" async></script>
</body>
</html>`)
})

app.listen(PORT ?? 3001, () =>
	console.log(`Server listening on port ${PORT ?? 3001}!`),
)
