import React from "react";
import { shallow } from "enzyme";

import { CellComponent } from "./Cell";

describe("test cell component", () => {
  it("test click event", () => {
    const incMock = jest.fn();

    const cellClick = shallow(
      <CellComponent x={10} y={10} filled={"test"} onClick={incMock}>
        {1}
      </CellComponent>
    );

    expect(cellClick.text()).toEqual("1");

    cellClick.find("button").simulate("click");

    expect(incMock.mock.calls.length).toBe(1);
  });
});

// cell cell - empty
// cell cell - filled
