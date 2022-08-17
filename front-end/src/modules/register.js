import { createAction, handleActions } from "redux-actions";

import produce from "immer";

import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

import * as userApi from "../lib/api/user";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "register/INITIALIZE";

const CHANGE_FIELD = "register/CHANGE_FIELD";

const VALIDATE_CHANGE = "register/VALIDATE_CHANGE";

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

export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("user/REGISTER");
export const registerUser = createAction(REGISTER, (form) => form);
const registerUserSaga = createRequestSaga(REGISTER, userApi.register);

const initialState = {
  register: {
    validate: false,
    userId: "",
    userPassword: "",
    validateMsg: {
      success: "",
      error: "",
    },
    error: {
      serverError: "",
      userId: "",
      userPassword: "",
    },
  },
};

export default handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { type, key, value } }) =>
      produce(state, (draft) => {
        draft.register[key] = value;
      }),
    [VALIDATE_CHANGE]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.register.success = "";
        draft.register.validate = payload;
      }),
    [VALIDATE_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.register.validateMsg.error = "";
        draft.register.validate = true;
        draft.register.validateMsg.success = success;
      }),
    [VALIDATE_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.register.validateMsg.success = "";
        draft.register.validate = false;
        draft.register.validateMsg.error = error.response.data.data;
      }),
    [REGISTER_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.register.success = "회원가입이 완료되었습니다.";
      }),
    [REGISTER_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.register.error.userId = "";
        draft.register.error.userPassword = "";

        if (error.response.status === 400) {
          if (!Array.isArray(error.response.data.data)) {
            draft.register.error.serverError = error.response.data.data;
          } else {
            error.response.data.data.forEach((obj) => {
              const message = obj.defaultMessage;
              const fieldName = obj.fieldName;
              draft.register.error[fieldName] = message;
            });
          }
        } else {
          draft.register.error.serverError = "잠시후 다시 시도해 주세요";
        }
      }),
  },
  initialState
);

export function* registerSaga() {
  yield takeLatest(VALIDATE, validateSaga);
  yield takeLatest(REGISTER, registerUserSaga);
}
