const INITIAL_STATE = {
  loading: false,
  error: "",
  loadingMessage: "",
};
export default function loaderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "START_LOADER":
      return {
        ...state,
        loading: true,
        error: "undefined",
        loadingMessage: action.payload,
      };
    case "STOP_LOADER":
      return {
        ...state,
        loading: false,
        loadingMessage: "",
      };

    default:
      return state;
  }
}
