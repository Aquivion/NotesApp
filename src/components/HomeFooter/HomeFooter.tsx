import { IonButton } from '@ionic/react'
import React from 'react'

import useNotesStorage from '../../Storage/useNotesStorage'
import { useHistory } from 'react-router-dom'

const HomeFooter: React.FC = () => {
	const history = useHistory()
	const { numNotes, setNote } = useNotesStorage()

	const onAddNewNote = async () => {
		const num = await numNotes()
		const key = `N${num}`
		setNote(key, { title: '', description: '' })
		history.push(`/add-note`, { noteKey: key })
	}

	return (
		<div className="m-10">
			<IonButton expand="block" mode="md" onClick={onAddNewNote}>
				Add Note
			</IonButton>
		</div>
	)
}

export default HomeFooter
