import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";
import { ClickCounter } from "./HW3/1/button";
import { MainFieldStyle } from "./HW3/1/button.styles";

const App = () => (
  <MainFieldStyle>
    <ClickCounter />
  </MainFieldStyle>
);

render(<App />, document.getElementById("app"));
