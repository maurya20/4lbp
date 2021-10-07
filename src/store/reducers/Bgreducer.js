import { BG_CHANGE_FAIL, BG_CHANGE_SUCCESS } from "../actions/Types";

export const bgReducer = (state = { bg: "red" }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BG_CHANGE_SUCCESS:
      return {
        bg: payload,
      };
    case BG_CHANGE_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
