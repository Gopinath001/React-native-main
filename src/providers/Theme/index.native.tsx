import { ThemeProvider } from "@emotion/react"
import { PropsWithChildren } from "react"
import * as theme from "../../@rap-theme"

export const RapThemeProvider = ({
	children,
}: PropsWithChildren<{}>): JSX.Element => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)
