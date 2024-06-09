import { useEffect } from 'react'
import NoteCard from '../NoteCard/NoteCard'
import { Note } from '../../../Interfaces/Note'
import { useIonicStorageQuery } from '../../../Storage/useIonicStorageQuery'

function NoteList() {
	const { data, isLoading, isError } = useIonicStorageQuery()

	useEffect(() => {
		console.log('notes list fresh rendered', data)
	}, [data])

	return (
		<div className="w-full">
			<ul>
				{data &&
					Array.from(data.entries()).map(([id, note]) => {
						return (
							<li key={id} className='mb-2 mx-2'>
								<NoteCard note={note}></NoteCard>
							</li>
						)
					})}
			</ul>
		</div>
	)
}

export default NoteList
