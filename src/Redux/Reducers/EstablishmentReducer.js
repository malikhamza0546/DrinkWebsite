const INITIAL_STATE = {
	establishment: null,
}
export default function authReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "EstablishmentID":
			return {
				...state,
				establishment: action.payload,
			}
		default:
			return state
	}
}
