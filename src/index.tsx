import "./styles/styles.css";
import "./styles/styles.scss";

import React from "react";
import { render } from "react-dom";

import { MainTitleComponet } from "./Components/Title/Title";
import { FieldComponent } from "./Components/Field/Field";
import { ShowNumberComponent } from "./Components/showNumber/showNumber";

const App = () => (
  <div className="container">
    <MainTitleComponet title={"Game of life"} />
    <FieldComponent
      field={[["0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0"]]}
      onClick={(e) => console.log(e)}
    />
    <ShowNumberComponent />
  </div>
);

render(<App />, document.getElementById("app"));
