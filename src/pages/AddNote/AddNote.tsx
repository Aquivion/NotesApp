import { IonBackButton, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useEffect, useState } from 'react'
import TextArea from '../../components/inputs/Textarea/Textarea'
import TextInput from '../../components/inputs/TextInput/TextInput'
import useNotesStorage from '../../Storage/useNotesStorage'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface AddNoteParams {
	noteKey: string
}
const AddNote: React.FC = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const { setNote, getNote, getAllNotes, clearNotes } = useNotesStorage()
	const { noteKey } = useParams<AddNoteParams>()

	const useQuery = () => {
		return new URLSearchParams(useLocation().search)
	}

	const query = useQuery()
	const id = query.get('id')

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (id) {
				setNote(id, { title: title, description: description })
			}
		}, 500)

		return () => clearTimeout(delayDebounceFn)
	}, [title])

	const getNoteFromStore = async () => {
		const note = await getAllNotes('Test')
		console.log(note)
	}

	const clearStorage = async () => {
		await clearNotes()
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton></IonBackButton>
						<IonButton onClick={() => console.log('clicked!')}></IonButton>
					</IonButtons>
					<IonTitle>Add Note</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div className="flex flex-col h-full overflow-auto">
				<TextInput value={title} setValue={setTitle}></TextInput>
				<TextArea value={description} setValue={setDescription}></TextArea>
			</div>
			<button onClick={getNoteFromStore}>Test</button>
			<button onClick={clearStorage}>Clear</button>
		</IonPage>
	)
}

export default AddNote
