import { combineReducers } from "redux"
import Auth from "./Auth"
import LoaderReducer from "./LoaderReducer"
import Explore from "./Explore"
import Cart from "./Cart"
import ProductsOrderReducer from "./ProductsBeforeOrdersReducer"

export const RootReducers = combineReducers({
	Auth,
	LoaderReducer,
	Explore,
	Cart,
	ProductsOrderReducer,
})
