import Routes from "../../routes"
import { NativeRouter, useLocation } from "react-router-native"
import { GraphQLContext } from "providers/Apollo"
import { UserContextProvider } from "providers/User"
import { CognitoContext, CognitoContextProvider } from "providers/Cognito"
import { RapThemeProvider } from "providers/Theme"
import { Meta } from "providers/Meta"
import { Dimensions, ScrollView } from "react-native"
import { SidebarContextProvider } from "providers/Sidebar"
import FlipperAsyncStorage from "rn-flipper-async-storage-advanced"
import { FontPreloader } from "components/FontPreloader"
import { Platform } from "react-native"
import { MobileNav } from "components/MobileNav"
import { LayoutThemeContextProvider } from "providers/LayoutTheme"
import { SafeAreaView } from "react-native-safe-area-context"
import { LayoutThemeContext } from "providers/LayoutTheme"
import { SidebarContext } from "providers/Sidebar"
import { useContext, useEffect, useRef } from "react"
import RNAsyncStorageFlipper from "rn-async-storage-flipper"
import AsyncStorage from "@react-native-async-storage/async-storage"

RNAsyncStorageFlipper(AsyncStorage)

if (Platform.OS === "ios") {
	// Polyfills required to use Intl with Hermes engine
	require("@formatjs/intl-getcanonicallocales/polyfill").default

	require("@formatjs/intl-locale/polyfill").default

	require("@formatjs/intl-pluralrules/polyfill").default
	require("@formatjs/intl-pluralrules/locale-data/en").default

	require("@formatjs/intl-numberformat/polyfill").default
	require("@formatjs/intl-numberformat/locale-data/en").default

	require("@formatjs/intl-datetimeformat/polyfill").default
	require("@formatjs/intl-datetimeformat/locale-data/en").default 
	require("@formatjs/intl-datetimeformat/add-all-tz").default 
}

const ScrollBox = () => {
	const dimensions = Dimensions.get("screen")
	const viewport = {
		width: dimensions.width,
		height: dimensions.height,
	}
	const sidebarContext = useContext(SidebarContext)
	const { refreshUserToken, setToken } = useContext(CognitoContext)
	const { pathname } = useLocation()
	const scrollRef = useRef<ScrollView>(null)
	useEffect(() => {
		refreshUserToken((jwt) => {
			setToken && setToken(jwt)
		})
		const interval = setInterval(async () => {
			refreshUserToken((jwt) => {
				setToken && setToken(jwt)
			})
			// 10 minutes
		}, 600000)

		return () => clearInterval(interval)
	}, [])
	useEffect(() => {
		scrollRef.current?.scrollTo({ x: 0, y: 0, animated: false })
	}, [pathname])
	return (
		<ScrollView
			ref={scrollRef}
			scrollEnabled={!sidebarContext.open}
			style={{
				width: viewport.width,
				height: viewport.height,
				flex: 1,
				display: "flex",
			}}
			contentContainerStyle={{
				minHeight: dimensions.height - 160,
				position: "relative",
				
			}}
		>
			<Meta />
			<Routes />
		</ScrollView>
	)
}

export const App = (): JSX.Element => {
	const dimensions = Dimensions.get("screen")
	const viewport = {
		width: dimensions.width,
		height: dimensions.height,
	}
	const { theme } = useContext(LayoutThemeContext)

	return (
		<FontPreloader>
			<CognitoContextProvider>
				<GraphQLContext>
					<NativeRouter>
						<UserContextProvider>
							<RapThemeProvider>
								<SidebarContextProvider>
									<LayoutThemeContextProvider>
										<SafeAreaView
											style={{
												flex: 1,
												backgroundColor: "#ffffff",
												...viewport,
											}}
											edges={theme === "light" ? ["top", "bottom"] : ["left"]}
										>
											<FlipperAsyncStorage />
											<ScrollBox />
											<MobileNav />
										</SafeAreaView>
									</LayoutThemeContextProvider>
								</SidebarContextProvider>
							</RapThemeProvider>
						</UserContextProvider>
					</NativeRouter>
				</GraphQLContext>
			</CognitoContextProvider>
		</FontPreloader>
	)
}
