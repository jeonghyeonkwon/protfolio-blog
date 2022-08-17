import { createAction, handleActions } from "redux-actions";

import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

import * as userApi from "../lib/api/user";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "user/INITIALIZE";

const CHANGE_FIELD = "user/CHANGE_FIELD";

const VALIDATE_CHANGE = "user/VALIDATE_CHANGE";

export const validateChange = createAction(VALIDATE_CHANGE);

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ type, key, value }) => ({ type, key, value })
);

export const [VALIDATE, VALIDATE_SUCCESS, VALIDATE_FAILURE] =
  createRequestActionTypes("user/VALIDATE");
export const validateUser = createAction(VALIDATE, (userId) => userId);
const validateSaga = createRequestSaga(VALIDATE, userApi.validateUserId);

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("user/LOGIN");
export const loginUser = createAction(LOGIN, (form) => form);
const loginSaga = createRequestSaga(LOGIN, userApi.login);

export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("user/REGISTER");
export const registerUser = createAction(REGISTER, (form) => form);
const registerSaga = createRequestSaga(REGISTER, (form) => form);

const initialState = {
  register: {
    validate: false,
    userId: "",
    userPassword: "",
    success: "",
    error: {
      serverError: "",
      userId: "",
      userPassword: "",
    },
  },
  login: {
    userId: "",
    userPassword: "",
    success: "",
    error: "",
  },
};

export default handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { type, key, value } }) =>
      produce(state, (draft) => {
        if (type === "login") {
          draft.login[key] = value;
        } else {
          draft.register[key] = value;
        }
      }),
    [VALIDATE_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.register.success = "";
        draft.register.validate = payload;
      }),
    [VALIDATE_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.register.validate = true;
        draft.register.success = success;
      }),
    [VALIDATE_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.register.validate = false;
      }),
    [REGISTER_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.register.success = success;
      }),
    [REGISTER_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        if (error.response.status === 400) {
          draft.register.error = error.response.data;
        } else {
          draft.register.error.serverError = "다른 에러";
        }
      }),
  },
  initialState
);

export function* userSaga() {
  yield takeLatest(VALIDATE, validateSaga);
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}
