import React from 'react'
import { Note } from '../../../Interfaces/Note'
import { IonIcon } from '@ionic/react'

import { trash, createOutline } from 'ionicons/icons'
interface NoteCardProps {
	note: Note
}
function NoteCard(props: NoteCardProps) {
	const { note } = props
	return (
		<div className="flex border border-white px-2 py-3 rounded-md items-center justify-between">
			<p>{note.title}</p>
			<div>
				<IonIcon icon={createOutline} className="text-xl hover:text-green-400 px-2" />
				<IonIcon icon={trash} className="text-xl hover:text-red-400" />
			</div>
		</div>
	)
}

export default NoteCard
