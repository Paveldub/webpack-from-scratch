import React, { FC } from "react";
import { CellComponent } from "./Cell";
import { FieldStyle } from "./Field.styles";

interface FieldProps {
  field: string[][];
  onClick: (x: number, y: number) => void;
}

export const FieldComponent: FC<FieldProps> = ({ field, onClick }) => (
  <FieldStyle>
    {field.map((row, y) => [
      ...row.map((filled: string, x) => (
        <CellComponent
          key={`${x}_${y}`}
          filled={filled}
          x={x}
          y={y}
          onClick={onClick}
        />
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </FieldStyle>
);
