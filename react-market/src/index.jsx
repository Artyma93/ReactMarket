import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./pages/app";
import configureStore from "./store/configureStore";

// import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

console.log("index");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
