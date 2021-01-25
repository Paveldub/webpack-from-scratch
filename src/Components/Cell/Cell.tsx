import React, { FC } from "react";
import "./cell.css";

interface CellProps {
  cell?: number[][];
}

export const CellComponent: FC<CellProps> = ({ cell }) => (
  <div className="cell"></div>
);
