import { Note } from '../Interfaces/Note'
import useIonicStorage from './useIonicStorage'

const useNotesStorage = () => {
	const { createStore, setStoreItem, getStoreItem, removeStoreItem, clearStore } = useIonicStorage<Note>('NotesDB')

	const loadStore = async () => {
		createStore()
	}

	const setNote = async (key: string, note: Note): Promise<Note | undefined> => {
		return await setStoreItem(key, note)
	}

	const getNote = async (key: string): Promise<Note | undefined> => {
		return await getStoreItem(key)
	}

	const removeNote = async (key: string): Promise<Note | undefined> => {
		return await removeStoreItem(key)
	}

	const clearNotes = async () => {
		clearStore()
	}

	return {
		loadStore,
		setNote,
		getNote,
		removeNote,
		clearNotes,
	}
}

export default useNotesStorage
