import { useState, useEffect, useCallback } from 'react'
import { useCache } from './IonicStorageCacheProvider'
import { Note } from '../Interfaces/Note'
import useIonicStorage from './useIonicStorage'

// Define the return type for the hook
interface UseIonicQueryResult<T> {
	data: T | undefined
	length: number
	isLoading: boolean
	isError: boolean
	error: any
	refetch: () => void
}

// Define the hook with a generic type parameter T for data type
export const useIonicStorageQuery = (): UseIonicQueryResult<Map<string, Note>> => {
	const { cache, setCache } = useCache()
	const { getAllStoreItems, getLength } = useIonicStorage<Note>('NotesDB')
	const [data, setData] = useState<Map<string, Note> | undefined>(cache)
	const [length, setLength] = useState<number>(0)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
	const [error, setError] = useState<any>(null)

	const queryFn = async () => {
		setIsLoading(true)
		setIsError(false)
		setError(null)

		try {
			const result = await getAllStoreItems()
			const len = await getLength()
			setData(result)
			setLength(len)
		} catch (err) {
			setIsError(true)
			setError(err)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		queryFn()
	}, [cache])

	return { data, length, isLoading, isError, error, refetch: queryFn }
}
