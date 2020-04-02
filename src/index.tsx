import React from "react";
import ReactDOM from "react-dom";
import CoreApplication from "./core";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CoreApplication />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
