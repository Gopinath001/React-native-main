import AsyncStorage from "@react-native-async-storage/async-storage"
import { UserContext } from "providers/User"
import { useContext } from "react"

type ValidKeys = "cognito_token" | "selectProfile" | string
export function useLocalStorage() {
	const { selectProfile } = useContext(UserContext)

	const setItem = (key: ValidKeys, value: any): Promise<void> => {
		if (value === null || typeof value === "undefined")
			return AsyncStorage.removeItem(key)

		return AsyncStorage.setItem(key, value)
	}

	const getItem = (key: string): Promise<string | null> => {
		return AsyncStorage.getItem(key)
	}

	const removeItem = async (key: string) => AsyncStorage.removeItem(key)

	const clearStorage = async () => {
		await AsyncStorage.clear()
		selectProfile(undefined)
	}

	return {
		removeItem,
		clearStorage,
		setItem,
		getItem,
	}
}
