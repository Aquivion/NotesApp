import { IonBackButton, IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useEffect, useState } from 'react'
import TextArea from '../../components/inputs/Textarea/Textarea'
import TextInput from '../../components/inputs/TextInput/TextInput'

const AddNote: React.FC = () => {
	const [title, setTitle] = useState('')
	const [note, setNote] = useState('')

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
