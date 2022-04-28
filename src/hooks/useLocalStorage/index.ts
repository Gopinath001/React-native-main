type ValidKeys = "cognito_token" | string

export function useLocalStorage() {
	const setItem = async (key: ValidKeys, value: string): Promise<void> => {
		if (window?.localStorage) {
			window.localStorage.setItem(key, value)
			return Promise.resolve()
		}
		return Promise.reject()
	}

	const getItem = async (key: ValidKeys): Promise<string | null> => {
		if (window?.localStorage) {
			const value = window.localStorage.getItem(key)
			return Promise.resolve(value)
		}
		return Promise.reject()
	}

	const removeItem = async (key: string) => {
		if (window?.localStorage) {
			window.localStorage.removeItem(key)
		}
	}

	const clearStorage = async () => {
		if (window?.localStorage) {
			const value = window.localStorage.clear()
			return Promise.resolve(value)
		}
		return Promise.reject()
	}

	return {
		clearStorage,
		removeItem,
		setItem,
		getItem,
	}
}
