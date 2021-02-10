import React, { FC } from "react";

interface ButtonProps {
  content: string;
  increment: () => void;
  backgroundColor: any;
}

export const ButtonElem: FC<ButtonProps> = ({
  content = 0,
  increment,
  backgroundColor,
}) => (
  <button onClick={increment} style={backgroundColor}>
    {content}
  </button>
);
