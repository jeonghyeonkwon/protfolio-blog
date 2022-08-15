import { createAction, handleActions } from "redux-actions";

import produce from "immer";

const INITIALIZE = "user/INITIALIZE";

const CHANGE_FIELD = "user/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ type, key, value }) => ({ type, key, value })
);

const initialState = {
  login: {
    userId: "",
    userPassword: "",
    error: "",
  },
  register: {
    userId: "",
    userPassword: "",
    error: {
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
        if (type === "login") {
          draft.login[key] = value;
        } else {
          draft.register[key] = value;
        }
      }),
  },
  initialState
);
