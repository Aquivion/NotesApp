import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import HomeContent from '../../components/HomeContent/HomeContent'
import HomeFooter from '../../components/HomeFooter/HomeFooter'

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Notes</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<HomeContent />
			</IonContent>
			<IonFooter>
				<HomeFooter />
			</IonFooter>
		</IonPage>
	)
}

export default Home
