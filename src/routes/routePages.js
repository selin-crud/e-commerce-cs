import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Carts from "../components/cart/cart"
import Products from "../pages/products"

export default function RoutePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
      </Routes>
    </Router>
  )
}
