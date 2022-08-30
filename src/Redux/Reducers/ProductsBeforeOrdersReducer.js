const INITIAL_STATE = {
	ClickedProd: [],
	ProductCart: []
};
export default function ProductsOrderReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "Products":
			let prod = []
			prod = prod.concat(state.ClickedProd)
			return {
				...state,
				ClickedProd: prod.concat(action?.payload),
			}
		case "ProductsShow":
			let cart = []
			cart = cart.concat(state.ProductCart)
			return {
				...state,
				ProductCart: cart.concat(action?.payload),
			}
		case "EmptyClcikProd":
			console.log("EmptyClcikProd", action.type)
			return {
				ClickedProd: [],
				ProductCart: []
			}

		default:
			return state
	}
}
