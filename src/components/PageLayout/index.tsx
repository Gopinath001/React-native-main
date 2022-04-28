import { PageLayout as BasePageLayout } from "components/layout/Page"
import { REDIRECT_URI_BASE } from "consts"
import { ReactNode, useContext, useEffect } from "react"
import { LayoutThemeContext } from "providers/LayoutTheme"

export function PageLayout(props: {
	children?: ReactNode | undefined
	variant?: "dark" | "light"
}) {
	const { setTheme } = useContext(LayoutThemeContext)
	useEffect(() => {
		setTheme(props.variant ?? "light")
	})
	return (
		<BasePageLayout
			loginRedirectUri={
				REDIRECT_URI_BASE +
				"/user/tokens/" +
				(REDIRECT_URI_BASE.startsWith("rap") ? "mobile" : "web")
			}
			logoutRedirectUri={REDIRECT_URI_BASE as string}
			variant={props.variant}
		>
			{props.children}
		</BasePageLayout>
	)
}
