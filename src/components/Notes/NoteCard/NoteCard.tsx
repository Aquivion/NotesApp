import React from 'react'
import { Note } from '../../../Interfaces/Note'

interface NoteCardProps {
	note: Note
}
function NoteCard(props: NoteCardProps) {
	const { note } = props
	return <div className="flex border border-white px-2 py-3 rounded-md">{note.title}</div>
}

export default NoteCard
