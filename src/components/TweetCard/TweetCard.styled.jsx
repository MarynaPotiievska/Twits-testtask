import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  width: 308px;
  height: 388px;
  padding: 36px;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const TweetImg = styled.img`
  margin-bottom: 88px;
`;

export const Devider = styled.span`
  position: absolute;
  top: 222px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 188px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background: #5736a3;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;
  color: #ebd8ff;

  &:first-of-type {
    margin-bottom: 16px;
  }

  &:last-of-type {
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
  width: 196px;
  padding: 14px 0;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);
  text-transform: uppercase;
  color: #373737;
  background-color: ${(props) => (props.following ? "#5CD3A8" : "#EBD8FF")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
