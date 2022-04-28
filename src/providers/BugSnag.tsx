import Bugsnag, { Plugin } from "@bugsnag/js"
import BugsnagPluginReact from "@bugsnag/plugin-react"
import { Box } from "components/Box"
import { Text } from "components/Text"
import React, { PropsWithChildren } from "react"
import { PageLayout } from "components/PageLayout"

function ErrorView() {
	return (
		<PageLayout>
			<Box grid>
				<Text>
					Uh-Oh! Something bad happened. We&pos;ve been notified and we&pos;ll
					fix it as quick as we can
				</Text>
			</Box>
		</PageLayout>
	)
}

export default function BugSnagProvider({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	if (
		typeof process.env.BUGSNAG_API_KEY !== "string" ||
		process.env.NODE_ENV !== "production"
	)
		return <>{children}</>

	Bugsnag.start({
		apiKey: process.env.BUGSNAG_API_KEY as string,
		plugins: [new BugsnagPluginReact() as Plugin],
	})

	const ErrorBoundary = Bugsnag.getPlugin("react")?.createErrorBoundary(
		React as any,
	)

	if (!ErrorBoundary) return <>{children}</>

	return <ErrorBoundary FallbackComponent={ErrorView}>{children}</ErrorBoundary>
}
