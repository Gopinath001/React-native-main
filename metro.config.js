/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path")
const { getDefaultConfig } = require("metro-config")

module.exports = (async () => {
	const {
		resolver: { sourceExts },
	} = await getDefaultConfig()

	return {
		projectRoot: resolve(__dirname, "./"),

		transformer: {
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: true,
					inlineRequires: false,
				},
			}),
		},

		resolver: {
			sourceExts: [...sourceExts, "cjs", "mjs"],
		},
	}
})()
