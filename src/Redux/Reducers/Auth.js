const INITIAL_STATE = {
  user: null,
  forgotPassword: null,
  updatePassword: null,
  register: null,
};
export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "FORGOT_PASSWORD":
      return {
        ...state,
        forgotPassword: action.payload,
      };

    case "UPDATE_PASSWORD":
      return {
        ...state,
        updatePassword: action.payload,
      };
    case "REGISTER":
      return {
        ...state,
        register: action.payload,
      };
    default:
      return state;
  }
}
