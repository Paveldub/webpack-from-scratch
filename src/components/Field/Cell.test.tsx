import React from "react";
import { shallow } from "enzyme";

import { CellComponent } from "./Cell";

describe("test cell component", () => {
  it("test click event", () => {
    const onClick = jest.fn();

    const cellClick = shallow(
      <CellComponent onClick={onClick} x={1} y={1}></CellComponent>
    );

    cellClick.simulate("click");
  });
});
