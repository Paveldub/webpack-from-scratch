import React from "react";
import { MainTitleComponet } from "./Title";

export default {
  title: "TitleComponent",
  component: MainTitleComponet,
};

export const MainTitleComponetStory: React.FC<{}> = () => {
  return <MainTitleComponet title={"Game of life"} />;
};
