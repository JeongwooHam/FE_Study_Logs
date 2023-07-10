import { createContext, useContext, useState } from 'react'
import NavDetail from '../data/navbar-data.json'

const initialValue = NavDetail.NavMenus[0]

export const useNav = () => useContext(NavStore)

const NavStore = createContext()

const NavStoreProvider = ({ children }) => {
	const [content, setContent] = useState(initialValue)

	return (
		<NavStore.Provider value={{ content, setContent, initialValue }}>
			{children}
		</NavStore.Provider>
	)
}

export default NavStoreProvider
