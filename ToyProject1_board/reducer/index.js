import { combineReducers } from 'redux'
import post from './notice'
import cart from './cart'
import navContent from './nav-content'
import targetProduct from './target-product'

export const rootReducer = combineReducers({
	post,
	cart,
	navContent,
	targetProduct,
})
