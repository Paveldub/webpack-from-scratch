import React, { FC } from "react";

interface ShowNumber {
  cellNum: number;
  onClick: () => void;
}

export const ShowNumberComponent: FC<ShowNumber> = ({ cellNum, onClick }) => {
  <div className="cell-number" onClick={onClick}>
    {cellNum}
  </div>;
};
