import React from "react";
import { render } from "react-dom";

import { MainTitleComponet } from "./Components/Field/Title";
import { FieldComponent } from "./Components/Field/Field";
import { ContainerStyles } from "./index.styles";

const App = () => (
  <ContainerStyles>
    <MainTitleComponet title="Game of life" />
    <FieldComponent
      field={[["0", "", "0", "0", "", "0", "0", "", "0"]]}
      onClick={(e) => console.log(e)}
    />
  </ContainerStyles>
);

render(<App />, document.getElementById("app"));
