import React, { FC } from "react";
import "./shownumber.css";

interface ShowNumber {
  value?: number;
}

export const ShowNumberComponent: FC<ShowNumber> = ({ value }) => (
  <div className="cell-number">
    <span>Number: {value}</span>
  </div>
);
