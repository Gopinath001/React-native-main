const { pathsToModuleNameMapper } = require("ts-jest")
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig")

module.exports = {
	testEnvironment: "node",
	// collectCoverage: true,
	// collectCoverageFrom: ["./src/**/*"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>/src",
	}),
	timers: "modern",
}
