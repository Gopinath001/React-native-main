import Routes from "../../routes"
import { BrowserRouter } from "react-router-dom"
import { GraphQLContext } from "providers/Apollo"
import { UserContextProvider } from "providers/User"
import { CognitoContextProvider } from "providers/Cognito"
import { ResponsiveProvider } from "providers/Responsive"
import { RapThemeProvider } from "providers/Theme"
import { Meta } from "providers/Meta"

export const App = (): JSX.Element => (
	<CognitoContextProvider>
		<GraphQLContext>
			<BrowserRouter>
				<UserContextProvider>
					<ResponsiveProvider>
						<RapThemeProvider>
							<Meta />
							<Routes />
						</RapThemeProvider>
					</ResponsiveProvider>
				</UserContextProvider>
			</BrowserRouter>
		</GraphQLContext>
	</CognitoContextProvider>
)
