import { PropsWithChildren } from "react"
import { PageLayout } from "components/PageLayout"

export function DarkPageLayout({ children }: PropsWithChildren<{}>) {
	return <PageLayout variant="dark">{children}</PageLayout>
}
