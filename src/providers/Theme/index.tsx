import { css, Global, ThemeProvider } from "@emotion/react"
import { PropsWithChildren } from "react"
import * as theme from "../../@rap-theme"

export const RapThemeProvider = ({
	children,
}: PropsWithChildren<{}>): JSX.Element => (
	<>
		<Global
			styles={css`
				html {
					min-height: 100%;
					background: rgb(237, 244, 245);
					background: linear-gradient(
						0deg,
						rgba(237, 244, 245, 1) 0%,
						rgba(255, 255, 255, 1) 100%
					);
				}

				html,
				body,
				#app {
					height: 100%;
					overflow-x: hidden;
				}

				* + * {
					box-sizing: border-box;
				}

				#app {
					padding-bottom: 5rem;
				}
				a {
					color: ${theme.colorBrandAlternative};
					text-decoration: none;
				}
			`}
		/>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</>
)
