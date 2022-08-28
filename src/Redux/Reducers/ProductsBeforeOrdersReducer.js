const INITIAL_STATE = {
	ClickedProd: [],
}
export default function ProductsOrderReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "Products":
			return {
				ClickedProd: [action.payload?.ProductAndCount, ...state.ClickedProd],
			}

		default:
			return state
	}
}
