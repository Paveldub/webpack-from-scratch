import React, { FC } from "react";

interface ButtonProps {
  content: string;
  increment: () => void;
  bgColor: string;
}

export const ButtonElem: FC<ButtonProps> = ({
  content = 0,
  increment,
  bgColor = "",
}) => (
  <button onClick={increment} bgColor={bgColor}>
    {content}
  </button>
);
