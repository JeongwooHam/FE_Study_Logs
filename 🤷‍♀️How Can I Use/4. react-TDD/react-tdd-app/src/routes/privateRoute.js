import { Navigate } from 'react-router-dom'
import { tokenKey } from '../constants/token'
import Layout from '../components/layout'

const PrivateRouter = () => {
	const accessToken = localStorage.getItem(tokenKey)

	return accessToken ? <Layout /> : <Navigate to="/intro" />
}

export default PrivateRouter
