import { IonBackButton, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useEffect, useState } from 'react'
import TextArea from '../../components/inputs/Textarea/Textarea'
import TextInput from '../../components/inputs/TextInput/TextInput'
import useNotesStorage from '../../Storage/useNotesStorage'
import { useParams } from 'react-router'

interface AddNoteParams {
	noteKey: string
}
const AddNote: React.FC = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const { setNote, getNote, getAllNotes } = useNotesStorage()
	const { noteKey } = useParams<AddNoteParams>()

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			setNote(noteKey, { title: title, description: description })
		}, 500)

		return () => clearTimeout(delayDebounceFn)
	}, [title])

	const getNoteFromStore = async () => {
		const note = await getAllNotes('Test')
		console.log(note)
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
		</IonPage>
	)
}

export default AddNote
