import { all } from "redux-saga/effects"
import { productWatcher } from "./products/productSaga"

export function* watchSagas() {
  yield all([productWatcher()])
}
