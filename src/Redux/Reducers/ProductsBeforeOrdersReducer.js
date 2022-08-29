const INITIAL_STATE = {
	ClickedProd: [],
	establishmentID: "",
}
export default function ProductsOrderReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "Products":
			return {
				...state,
				ClickedProd: [action.payload?.ProductAndCount, ...state.ClickedProd],
			}
		case "EmptyClcikProd":
			console.log("EmptyClcikProd", action.type)
			return {
				ClickedProd: [],
				establishmentID: "",
			}
		case "ForEstablishmentID":
			console.log("ForEstablishmentID", action.type)
			return {
				...state,
				establishmentID: action.payload,
			}

		default:
			return state
	}
}
