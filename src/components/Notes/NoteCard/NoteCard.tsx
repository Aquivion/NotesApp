import React, { BaseSyntheticEvent } from 'react'
import { Note } from '../../../Interfaces/Note'
import { IonButton, IonIcon } from '@ionic/react'

import { trash, createOutline } from 'ionicons/icons'
import useIonicStorageMutation from '../../../Storage/useIonicStorageMutation'
import './NoteCard.scss'
import { useHistory } from 'react-router'

interface NoteCardProps {
	note: Note
}
function NoteCard(props: NoteCardProps) {
	const { note } = props
	const history = useHistory()
	const { remove } = useIonicStorageMutation()

	const onClickDelete = (e: BaseSyntheticEvent) => {
		e.preventDefault()
		e.stopPropagation()
		console.log('delete clicked!', e)
		remove(note.id)
	}

	const onEditNote = () => {
		console.log('edit')
		history.push(`/edit-note?id=${note.id}`)
	}
	return (
		<IonButton
			fill="outline"
			onClick={onEditNote}
			className="w-full normal-case justify-between text-white m-0 ion-button-border-white"
		>
			{/* <div className="flex border border-white px-2 py-3 rounded-md items-center justify-between"> */}
			<div className="flex flex-row items-center justify-between w-full">
				<p>{note.title}</p>
				<div>
					<button onClick={onClickDelete}>
						<IonIcon slot="start" icon={trash} className="text-xl hover:text-red-400" />
					</button>
				</div>
			</div>
			{/* </div> */}
		</IonButton>
	)
}

export default NoteCard
