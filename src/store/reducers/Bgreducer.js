import { BG_CHANGED } from "../actions/Types";

export const bgReducer = (state = { bg: "#ffff" }, action) => {
  const { type, payload } = action;

  switch (type) {
    case BG_CHANGED:
      return {
        bg: payload,
      };

    default:
      return state;
  }
};
