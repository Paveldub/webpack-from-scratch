import React, { FC } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";

import { ClickCounterBtn } from "./clickCounterBtn";

export default {
  title: "ClickCounterButton",
  decorators: [withKnobs],
};

export const ClickCounterButtonStory: FC<{}> = () => {
  const count = number("Number", 0);

  return (
    <ClickCounterBtn increment={action("IncrementTest")}>
      {count}
    </ClickCounterBtn>
  );
};
