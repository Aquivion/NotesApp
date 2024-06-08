import { Drivers, Storage as IonicStorage } from '@ionic/storage'
import { useState } from 'react'

let storage: IonicStorage

const useIonicStorage = <T,>(storeName: string = '__mydb') => {
	const createStore = async () => {
		storage = new IonicStorage({
			name: storeName,
			driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage, Drivers.SecureStorage],
		})
		await storage.create()
	}

	const setStoreItem = async (key: string, value: T): Promise<T | undefined> => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		return await storage.set(key, value)
	}

	const getStoreItem = async (key: string): Promise<T | undefined> => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		return await storage.get(key)
	}

	const getAllStoreItems = async (): Promise<T[] | undefined> => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		const items: T[] = []
		await storage.forEach((val: T, key: string) => {
			items.push(val)
		})
		return items
	}

	const removeStoreItem = async (key: string): Promise<T | undefined> => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		return await storage.remove(key)
	}

	const clearStore = async () => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		await storage.clear()
	}

	const length = async (): Promise<number | undefined> => {
		if (!storage) {
			console.warn('No ionic storage has been created yet')
			return
		}
		return storage.length()
	}

	return {
		createStore,
		setStoreItem,
		getStoreItem,
		getAllStoreItems,
		removeStoreItem,
		clearStore,
		length,
	}
}

export default useIonicStorage
