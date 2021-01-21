import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

import { ClickCounterBtn } from "./clickCounterBtn";

export default {
  title: "ClickCounterButton",
  decorators: [withKnobs],
};

export const ClickCounterButtonStory: React.FC<{}> = () => {
  const count = number("Number", 0);

  return (
    <ClickCounterBtn increment={action("Increment")}>{count}</ClickCounterBtn>
  );
};
