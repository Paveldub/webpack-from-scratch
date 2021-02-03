import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";

import { ClickCounter } from "./HW3/1/button";

const App = () => (
  <div className="container">
    <ClickCounter />
  </div>
);

render(<App />, document.getElementById("app"));
