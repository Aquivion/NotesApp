import { createContext, useContext, useState, useEffect } from 'react'
import { Note } from '../Interfaces/Note'

type Props = {
	children?: React.ReactNode
}

interface CacheContextType {
	cache: Map<string, Note> | undefined
	setCache: React.Dispatch<React.SetStateAction<Map<string, Note>>>
}

// Default placeholder function for setCache
const defaultSetCache: React.Dispatch<React.SetStateAction<object>> = () => {
	throw new Error('setCache function must be used within CacheProvider')
}

export const CacheContext = createContext<CacheContextType>({ cache: undefined, setCache: defaultSetCache })

export const IonicStorageCacheProvider: React.FC<Props> = ({ children }) => {
	const [cache, setCache] = useState(new Map<string, Note>())

	return <CacheContext.Provider value={{ cache, setCache }}>{children}</CacheContext.Provider>
}

export const useCache = () => {
	return useContext(CacheContext)
}
