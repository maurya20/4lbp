import { put, takeLatest, all } from "redux-saga/effects";
import { BG_CHANGED, CHANGE_BG } from "../actions/Types";

function* updateBg(action) {
  yield put({ type: BG_CHANGED, payload: action.payload });
}
function* actionWatcher() {
  yield takeLatest(CHANGE_BG, updateBg);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
