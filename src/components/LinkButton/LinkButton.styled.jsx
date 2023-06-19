import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkBtn = styled(Link)`
  display: block;
  width: 196px;
  padding: 14px 0;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  color: #ebd8ff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;

  &:hover {
    background: #ebd8ff;
    color: #471ca9;
  }
`;
