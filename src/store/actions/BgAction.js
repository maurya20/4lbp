import { CHANGE_BG } from "./Types";

export const changeBg = (bg) => ({
  type: CHANGE_BG,
  payload: bg,
});
