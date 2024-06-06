import { Drivers, Storage as IonicStorage } from '@ionic/storage'
import { useState } from 'react'

const useIonicStorage = <T,>(storeName: string = '__mydb') => {
	const [storage, setStorage] = useState<IonicStorage>()

	const createStore = async () => {
		const storage = new IonicStorage({
			name: storeName,
			driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage, Drivers.SecureStorage],
		})
		setStorage(await storage.create())
	}

	const setStoreItem = async (key: string, value: T) => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		await storage.set(key, value)
	}

	const getStoreItem = async (key: string): Promise<T | undefined> => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		return await storage.get(key)
	}

	const removeStoreItem = async (key: string) => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		await storage.remove(key)
	}

	const clearStore = async () => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		await storage.clear()
	}

	return {
		createStore,
		setStoreItem,
		getStoreItem,
		removeStoreItem,
		clearStore,
	}
}

export default useIonicStorage
