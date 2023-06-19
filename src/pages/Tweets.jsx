import { useState, useEffect, useCallback } from "react";

import { fetchData } from "helpers/dataOperations";

import TweetList from "components/TweetList";
import LoadMore from "components/LoadMore";
import LinkButton from "components/LinkButton/LinkButton";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isDisable = tweets.length === 12 ? true : false;

  const getTweets = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetchData();
      setTweets((prevState) => [
        ...prevState,
        res[prevState.length],
        res[prevState.length + 1],
        res[prevState.length + 2],
      ]);
    } catch (error) {
      setError("Sorry, something went wrong. Please, try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleClick = () => {
    getTweets();
  };

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {error && <li>{error}</li>}
      <LinkButton path="/" text="Back" />
      <TweetList tweets={tweets} />
      <LoadMore onClick={handleClick} disable={isDisable} />
    </main>
  );
};

export default Tweets;
