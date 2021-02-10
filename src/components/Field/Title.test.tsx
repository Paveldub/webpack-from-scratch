import React from "react";
import { shallow } from "enzyme";

import { MainTitleComponet } from "./Title";

describe("test title", () => {
  it("should render text for h1", () => {
    const wrapper = shallow(
      <MainTitleComponet title={"Game of lifeZ"}></MainTitleComponet>
    );
    expect(wrapper.text()).toEqual("Game of lifeZ");
  });
});
