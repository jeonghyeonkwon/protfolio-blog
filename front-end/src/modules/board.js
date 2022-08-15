import { createAction, handleActions } from "redux-actions";

import produce from "immer";

const INITIALIZE = "board/INITIALIZE";

const CHANGE_FIELD = "board/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
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
  },
  initialState
);
