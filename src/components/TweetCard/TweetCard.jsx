import PropTypes from "prop-types";
import { useState } from "react";

import logo1x from "assets/logo@1x.png";
import logo2x from "assets/logo@2x.png";
import tweetImg1x from "assets/tweetImg@1x.png";
import tweetImg2x from "assets/tweetImg@2x.png";

import { updateData } from "helpers/dataOperations";

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

const TweetCard = ({ tweet, setError }) => {
  const followedTweets = JSON.parse(localStorage.getItem("followedId")) ?? [];

  const isFollowed = followedTweets.includes(tweet.id);
  const [following, setFollowing] = useState(isFollowed);

  const updateFollowers = async () => {
    try {
      await updateData(tweet.id, tweet.followers);
    } catch (error) {
      setError("Sorry, something went wrong. Please, try again.");
    }
  };

  const handleClick = () => {
    const currentFollowing =
      JSON.parse(localStorage.getItem("followedId")) ?? [];
    setFollowing((prevState) => !prevState);
    if (following) {
      tweet.followers -= 1;
      const index = currentFollowing.findIndex((id) => id === tweet.id);
      console.log("index", index);
      console.log("id", tweet.id, "followers", tweet.followers);
      currentFollowing.splice(index, 1);
    } else {
      tweet.followers += 1;
      currentFollowing.push(tweet.id);
      console.log("id", tweet.id, "followers", tweet.followers);
    }
    localStorage.setItem("followedId", JSON.stringify(currentFollowing));
    updateFollowers();
  };

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
      <Button type="button" following={following} onClick={handleClick}>
        {following ? "Following" : "Follow"}
      </Button>
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
  setError: PropTypes.func.isRequired,
};

export default TweetCard;
