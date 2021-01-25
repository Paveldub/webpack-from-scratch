import React, { FC } from "react";
import { CellComponent } from "../Cell/Cell";
import "./field.css";

interface FieldProps {
  field?: number[][];
}

export const FieldComponent: FC<FieldProps> = ({ field }) => (
  <div className="field">
    <CellComponent clickCell={() => console.log("clicked")} />
  </div>
);
