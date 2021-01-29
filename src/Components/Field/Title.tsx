import React, { FC } from "react";

interface TitleProps {
  title: string;
}

export const MainTitleComponet: FC<TitleProps> = ({ title }) => (
  <h1>{title}</h1>
);
