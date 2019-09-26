import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router/immutable";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';
import createReducer from "../store/reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();
const middleware = history => {
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    );
    // return applyMiddleware(sagaMiddleware, routerMiddleware(history), logger);
  }
  return applyMiddleware(sagaMiddleware, routerMiddleware(history));
};

export default function configureStore(initialState, history) {
  const store = createStore(createReducer(), initialState, middleware(history));
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  store.runSaga(rootSaga);
  return store;
}
