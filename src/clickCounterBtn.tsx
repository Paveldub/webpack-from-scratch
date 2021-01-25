import React, { FC } from "react";

interface Prop {
  increment: () => void;
  children?: number;
}

export const ClickCounterBtn: FC<Prop> = ({ increment, children = 0 }) => (
  <button
    style={{
      color: "white",
      backgroundColor: "black",
      width: "150px",
      height: "50px",
    }}
    onClick={increment}
  >
    Clicked {children} times!
  </button>
);
