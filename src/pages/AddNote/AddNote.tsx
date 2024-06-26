import { useIonViewWillLeave } from '@ionic/react'
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useIonicStorageMutation from '../../Storage/useIonicStorageMutation'
import AddOrEditNote from '../AddOrEditNote/AddOrEditNote'

const AddNote: React.FC = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const { mutate, remove, isLoading, isError } = useIonicStorageMutation()
	const location = useLocation()

	const query = new URLSearchParams(location.search)
	const id = query.get('id')

	const handleBackButton = useCallback(() => {
		if (title.length === 0 && description.length === 0 && id) {
			remove(id)
		}
		if (title.length === 0 && description.length > 0 && id) {
			mutate(id, { id: id, title: 'Unnamed', description: description, timeStamp: new Date() })
		}
	}, [title, description])

	useIonViewWillLeave(() => {
		handleBackButton()
	}, [handleBackButton])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (id) {
				console.log(title.length)
				mutate(id, { id: id, title: title, description: description, timeStamp: new Date() })
			}
		}, 500)

		return () => clearTimeout(delayDebounceFn)
	}, [title, description])

	useEffect(() => {})

	return (
		<AddOrEditNote
			title={title}
			setTitle={setTitle}
			description={description}
			setDescription={setDescription}
			pageTitle="Add Note"
		></AddOrEditNote>
	)
}

export default AddNote
