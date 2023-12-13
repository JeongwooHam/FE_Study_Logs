import { createBrowserRouter } from 'react-router-dom'
import Intro from '../pages/intro'
import SignUp from '../pages/sign_up'
import SignIn from '../pages/sign_in'
import PrivateRouter from './privateRoute'
import Monthly from '../pages/monthly'
import Weekly from '../pages/weekly'

const router = createBrowserRouter([
	{
		element: <PrivateRouter />,
		children: [
			{
				index: true,
				path: '/',
				element: <Monthly />,
			},
			{ path: '/weekly', element: <Weekly /> },
		],
	},
	{
		path: '/intro',
		element: <Intro />,
	},
	{
		path: '/sign_up',
		element: <SignUp />,
	},
	{
		path: '/sign_in',
		element: <SignIn />,
	},
])

export default router
