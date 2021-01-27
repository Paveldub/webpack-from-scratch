import React, { FC } from "react";
import { CellStyles } from "./Cell.styles";

interface CellProps {
  filled?: string;
  onClick: (x: number, y: number) => void;
  x: number;
  y: number;
}

export const CellComponent: FC<CellProps> = ({
  children,
  x = 0,
  y = 0,
  onClick,
}) => {
  const isFilled = Boolean(children);

  return (
    <CellStyles isFilled={isFilled} onClick={() => !isFilled && onClick(x, y)}>
      {children}
    </CellStyles>
  );
};
