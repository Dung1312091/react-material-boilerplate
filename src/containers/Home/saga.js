import { put, takeLatest } from "redux-saga/effects";
import { reduxAction } from "../../store/action";
import requestApi from "../../apis/requestApi";

function* getCompanies() {
  try {
    const res = yield requestApi.get("/company", {
      $limit: 1000
    });
    const { data } = res;
    if (data) {
      yield put(reduxAction("GET_COMPANIES_SUCCESS", data));
    }
  } catch (err) {
    yield put(reduxAction("HANDLE_ERROR"));
  }
}

function* getSaleReportById(action) {
  try {
    yield put({
      type: "SHOW_LOADING"
    });
    const id = action.payload;
    const res = yield requestApi.get(`/company/${id}/reports`);
    const { data } = res;
    if (data) {
      console.log(data);
      yield put(reduxAction("GET_REPORT_BY_COMPANY_ID_SUCCESS", data));
    }
  } catch (err) {
    yield put(reduxAction("HANDLE_ERROR"));
  } finally {
    yield put({
      type: "HIDE_LOADING"
    });
  }
}
export function* watchHome() {
  yield takeLatest("GET_COMPANIES", getCompanies);
  yield takeLatest("GET_REPORT_BY_COMPANY_ID", getSaleReportById);
}
