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

	const setStoreItem = async (key: string, value: T): Promise<T> => {
		return await storage.set(key, value)
	}

	const getStoreItem = async (key: string): Promise<T> => {
		return await storage.get(key)
	}

	const getAllStoreItems = async (): Promise<Map<string, T>> => {
		const itemMap = new Map<string, T>()
		await storage.forEach((val: T, key: string) => {
			itemMap.set(key, val)
		})
		return itemMap
	}

	const removeStoreItem = async (key: string): Promise<T> => {
		return await storage.remove(key)
	}

	const clearStore = async () => {
		await storage.clear()
	}

	const getLength = async (): Promise<number> => {
		return storage.length()
	}

	return {
		createStore,
		setStoreItem,
		getStoreItem,
		getAllStoreItems,
		removeStoreItem,
		clearStore,
		getLength,
	}
}

export default useIonicStorage
