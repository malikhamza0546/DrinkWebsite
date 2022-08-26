import { legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Reducers/Auth";
import { RootReducers } from "./Reducers/RootReducer";
import loaderReducer from "./Reducers/LoaderReducer";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();

const persistConfig = {
  key: "reducer-key",
  storage: storage,
  blacklist: ["loaderReducer", "authReducer"],
};
const pReducer = persistReducer(persistConfig, RootReducers);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
