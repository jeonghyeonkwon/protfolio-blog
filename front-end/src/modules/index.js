import { combineReducers } from "redux";
import user, { userSaga } from "./user";
import board from "./board";
import loading from "./loading";
import { all } from "redux-saga/effects";
const rootReducer = combineReducers({ loading, user, board });

export function* rootSaga() {
  yield all([userSaga()]);
}
export default rootReducer;
