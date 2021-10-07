import { combineReducers } from "redux";
import { bgReducer } from "./Bgreducer";

export const allReducers = combineReducers({
  bg: bgReducer,
});
