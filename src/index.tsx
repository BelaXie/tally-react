import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(
  //React.StrictMode没有实际效果，会给一些警告，帮助我们更好的写代码
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
