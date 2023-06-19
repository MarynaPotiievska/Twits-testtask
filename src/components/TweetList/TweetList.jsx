import PropTypes from "prop-types";

import TweetCard from "components/TweetCard/TweetCard";

import { List } from "./TweetList.styled";

const TweetList = ({ tweets, setError }) => {
  return (
    <List>
      {tweets.length > 0 &&
        tweets.map((tweet) => {
          return (
            <li key={tweet.id}>
              <TweetCard tweet={tweet} setError={setError} />
            </li>
          );
        })}
    </List>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  setError: PropTypes.func.isRequired,
};

export default TweetList;
