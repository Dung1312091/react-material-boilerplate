import { put, takeLatest } from "redux-saga/effects";
import { reduxAction } from "../store/actions";

function* getProvinces(action) {
  try {
    console.log("Demo");
  } catch (err) {
    yield put(reduxAction("HANDLE_ERROR", err));
  }
}
export function* watchCommons() {
  yield takeLatest("GET_PROVINCES", getProvinces);
}
