import React, { FC } from "react";
// import "./cell.css";

interface CellProps {
  filled?: string;
  onClick: (x: number, y: number) => void;
  x: number;
  y: number;
}

export const CellComponent: FC<CellProps> = ({ filled, x, y, onClick }) => {
  if (filled) {
    return <span className="cell cell-filled">{filled}</span>;
  }
  return (
    <button className="cell cell-empty" onClick={() => onClick(x || 0, y || 0)}>
      {" "}
    </button>
  );
};
