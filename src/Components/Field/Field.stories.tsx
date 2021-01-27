import React, { FC } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { FieldComponent } from "./Field";

export default {
  title: "Field component",
  component: FieldComponent,
  decorators: [withKnobs],
};

export const EmptyField = () => [
  <FieldComponent onClick={action("Clicked")} key={1}></FieldComponent>,
];
