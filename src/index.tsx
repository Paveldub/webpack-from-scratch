import React from "react";
import { render } from "react-dom";

import { MainTitleComponet } from "./Components/Field/Title";
import { FieldComponent } from "./Components/Field/Field";
import { ContainerStyles } from "./index.styles";
// import { Button } from "./Components/Buttons/button";

const App = () => (
  <ContainerStyles>
    <MainTitleComponet title="Board size" />

    <FieldComponent field={[[""]]} onClick={(e) => console.log(e)} />
  </ContainerStyles>
);

render(<App />, document.getElementById("app"));
