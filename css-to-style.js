const { declare } = require("@babel/helper-plugin-utils")

module.exports = declare((api) => {
	api.assertVersion(7)

	return {
		name: "transform-css-to-style",

		visitor: {
			JSXAttribute(path) {
				if (path.node.name.name !== "css") return

				path.node.name.name = "style"
			},
		},
	}
})
