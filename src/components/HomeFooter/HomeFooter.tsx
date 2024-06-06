import { IonButton } from '@ionic/react'
import React from 'react'

import './HomeFooter.scss'

const HomeFooter: React.FC = () => {
	return (
		<div className="homeFooter">
			<IonButton expand="block" mode="md" routerLink="/add-note">
				Add Note
			</IonButton>
		</div>
	)
}

export default HomeFooter
