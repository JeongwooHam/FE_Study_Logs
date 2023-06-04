const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'SELECT_PRODUCT':
			return action.payload
		default:
			return state
	}
}

export default reducer
