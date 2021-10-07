import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { allReducers } from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [sagaMiddleware];

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);
