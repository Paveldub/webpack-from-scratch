import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";

import { MainTitleComponet } from "./Components/Title/Title";

const App = () => (
  <div className="container">
    <MainTitleComponet title={"Game of life"} />
  </div>
);

render(<App />, document.getElementById("app"));
