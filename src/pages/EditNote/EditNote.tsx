import { useIonViewWillLeave } from '@ionic/react'
import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useIonicStorageMutation from '../../Storage/useIonicStorageMutation'
import AddOrEditNote from '../AddOrEditNote/AddOrEditNote'
import { useIonicStorageQuery } from '../../Storage/useIonicStorageQuery'

const EditNote: React.FC = () => {
	const { data, isLoading: queryIsLoading } = useIonicStorageQuery()
	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const id = query.get('id') as string
	const [title, setTitle] = useState(data?.get(id)?.title || '')
	const [description, setDescription] = useState(data?.get(id)?.description || '')
	const { mutate, remove, isLoading, isError } = useIonicStorageMutation()

	const handleBackButton = useCallback(() => {
		if (!title && description?.length && description.length > 0 && id) {
			mutate(id, { id: id, title: 'Unnamed', description: description, timeStamp: new Date() })
		}
	}, [title, description])

	useIonViewWillLeave(() => {
		handleBackButton()
	}, [handleBackButton])

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (id && title !== undefined && description !== undefined) {
				console.log(title?.length)
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
			pageTitle="Edit Note"
		></AddOrEditNote>
	)
}

export default EditNote
