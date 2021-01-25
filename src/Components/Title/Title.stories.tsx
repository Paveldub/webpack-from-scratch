import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { MainTitleComponet } from "./Title";

export default {
  title: "TitleComponent",
  decorators: [withKnobs],
};

export const MainTitleComponetStory: React.FC<{}> = () => {
  return <MainTitleComponet title={"Game of life"} />;
};
