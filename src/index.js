import React from "react";

import ReactDOM from "react-dom";
import App from "./routes/App";

import "./assets/styles/Global.scss";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
