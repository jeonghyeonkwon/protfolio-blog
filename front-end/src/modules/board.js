import { createAction, handleActions } from "redux-actions";
import * as boardApi from "../lib/api/board";
import produce from "immer";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "board/INITIALIZE";

const CHANGE_FIELD = "board/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const [FETCH, FETCH_SUCCESS, FETCH_FAILURE] =
  createRequestActionTypes("board/FETCH");
export const fetchBoard = createAction(FETCH, (page) => page);
const fetchBoardSaga = createRequestSaga(FETCH, boardApi.boardList);

export const [DETAIL, DETAIL_SUCCESS, DETAIL_FAILURE] =
  createRequestActionTypes("board/DETAIL");
const initialState = {
  boardList: {
    isFirst: false,
    isLast: false,
    currentPage: 1,
    totalPage: 0,
    totalElement: 0,
    startBlockPage: 0,
    endBlockPage: 0,
    dataList: [
      {
        id: 0,
        uuid: "",
        writer: "",
        createDate: "",
        views: 0,
      },
    ],
  },
  detail: {
    uuid: "",
    title: "",
    createDate: "",
    writer: "",
    views: 0,
    content: "",
  },
  write: {
    title: "",
    content: "",
    error: "",
  },
};

export default handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, (draft) => {
        draft.write[key] = value;
      }),
    [FETCH_SUCCESS]: (state, { payload: success }) =>
      produce(state, (draft) => {
        draft.boardList.isFirst = success.isFirst;
        draft.boardList.isLast = success.isLast;
        draft.boardList.currentPage = success.currentPage;
        draft.boardList.totalPage = success.totalPage;
        draft.boardList.totalElement = success.totalElement;
        draft.boardList.startBlockPage = success.startBlockPage;
        draft.boardList.endBlockPage = success.endBlockPage;
        draft.boardList.dataList = success.dataList;
      }),
    [FETCH_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {}),
  },
  initialState
);

export function* boardSaga() {
  yield takeLatest(FETCH, fetchBoardSaga);
}
