import logo1x from "assets/logo@1x.png";
import logo2x from "assets/logo@2x.png";
import tweetImg1x from "assets/tweetImg@1x.png";
import tweetImg2x from "assets/tweetImg@2x.png";

import {
  Card,
  Logo,
  TweetImg,
  Devider,
  AvatarWrapper,
  Avatar,
  Text,
  Button,
} from "./TweetCard.styled";

const TweetCard = () => {
  return (
    <Card>
      <Logo srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Logo" />
      <TweetImg srcSet={`${tweetImg1x} 1x, ${tweetImg2x} 2x`} alt="Tweet" />
      <Devider />
      <AvatarWrapper>
        <Avatar src="https://loremflickr.com/62/62" alt="User avatar" />
      </AvatarWrapper>
      <Text>
        <span>777</span> tweets
      </Text>
      <Text>
        <span>100501</span> Followers
      </Text>
      <Button type="button">Follow</Button>
    </Card>
  );
};

export default TweetCard;
