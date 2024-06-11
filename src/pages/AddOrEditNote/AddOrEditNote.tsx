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
import { useCallback, useEffect, useState } from 'react'
import TextArea from '../../components/inputs/Textarea/Textarea'
import TextInput from '../../components/inputs/TextInput/TextInput'
import { useLocation } from 'react-router-dom'
import useIonicStorageMutation from '../../Storage/useIonicStorageMutation'

interface AddOrEditNoteProps {
	title: string
	setTitle: React.Dispatch<React.SetStateAction<string>>
	description: string
	setDescription: React.Dispatch<React.SetStateAction<string>>
	pageTitle: string
}

const AddOrEditNote: React.FC<AddOrEditNoteProps> = (props) => {
	const { title, setTitle, description, setDescription, pageTitle } = props

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton></IonBackButton>
						<IonButton onClick={() => console.log('clicked!')}></IonButton>
					</IonButtons>
					<IonTitle>{pageTitle}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<div className="flex flex-col h-full overflow-auto">
				<TextInput value={title} setValue={setTitle}></TextInput>
				<TextArea value={description} setValue={setDescription}></TextArea>
			</div>
		</IonPage>
	)
}

export default AddOrEditNote
