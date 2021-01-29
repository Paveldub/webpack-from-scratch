import React, { FC } from "react";
import { CellComponent } from "./Cell";
import { MainFieldStyle } from "./Field.styles";

interface FieldProps {
  field: string[][];
  onClick: (x: number, y: number) => void;
}

export const FieldComponent: FC<FieldProps> = ({ field, onClick }) => (
  <MainFieldStyle>
    {field.map((row, y) => [
      row.map((children: string, x) => (
        <CellComponent
          key={`${x}_${y}`}
          filled={children}
          x={x}
          y={y}
          onClick={onClick}
        />
      )),
      y !== row.length - 1 ? <br key={y} /> : null,
    ])}
  </MainFieldStyle>
);
