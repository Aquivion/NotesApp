import { IonButton, IonFooter } from '@ionic/react'
import React from 'react'

import './HomeContent.scss'
const HomeContent: React.FC = () => {
	const onAddNoteClicked = () => {
		console.log('Add note clicked!')
	}
	return (
		<div className="homeContent">
			<p>You haven't created any notes yet</p>
		</div>
	)
}

export default HomeContent
