import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/route'
import Loading from './components/loading'

function App() {
	return (
		<div>
			<RouterProvider router={router} fallbackElement={<Loading />} />
		</div>
	)
}

export default App
