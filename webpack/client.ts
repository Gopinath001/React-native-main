import { resolve } from "path"
import { Configuration, HotModuleReplacementPlugin } from "webpack"
import { createEmotionPlugin } from "emotion-ts-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import LoadablePlugin from "@loadable/webpack-plugin"
import { createLoadableComponentsTransformer } from "typescript-loadable-components-plugin"
import { Program } from "typescript"
import Dotenv from "dotenv-webpack"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const { NODE_ENV, ANALYSE_BUNDLE } = process.env
const dev = NODE_ENV !== "production"
const splittingPlugin = new LoadablePlugin({
	filename: "stats.json",
	writeToDisk: true,
}) as any
const envPlugin = new Dotenv({
	path: resolve(__dirname, "../.env"),
	systemvars: true,
})

const packageAliases = {
	"react-native": "react-native-web",
	"react-native-svg": "react-native-svg-web",
}

const entry = dev
	? [
			"react-hot-loader/patch",
			"webpack-hot-middleware/client?path=/__webpack_hmr&reload=true",
			"./src/web/index.tsx",
	  ]
	: ["./src/web/index.tsx"]

const plugins = dev
	? [splittingPlugin, envPlugin, new HotModuleReplacementPlugin()]
	: [splittingPlugin, envPlugin]

if (dev && ANALYSE_BUNDLE) {
	const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
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
	devtool: dev ? "inline-cheap-source-map" : undefined,
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
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.m?[jt]sx?/,
				resolve: {
					fullySpecified: false,
					fallback: {
						crypto: false,
						buffer: false,
						url: false,
					},
				},
			},
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
				options: {
					configFile: resolve(__dirname, "../src/web/tsconfig.json"),
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
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "all",
					reuseExistingChunk: true,
					name(module: any) {
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/,
						)[1]

						if (
							module.context.match("node_modules") &&
							!packageName.startsWith("@aws") &&
							!packageName.startsWith("amazon")
						) {
							return "vendor"
						} else if (
							packageName.startsWith("@aws") ||
							packageName.startsWith("amazon")
						) {
							return "aws"
						} else if (module.context.startsWith("src")) {
							return "main"
						}

						// npm package names are URL-safe, but some servers don't like @ symbols
						return `npm.${packageName.replace("@", "")}`
					},
					enforce: true,
				},
			},
		},
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
		alias,
		fallback: {
			crypto: false,
			buffer: false,
			url: false,
		},
		// FIXME This cast just shuts TS up about something that definitely works.
		plugins: [new TsconfigPathsPlugin() as any],
	},
}

export default clientConfig
