import { createAction, handleActions } from "redux-actions";

import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

import * as userApi from "../lib/api/user";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "login/INITIALIZE";
const EXCLUDE_TOKEN_INITIALIZE = "login/EXCLUDE_TOKEN_INITIALIZE";
const CHANGE_FIELD = "login/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const excludeTokenInit = createAction(EXCLUDE_TOKEN_INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ type, key, value }) => ({ type, key, value })
);

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("login/LOGIN");
export const loginUser = createAction(LOGIN, (form) => form);
const loginUserSaga = createRequestSaga(LOGIN, userApi.login);

export const [TOKEN, TOKEN_SUCCESS, TOKEN_FAILURE] =
  createRequestActionTypes("login/TOKEN");

export const tokenCheck = createAction(TOKEN, (token) => token);
const tokenCheckSaga = createRequestSaga(TOKEN, userApi.tokenValidate);

const initialState = {
  auth: {
    token: "",
    userId: "",
  },
  login: {
    userId: "",
    userPassword: "",

    error: "",
  },
};
export default handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [EXCLUDE_TOKEN_INITIALIZE]: (state) =>
      produce(state, (draft) => {
        draft.login.userId = "";
        draft.login.userPassword = "";
        draft.login.error = "";
      }),
    [CHANGE_FIELD]: (state, { payload: { type, key, value } }) =>
      produce(state, (draft) => {
        draft.login[key] = value;
      }),

    [LOGIN_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.auth.token = success;
      }),
    [LOGIN_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.login.error = "로그인에 실패했습니다. 다시 시도해 주세요";
      }),
    [TOKEN_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.auth.token = success.token;
        draft.auth.userId = success.userId;
      }),
    [TOKEN_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.auth.token = "";
        draft.auth.userId = "";
        localStorage.removeItem("token");
      }),
  },
  initialState
);
export function* authSaga() {
  yield takeLatest(TOKEN, tokenCheckSaga);
  yield takeLatest(LOGIN, loginUserSaga);
}
