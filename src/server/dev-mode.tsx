import webpack from "webpack"
import serverConfig from "../../webpack/client"
import webpackHotMiddleware from "webpack-hot-middleware"
import webpackDevMiddleware from "webpack-dev-middleware"
import { Application } from "express"


export default function devTools(app: Application) {
	const compiler = webpack(serverConfig, () => undefined)
	app.use(
		webpackDevMiddleware(compiler as any, {
			publicPath: serverConfig?.output?.publicPath as string,
		}),
	)
	app.use(webpackHotMiddleware(compiler as any))
}
