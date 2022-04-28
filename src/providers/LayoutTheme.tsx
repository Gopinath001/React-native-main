import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useState,
} from "react"

interface LayoutThemeContextShape {
	theme: "dark" | "light"
	setTheme: Dispatch<SetStateAction<"dark" | "light">>
	resetAfterNav: Dispatch<SetStateAction<boolean>>
}
export const LayoutThemeContext = createContext<LayoutThemeContextShape>({
	theme: "light",
	setTheme: console.warn,
	resetAfterNav: () => false,
})

export function LayoutThemeContextProvider({
	children,
}: PropsWithChildren<{}>) {
	const [theme, setTheme] = useState<"dark" | "light">("light")

	return (
		<LayoutThemeContext.Provider
			value={{
				theme,
				setTheme,
				resetAfterNav: () => false,
			}}
		>
			{children}
		</LayoutThemeContext.Provider>
	)
}
