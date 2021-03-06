import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store/Reducers";
import reduxthunk from "redux-thunk";
import axios from "axios";
window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxthunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
