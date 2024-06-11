import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home/Home'

import './global.scss'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

import AddNote from './pages/AddNote/AddNote'
import { useEffect } from 'react'
import useIonicStorage from './Storage/useIonicStorage'
import { Note } from './Interfaces/Note'
import EditNote from './pages/EditNote/EditNote'

setupIonicReact()

const App: React.FC = () => {
	const { createStore } = useIonicStorage<Note>('NotesDB')

	useEffect(() => {
		createStore()
	}, [])

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/home" component={Home} />
					<Route path="/edit-note" component={EditNote} />
					<Route path="/add-note" component={AddNote} />
					<Route exact path="/" render={() => <Redirect to="/home" />} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
