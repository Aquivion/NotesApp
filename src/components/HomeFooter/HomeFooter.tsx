import { IonButton } from '@ionic/react'
import React from 'react'

import { useHistory } from 'react-router-dom'
import useIonicStorage from '../../Storage/useIonicStorage'
import { useIonicStorageQuery } from '../../Storage/useIonicStorageQuery'
import useIonicStorageMutation from '../../Storage/useIonicStorageMutation'

const HomeFooter: React.FC = () => {
	const history = useHistory()
	const { length } = useIonicStorageQuery()
	const { mutate } = useIonicStorageMutation()

	const onAddNewNote = async () => {
		const key = `N${length}`
		history.push(`/add-note?id=${key}`)
	}

	return (
		<div className="m-5">
			<IonButton expand="block" mode="md" onClick={onAddNewNote}>
				Add Note
			</IonButton>
		</div>
	)
}

export default HomeFooter
