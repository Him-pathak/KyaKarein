import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Provider } from "react-redux";
import store from "./state/store";

TimeAgo.addDefaultLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

