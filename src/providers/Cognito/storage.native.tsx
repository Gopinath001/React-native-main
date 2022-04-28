import AsyncStorage from "@react-native-async-storage/async-storage"



const MEMORY_KEY_PREFIX = "@StorageService:"
let dataMemory: any = {}


export class MemoryStorageNew {
	static syncPromise: Promise<any> | null = null
	
	static setItem(key: any, value: any) {
		AsyncStorage.setItem(MEMORY_KEY_PREFIX + key, value)
		dataMemory[key] = value
		return dataMemory[key]
	}

	
	static getItem(key: string) {
		return Object.prototype.hasOwnProperty.call(dataMemory, key)
			? dataMemory[key]
			: undefined
	}

	
	static removeItem(key: string) {
		AsyncStorage.removeItem(MEMORY_KEY_PREFIX + key)
		return delete dataMemory[key]
	}

	
	static clear() {
		dataMemory = {}
		return dataMemory
	}

	
	static sync() {
		if (!MemoryStorageNew.syncPromise) {
			MemoryStorageNew.syncPromise = new Promise((res, rej) => {
				AsyncStorage.getAllKeys((errKeys, keys) => {
					if (errKeys) rej(errKeys)
					const memoryKeys = keys!.filter((key) =>
						key.startsWith(MEMORY_KEY_PREFIX),
					)
					AsyncStorage.multiGet(memoryKeys, (err, stores) => {
						if (err) rej(err)
						stores!.map((result, index, store) => {
							const key = store[index][0]
							const value = store[index][1]
							const memoryKey = key.replace(MEMORY_KEY_PREFIX, "")
							dataMemory[memoryKey] = value
						})
						res()
					})
				})
			})
		}
		return MemoryStorageNew.syncPromise
	}
}

/** @class */
export default class StorageHelper {
	private storageWindow: any
	
	constructor() {
		this.storageWindow = MemoryStorageNew
	}

	
	getStorage() {
		return this.storageWindow
	}
}
