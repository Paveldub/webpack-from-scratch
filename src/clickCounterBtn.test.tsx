import React from "react";
import { shallow } from "enzyme";

import { ClickCounterBtn } from "./clickCounterBtn";

describe("Test Button component", () => {
  it("Test click event", () => {
    const incMock = jest.fn();

    const buttonElem = shallow(
      <ClickCounterBtn increment={incMock}>{1}</ClickCounterBtn>
    );

    expect(buttonElem.text()).toEqual("Clicked 1 times!");

    buttonElem.find("button").simulate("click");

    expect(incMock.mock.calls.length).toBe(1);
  });
});
