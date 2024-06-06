import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonInput,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import { Preferences } from '@capacitor/preferences'
import { useEffect, useState } from 'react'
import TextArea from '../../components/inputs/Textarea/Textarea'
import TextInput from '../../components/inputs/TextInput/TextInput'

const AddNote: React.FC = () => {
	const [title, setTitle] = useState('')
	const [note, setNote] = useState('')

	useEffect(() => {
		const listener = (ev: any) => {
			debugger
			ev.detail.register(10, () => {
				console.log('Handler was called!')
			})
		}
		document.addEventListener('ionBackButton', listener)
		return () => {
			document.removeEventListener('ionBackButton', listener)
		}
	}, [])

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
				<TextArea value={note} setValue={setNote}></TextArea>
			</div>
		</IonPage>
	)
}

export default AddNote
