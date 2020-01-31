import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer.jsx";
import createSagaMiddleware from "redux-saga";

export default function configureStore(initialState) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  //   if (module.hot) {
  //     module.hot.accept('../reducers', () => {
  //       const nextRootReducer = require('../reducers')
  //       store.replaceReducer(nextRootReducer)
  //     })
  //   }

  return store;
}
