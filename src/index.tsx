import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <pre />
    <div className="box">
      <h2>Sass example</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
