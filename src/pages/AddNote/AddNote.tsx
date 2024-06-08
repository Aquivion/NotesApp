import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewWillLeave,
} from '@ionic/react'
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
	const { setNote, getNote, removeNote, getAllNotes, clearNotes } = useNotesStorage()
	const { noteKey } = useParams<AddNoteParams>()
	const location = useLocation()

	const query = new URLSearchParams(location.search)
	const id = query.get('id')

	const handleBackButton = () => {
		console.log('TEST', title.length, description.length)
		if (title.length === 0 && description.length === 0 && id) {
			removeNote(id)
		}
		if (title.length === 0 && description.length > 0 && id) {
			setNote(id, { title: 'Unnamed', description: description })
		}
	}

	useIonViewWillLeave(() => {
		handleBackButton()
	}, [title, description])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (id) {
				console.log(title.length)
				setNote(id, { title: title, description: description })
			}
		}, 500)

		return () => clearTimeout(delayDebounceFn)
	}, [title, description])

	useEffect(() => {})

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
