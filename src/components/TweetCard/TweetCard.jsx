import PropTypes from "prop-types";

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

const TweetCard = ({ tweet }) => {
  return (
    <Card>
      <Logo srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Logo" />
      <TweetImg srcSet={`${tweetImg1x} 1x, ${tweetImg2x} 2x`} alt="Tweet" />
      <Devider />
      <AvatarWrapper>
        <Avatar src={tweet.avatar} alt={tweet.user} />
      </AvatarWrapper>
      <Text>
        <span>{tweet.tweets}</span> tweets
      </Text>
      <Text>
        <span>{tweet.followers}</span> Followers
      </Text>
      <Button type="button">Follow</Button>
    </Card>
  );
};

TweetCard.propTypes = {
  tweet: PropTypes.exact({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default TweetCard;
