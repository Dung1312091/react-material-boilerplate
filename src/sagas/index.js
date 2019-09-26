import { all } from "redux-saga/effects";
import { watchError } from "./errors";
export default function* rootSaga() {
  yield all([watchError()]);
}
