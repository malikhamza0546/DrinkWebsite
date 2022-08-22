import { combineReducers } from "redux";
import Auth from "./Auth";
import LoaderReducer from "./LoaderReducer";

export const RootReducers = combineReducers({
  Auth,
  LoaderReducer,
});
