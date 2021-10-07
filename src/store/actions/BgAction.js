import { BG_CHANGE_FAIL, BG_CHANGE_SUCCESS } from "./Types";

export const changeBg = (bg) => async (dispatch) => {
  try {
    dispatch({ type: BG_CHANGE_SUCCESS, payload: bg });
  } catch (error) {
    dispatch({ type: BG_CHANGE_FAIL, payload: "Bg Change Fail" });
  }
};
