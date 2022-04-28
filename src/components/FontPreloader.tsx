import { Fragment, PropsWithChildren } from "react"
import {
	useFonts as useOswaldFonts,
	Oswald_200ExtraLight,
	Oswald_300Light,
	Oswald_400Regular,
	Oswald_700Bold,
} from "@expo-google-fonts/oswald"
import {
	useFonts as useRopaFonts,
	RopaSans_400Regular,
} from "@expo-google-fonts/ropa-sans"
import {
	useFonts as useAssistantFonts,
	Assistant_700Bold,
} from "@expo-google-fonts/assistant"
import { Loading } from "./Loading"

export function FontPreloader({
	children,
}: PropsWithChildren<{}>): JSX.Element {
	const [oswaldLoaded] = useOswaldFonts({
		Oswald_200ExtraLight,
		Oswald_300Light,
		Oswald_400Regular,
		Oswald_700Bold,
	})
	const [ropaLoaded] = useRopaFonts({ RopaSans_400Regular })
	const [assistantLoaded] = useAssistantFonts({ Assistant_700Bold })

	if (!oswaldLoaded || !ropaLoaded || !assistantLoaded) return <Loading />

	return <Fragment>{children}</Fragment>
}
