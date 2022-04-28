Error.stackTraceLimit = Infinity
import { resolve } from "path"
import {
	Configuration,
	EnvironmentPlugin,
	HotModuleReplacementPlugin,
} from "webpack"
import { createEmotionPlugin } from "emotion-ts-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import LoadablePlugin from "@loadable/webpack-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { createLoadableComponentsTransformer } from "typescript-loadable-components-plugin"
import { Program } from "typescript"

const { NODE_ENV, ANALYSE_BUNDLE } = process.env
const dev = NODE_ENV !== "production"
const splittingPlugin = new LoadablePlugin({}) as any
const envPlugin = new EnvironmentPlugin([
	"CORE_API_ROOT",
	"COGNITO_AUTH_BASE",
	"WEB_ROOT_URI",
	"APP_PROTOCOL",
])

const packageAliases = {
	"react-native": "react-native-web",
	"react-native-svg": "react-native-svg-web",
}

const entry = dev
	? [
			"react-hot-loader/patch",
			"webpack-hot-middleware/client?path=/__webpack_hmr&reload=true",
			"./src/server/index.tsx",
	  ]
	: ["./src/server/index.tsx"]

const plugins = dev
	? [splittingPlugin, envPlugin, new HotModuleReplacementPlugin()]
	: [splittingPlugin, envPlugin]

if (dev && ANALYSE_BUNDLE) {
	plugins.push(
		new BundleAnalyzerPlugin({
			generateStatsFile: true,
		}),
	)
}

const alias = dev
	? {
			...packageAliases,
			"react-dom": "@hot-loader/react-dom",
	  }
	: packageAliases

const clientConfig: Configuration = {
	entry,
	watch: dev,
	mode: dev ? "development" : "production",
	devtool: dev ? "inline-cheap-source-map" : "hidden-source-map",
	plugins,
	context: resolve(__dirname, "../"),
	output: {
		path: resolve("./dist"),
		filename: "[name].js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.m?js/,
				exclude: /node_modules/,
				resolve: {
					fullySpecified: false,
					fallback: {
						crypto: false,
					},
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					configFile: resolve("./src/server/tsconfig.json"),
					projectReferences: true,
					transpileOnly: true,
					getCustomTransformers: (program: Program) => ({
						before: [
							createLoadableComponentsTransformer(program as any, {}),
							createEmotionPlugin({
								sourcemap: true,
								autoLabel: true,
								labelFormat: "[local]",
								autoInject: true,
								jsxImportSource: "@emotion/react",
							}),
						],
					}),
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, "css-loader?minimize"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias,
		fallback: {
			crypto: false,
		},
	},
}

export default clientConfig
