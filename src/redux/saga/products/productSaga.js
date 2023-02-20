import { axiosInstance } from "../../../network"
import { PRODUCTS_API } from "../../../network/apiPath"
import { PRODUCT_REQUEST } from "../type"
import { setProducts } from "./productSlice"
import { call, put, takeLatest } from "redux-saga/effects"

export function* productsWorker() {
  try {
    const response = yield call(axiosInstance.get, PRODUCTS_API)
    yield put(setProducts(response.data?.products))
  } catch (error) {
    console.error(error)
  }
}
export function* productWatcher() {
  yield takeLatest(PRODUCT_REQUEST, productsWorker)
}
