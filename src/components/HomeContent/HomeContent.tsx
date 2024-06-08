import { IonButton, IonFooter } from '@ionic/react'
import React from 'react'

const HomeContent: React.FC = () => {
	const onAddNoteClicked = () => {
		console.log('Add note clicked!')
	}
	return (
		<div className="flex justify-center items-center h-full">
			<p>You haven't created any notes yet</p>
		</div>
	)
}

export default HomeContent
