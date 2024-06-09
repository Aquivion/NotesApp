import React from 'react'
import { Note } from '../../../Interfaces/Note'
import { IonIcon } from '@ionic/react'

import { trash, createOutline } from 'ionicons/icons'
import useIonicStorageMutation from '../../../Storage/useIonicStorageMutation'
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
	return (
		<div className="flex border border-white px-2 py-3 rounded-md items-center justify-between">
			<p>{note.title}</p>
			<div>
				<button onClick={onClickDelete}>
					<IonIcon icon={trash} className="text-xl hover:text-red-400" />
				</button>
			</div>
		</div>
	)
}

export default NoteCard
