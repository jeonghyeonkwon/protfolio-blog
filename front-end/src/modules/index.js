import { combineReducers } from "redux";
import register, { registerSaga } from "./register";
import auth, { authSaga } from "./auth";
import board, { boardSaga } from "./board";
import loading from "./loading";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({ loading, register, auth, board });

export function* rootSaga() {
  yield all([registerSaga(), authSaga(), boardSaga()]);
}
export default rootReducer;
