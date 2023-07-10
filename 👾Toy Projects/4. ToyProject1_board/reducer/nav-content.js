import NavDetail from '../data/navbar-data.json'

const initialValue = NavDetail.NavMenus[0]

const reducer = (state = initialValue, action) => {
	switch (action.type) {
		case 'RESET_STATE':
			return initialValue
		default:
			return state
	}
}

export default reducer
