import { useState, useEffect } from "react";

import TweetCard from "components/TweetCard/TweetCard";
import { fetchData } from "helpers/dataOperations";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTweets = async () => {
      try {
        setIsLoading(true);
        const res = await fetchData();
        setTweets(res);
      } catch (error) {
        setError("Sorry, something went wrong. Please, try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getTweets();
  }, []);

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {tweets.length > 0 &&
        tweets.map((tweet) => (
          <li key={tweet.id}>
            <TweetCard tweet={tweet} />
          </li>
        ))}
      {error && <li>{error}</li>}
    </ul>
  );
};

export default TweetList;
