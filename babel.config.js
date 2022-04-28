const { resolve } = require("path")
module.exports = {
	presets: [
		"module:metro-react-native-babel-preset",
		["@babel/preset-react", { runtime: "automatic" }],
	],
	plugins: [
		["./css-to-style.js"],
		["@emotion/babel-plugin"],
		[
			"inline-dotenv",
			{
				path: ".env", // See motdotla/dotenv for more options
			},
		],
		[
			"transform-inline-environment-variables",
			{
				include: [
					"NODE_ENV",
					"CORE_API_ROOT",
					"WEB_ROOT_URI",
					"APP_PROTOCOL",
					"CMS_API_ROOT",
					"MOBILE_COGNITO_AUTH_BASE",
					"MOBILE_COGNITO_USER_POOL_ID",
					"MOBILE_COGNITO_USER_POOL_WEB_ID",
					"AWS_REGION",
					"AWS_CLIENT_ID",
				],
			},
		],
		[
			"module-resolver",
			{
				root: ["./"],
				alias: {
					"^components/(.+)": resolve(__dirname, "./src/components/\\1"),
					"^screens/(.+)": resolve(__dirname, "./src/screens/\\1"),
					"^hooks/(.+)": resolve(__dirname, "./src/hooks/\\1"),
					"^providers/(.+)": resolve(__dirname, "./src/providers/\\1"),
					"^icons/(.+)": resolve(__dirname, "./src/icons/\\1"),
					"^utils": resolve(__dirname, "./src/utils/index.native.tsx"),
					"^@rap-api/(.+)": resolve(__dirname, "./src/@rap-api/\\1"),
					"^@rap-theme": resolve(__dirname, "./src/@rap-theme.ts"),
					"^consts": resolve(__dirname, "./src/consts/index.native.ts"),
					"@emotion/react$": resolve(__dirname, "./src/native-css-proxy.ts"),
				},
				extensions: [
					".ios.ts",
					".ios.tsx",
					".android.ts",
					".android.tsx",
					".native.ts",
					".native.tsx",
					".ts",
					".tsx",
					".js",
					".jsx",
					".json",
					".cjs",
					".mjs",
				],
			},
		],
	],
}
