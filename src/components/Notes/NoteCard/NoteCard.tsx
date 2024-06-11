import React from 'react'
import { Note } from '../../../Interfaces/Note'
import { IonButton, IonIcon } from '@ionic/react'

import { trash, createOutline } from 'ionicons/icons'
import useIonicStorageMutation from '../../../Storage/useIonicStorageMutation'
import './NoteCard.scss'

interface NoteCardProps {
	note: Note
}
function NoteCard(props: NoteCardProps) {
	const { note } = props
	const { remove } = useIonicStorageMutation()

	const onClickDelete = () => {
		console.log('delete clicked!')
		remove(note.id)
	}

	const onEditNote = () => {
		console.log('edit')
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
