import React, { FC } from "react";
import "./shownumber.css";

interface ShowNumber {
  cellNum?: number;
}

export const ShowNumberComponent: FC<ShowNumber> = ({ cellNum }) => (
  <div className="cell-number">
    <span>Number: {cellNum}</span>
  </div>
);
