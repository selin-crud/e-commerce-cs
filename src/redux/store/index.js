import { legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { watchSagas } from "../saga"
import { rootReducer } from "./rootReducer"
import createSagaMiddleware from "redux-saga"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { applyMiddleware } from "@reduxjs/toolkit"

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(persistedReducer, enhancer)

const configureStore = () => {
  sagaMiddleware.run(watchSagas)
  return store
}
const persistor = persistStore(store)
export { persistor, configureStore }
