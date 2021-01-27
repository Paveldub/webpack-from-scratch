import React from "react";
import { shallow } from "enzyme";

import { CellComponent } from "./Cell";

describe("test cell component", () => {
  it("test click event", () => {
    const onClick = jest.fn();

    const cellClick = shallow(
      <CellComponent x={1} y={1} filled={"test"} onClick={onClick}>
        {1}
      </CellComponent>
    );

    cellClick.simulate("click");

    expect(onClick).not.toHaveBeenCalled();
  });
});
