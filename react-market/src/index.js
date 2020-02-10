import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./pages/app";
import configureStore from "./store/configureStore";

import axios from "axios";

// import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

// console.log("index");

// axios.get('https://localhost:44349/weatherforecast')
//   .then((response) => {
//     console.log(response.data);
//     // console.log(response.status);
//     // console.log(response.statusText);
//     // console.log(response.headers);
//     // console.log(response.config);
//   });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
