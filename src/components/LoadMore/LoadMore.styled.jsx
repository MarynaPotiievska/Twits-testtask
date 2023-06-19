import styled from "@emotion/styled";

export const LoadButton = styled.button`
  display: block;
  width: 196px;
  margin: 0 auto;
  padding: 14px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #ebd8ff;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  &:hover {
    background: #ebd8ff;
    color: #471ca9;
  }

  &:disabled {
    background: rgb(55, 55, 55, 0.8);
    color: #ebd8ff;
    cursor: not-allowed;
  }
`;
