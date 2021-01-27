import React, { FC } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { CellComponent } from "./Cell";

export default {
  title: "Cell component",
  component: CellComponent,
  decorators: [withKnobs],
};

export const NonFilledCell = () => [
  <CellComponent
    key={1}
    onClick={action("Clicked")}
    x={number("x", 1)}
    y={number("y", 2)}
  />,
  <CellComponent
    key={2}
    onClick={action("Clicked")}
    x={number("x", 3)}
    y={number("y", 4)}
  />,
];

// export const FilledCellWithX: FC<{}> = () => {
//   return (
//     <CellComponent
//       onClick={action("Cell clicked")}
//       filled={text("filled with", "x")}
//       x={number("x", 1)}
//       y={number("y", 23)}
//     />
//   );
// };

// export const FilledCellWithY: FC<{}> = () => {
//   return (
//     <CellComponent
//       onClick={action("Cell clicked")}
//       filled={text("filled with", "y")}
//       x={number("x", 1)}
//       y={number("y", 23)}
//     />
//   );
// };
