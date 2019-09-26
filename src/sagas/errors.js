import { takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { removeLocalStore } from "../utils/localStore";

function* handleError(action) {
  const { data } = action.payload;
  console.log("===>", data);
  if (action.payload.status === 401) {
    removeLocalStore();
    yield put(push("/login"));
  }
}

export function* watchError() {
  yield takeLatest("HANDLE_ERROR", handleError);
}
