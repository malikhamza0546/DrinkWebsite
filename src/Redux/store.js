import { legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { RootReducers } from "./Reducers/RootReducer";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import authReducer from "./Reducers/Auth";

const logger = createLogger();

const persistConfig = {
  key: "reducer-key",
  storage: storage,
  blacklist: ["authReducer"],
};
const pReducer = persistReducer(persistConfig, RootReducers);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
