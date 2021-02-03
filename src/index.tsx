import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";
// import logo from "./assets/webpack-logo";
// import { ClickCounter } from "./clickCounter";
import { CounterBtn } from "./HW3/1/button";

const App = () => (
  <div className="container">
    <CounterBtn />
  </div>
);

render(<App />, document.getElementById("app"));
