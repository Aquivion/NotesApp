import { Note } from '../Interfaces/Note'
import useIonicStorage from './useIonicStorage'

const useNotesStorage = () => {
	const { createStore, setStoreItem, getStoreItem, getAllStoreItems, removeStoreItem, clearStore, length } =
		useIonicStorage<Note>('NotesDB')

	const loadStore = async () => {
		createStore()
	}

	const setNote = async (key: string, note: Note): Promise<Note | undefined> => {
		return await setStoreItem(key, note)
	}

	const getNote = async (key: string): Promise<Note | undefined> => {
		return await getStoreItem(key)
	}
	const getAllNotes = async (): Promise<Note[] | undefined> => {
		return await getAllStoreItems()
	}

	const removeNote = async (key: string): Promise<Note | undefined> => {
		return await removeStoreItem(key)
	}

	const clearNotes = async () => {
		clearStore()
	}

	const numNotes = async (): Promise<number | undefined> => {
		return length()
	}

	return {
		loadStore,
		setNote,
		getNote,
		getAllNotes,
		removeNote,
		clearNotes,
		numNotes,
	}
}

export default useNotesStorage
