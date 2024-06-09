import React from 'react'
import { Note } from '../../../Interfaces/Note'

interface NoteCardProps {
	note: Note
}
function NoteCard(props: NoteCardProps) {
	const { note } = props
	return <div>{note.title}</div>
}

export default NoteCard
