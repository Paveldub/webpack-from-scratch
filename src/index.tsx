import React, { Children } from "react";
import { render } from "react-dom";
import { ClickCounter } from "./components/HW3/1/button";
import { MyComponent } from "./components/HW3/2-request/req";
import { ErrorBoundary } from "./components/HW3/2-request/errorBoundary";

const App = () => (
  <>
    <fieldset style={{ marginBottom: "20px" }}>
      <ClickCounter />
    </fieldset>
    <fieldset>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </fieldset>
  </>
);

render(<App />, document.getElementById("root"));
