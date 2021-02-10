import React, { FC } from "react";
import { CellComponent } from "./Cell";
import styled from "@emotion/styled";

export const MainFieldStyle = styled.div`
  display: inline-block;
  padding: 10px;
  border: 2px solid lightgray;
`;

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
