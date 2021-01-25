import React, { FC } from "react";
import "./cell.css";

interface CellProps {
  cell?: number[][];
  clickCell: () => void;
}

export const CellComponent: FC<CellProps> = ({ cell, clickCell }) => (
  <div className="cell" onClick={clickCell}></div>
);
