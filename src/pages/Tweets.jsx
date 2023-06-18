import { useState, useEffect } from "react";

import { fetchData } from "helpers/dataOperations";

import TweetList from "components/TweetList";
import LoadMore from "components/LoadMore";

const Tweets = () => {
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
    <main>
      {isLoading && <p>Loading...</p>}
      {error && <li>{error}</li>}
      <TweetList tweets={tweets} />
      <LoadMore />
    </main>
  );
};

export default Tweets;
