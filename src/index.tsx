import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";
import logo from "./assets/webpack-logo";
import { ClickCounter } from "./clickCounter";

const App = () => (
  <div className="container">
    <h1>Webpack builder</h1>
    <hr />
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <pre />
    <div className="box">
      <h2>styles example</h2>
    </div>
    <div className="btn-wrapper">
      <ClickCounter start={1.5} />
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
