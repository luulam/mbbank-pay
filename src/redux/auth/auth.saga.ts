import { put, all, takeLatest, call } from "redux-saga/effects";
import { TYPES_AUTH, ACTIONS_AUTH } from "./";
import { toastError, toastSuccess } from "../../helpers/toast.helper";
import AuthService from "services/auth.service";
import * as _ from "lodash";

function* loginRequest({ params }: any) {
  try {
    const response = yield call(AuthService.login, params);
    yield put(ACTIONS_AUTH.loginSuccess(response));
  } catch (error) {
    yield put(ACTIONS_AUTH.loginError(error));
    toastError(error);
  }
}

export default function* authSaga() {
  yield all([yield takeLatest(TYPES_AUTH.LOGIN_REQUEST, loginRequest)]);
}
