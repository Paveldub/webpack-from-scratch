import React, { FC } from "react";
import { Cell } from "./Cell.styles";

interface CellProps {
  filled?: string;
  onClick: (x: number, y: number) => void;
  x: number;
  y: number;
}

export const CellComponent: FC<CellProps> = ({
  filled,
  x = 0,
  y = 0,
  onClick,
}) => {
  const isFilled = Boolean(filled);

  return (
    <Cell isFilled={isFilled} onClick={() => !isFilled && onClick(x, y)}>
      {filled}
    </Cell>
  );
};