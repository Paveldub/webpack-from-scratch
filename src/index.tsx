import "./styles/styles.css";
import "./styles/styles.scss";

import React, { Children } from "react";
import { render } from "react-dom";
import { ClickCounter } from "./HW3/1/button";
import { MainFieldStyle } from "./HW3/1/button.styles";
import { MyComponent } from "./HW3/2-request/req";
import { ErrorBoundary } from "./HW3/2-request/errorBoundary";

const App = () => (
  <MainFieldStyle>
    <fieldset style={{ marginBottom: "20px" }}>
      <ClickCounter />
    </fieldset>
    <fieldset>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </fieldset>
  </MainFieldStyle>
);

render(<App />, document.getElementById("app"));
