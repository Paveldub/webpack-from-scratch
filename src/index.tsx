import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";

import { MainTitleComponet } from "./Components/Title/Title";
import { FieldComponent } from "./Components/Field/Field";

const App = () => (
  <div className="container">
    <MainTitleComponet title={"Game of life"} />
    <FieldComponent field={[["0"]]} onClick={() => console.log("clicked")} />
  </div>
);

render(<App />, document.getElementById("app"));
