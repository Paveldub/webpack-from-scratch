import React, { FC } from "react";
import "./shownumber.css";

interface ShowNumber {
  cellNum?: number;
  onClick?: () => void;
}

export const ShowNumberComponent: FC<ShowNumber> = ({ cellNum, onClick }) => (
  <div className="cell-number" onClick={onClick}>
    <span>Number: {cellNum}</span>
  </div>
);
