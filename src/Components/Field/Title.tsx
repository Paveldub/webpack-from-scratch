import React, { FC } from "react";

interface Title {
  title: string;
}

export const MainTitleComponet: FC<Title> = ({ title }) => <h1>{title}</h1>;
