import React from "react";
import { shallow } from "enzyme";

import { CellComponent } from "./Cell";

describe("test cell component", () => {
  it("test click event", () => {
    const incMock = jest.fn();

    const cellClick = shallow(
      <CellComponent x={1} y={1} filled={"test"} onClick={incMock}>
        {1}
      </CellComponent>
    );

    cellClick.simulate("click");
  });
});
