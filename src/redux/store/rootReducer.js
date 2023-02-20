import { combineReducers } from "redux"
import productSlice from "../saga/products/productSlice"

export const rootReducer = combineReducers({
  products: productSlice,
})
