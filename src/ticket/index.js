import React, { ReactDom } from "react";
import { Provider } from "react-redux";

import "normalize.css/normalize.css";

import store from "./store";
import "./index.css";
import App from "./App.jsx";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root")
);
