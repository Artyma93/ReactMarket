import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./views/LandingPage/LangingPage";
import Test1 from "./views/Test1Page/Test1";
import Test2 from "./views/Test2Page/Test2";

// import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { reducer } from "./components/rootReducer";
import { watcherSaga } from "./components/rootSaga";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create a redux store with our reducer above and middleware
let store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/test1" component={Test1} exact></Route>
        <Route path="/test2" component={Test2} exact></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
