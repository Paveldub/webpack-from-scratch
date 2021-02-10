import React, { FC } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { MainTitleComponet } from "./Title";

export default {
  title: "Title Component",
  component: MainTitleComponet,
  decorators: [withKnobs],
};

export const MainTitleComponetStory: FC<{}> = () => {
  return (
    <MainTitleComponet
      title={text("your title", "Game of life")}
    ></MainTitleComponet>
  );
};
