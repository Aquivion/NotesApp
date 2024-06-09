import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { IonicStorageCacheProvider } from './Storage/IonicStorageCacheProvider'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
	<React.StrictMode>
		<IonicStorageCacheProvider>
			<App />
		</IonicStorageCacheProvider>
	</React.StrictMode>
)
