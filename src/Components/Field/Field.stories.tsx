import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { FieldComponent } from "./Field";

export default {
  title: "Field component",
  component: FieldComponent,
  decorators: [withKnobs],
};

export const EmptyField = () => [
  <FieldComponent
    onClick={action("Clicked")}
    key={1}
    field={object("field", [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ])}
  ></FieldComponent>,
];

export const NonEmptyField = () => [
  <FieldComponent
    onClick={action("Clicked")}
    key={1}
    field={object("field", [
      ["x", "", "o"],
      ["", "o", ""],
      ["", "", "x"],
    ])}
  ></FieldComponent>,
];
