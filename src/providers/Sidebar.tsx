import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useState,
	useEffect,
} from "react"
import { useLocation } from "react-router-dom"

export const SidebarContext = createContext<{
	open: boolean
	setSidebarOpen: Dispatch<SetStateAction<boolean>>
}>({ open: false, setSidebarOpen: console.warn })

export function SidebarContextProvider({ children }: PropsWithChildren<{}>) {
	const [open, setSidebarOpen] = useState(false)
	const location = useLocation()
	useEffect(() => {
		setSidebarOpen(false)
	}, [location])

	return (
		<SidebarContext.Provider value={{ open, setSidebarOpen }}>
			{children}
		</SidebarContext.Provider>
	)
}
