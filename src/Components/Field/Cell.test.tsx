import React from "react";
import { shallow } from "enzyme";

import { CellComponent } from "./Cell";

describe("test cell component", () => {
  it("test click event", () => {
    const onClick = jest.fn();

    const cellClick = shallow(
      <CellComponent x={1} y={1} onClick={onClick}></CellComponent>
    );

    cellClick.simulate("click");
  });
});
