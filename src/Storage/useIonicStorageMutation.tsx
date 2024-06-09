import React, { useCallback, useEffect, useState } from 'react'
import { useCache } from './IonicStorageCacheProvider'
import { Note } from '../Interfaces/Note'
import useIonicStorage from './useIonicStorage'

function useIonicStorageMutation() {
	const { cache, setCache } = useCache()
	const { setStoreItem, removeStoreItem } = useIonicStorage<Note>('NotesDB')
	const [isLoading, setIsLoading] = useState(!cache)
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState<any>(null)

	const mutate = async (key: string, value: Note) => {
		setIsLoading(true)
		setIsError(false)
		setError(null)

		try {
			const result = await setStoreItem(key, value)
			const newNoteMap = new Map<string, Note>(cache).set(key, result)
			setCache(newNoteMap)
		} catch (err) {
			setIsError(true)
			setError(err)
		} finally {
			setIsLoading(false)
		}
	}

	const remove = async (key: string) => {
		setIsLoading(true)
		setIsError(false)
		setError(null)

		try {
			await removeStoreItem(key)
			const newNoteMap = new Map<string, Note>(cache)
			newNoteMap.delete(key)
			setCache(newNoteMap)
		} catch (err) {
			setIsError(true)
			setError(err)
		} finally {
			setIsLoading(false)
		}
	}
	return { mutate, remove, isLoading, isError, error }
}

export default useIonicStorageMutation
