import styled from "@emotion/styled";
import { css } from "@emotion/core";

const mainCellClassName = css`
  width: 25px;
  height: 25px;
  border: 1px solid;
  display: inline-block;
  border-radius: 10px;
  line-height: 25px;
  text-align: center;
  margin: 5px;
  vertical-align: bottom;
`;

const IfEmptyCell = css`
  border-color: gray;
  outline: none;
`;

const IfFilledCell = css`
  border-color: lightgray;
  color: gray;
`;

interface IsFilledProps {
  isFilled: boolean;
}

export const Cell = styled.button`
  ${mainCellClassName};
  ${({ isFilled }: IsFilledProps) => (isFilled ? IfFilledCell : IfEmptyCell)}
`;