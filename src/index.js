import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import RoutePage from "./routes/routePages"
import { Provider } from "react-redux"
import { configureStore, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById("root"))
const store = configureStore()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutePage />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
