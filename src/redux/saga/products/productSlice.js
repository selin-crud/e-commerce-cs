import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  carts: [],
}
const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: action.payload }
    },
    setCarts: (state, action) => {
      return { ...state, carts: action.payload }
    },
  },
})
export const { setProducts, setCarts } = productReducer.actions
export default productReducer.reducer
