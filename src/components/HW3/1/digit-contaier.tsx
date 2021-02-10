import React, { FC } from "react";

interface Digit {
  digitElem: number;
}

export const MainTitleComponet: FC<Digit> = ({ digitElem }) => (
  <h1>{digitElem}</h1>
);
