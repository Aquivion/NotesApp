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
import useNotesStorage from './Storage/useNotesStorage'
import { useEffect } from 'react'

setupIonicReact()

const App: React.FC = () => {
	const { loadStore } = useNotesStorage()

	useEffect(() => {
		loadStore()
	}, [])

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/home" component={Home} />
					<Route path="/add-note" component={AddNote} />
					<Route exact path="/" render={() => <Redirect to="/home" />} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
