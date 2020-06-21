import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// <<<<<<< HEAD
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
  document.getElementById("root")
);
// =======
// ReactDOM.render(<App />, document.getElementById("root"));
// >>>>>>> e2eb227e09e89f106dd4cfa7e2551065d9cc5d9c

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
module.hot.accept();
