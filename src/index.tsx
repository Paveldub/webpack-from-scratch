import React from "react";
import { render } from "react-dom";

import { MainTitleComponet } from "./components/Field/Title";
import { FieldComponent } from "./components/Field/Field";
import { ContainerStyles } from "./index.styles";
// import { Button } from "./Components/Buttons/button";

const App = () => (
  <ContainerStyles>
    <MainTitleComponet title="Board size" />

    <FieldComponent field={[[""]]} />
  </ContainerStyles>
);

render(<App />, document.getElementById("root"));
