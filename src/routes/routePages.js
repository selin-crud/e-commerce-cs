import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from "../pages/products"
import { HOME_PATH } from "./routePath"

export default function RoutePage() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PATH} element={<Products />}></Route>
      </Routes>
    </Router>
  )
}
