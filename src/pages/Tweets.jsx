import { useState } from "react";
import { useMount } from "react-use";
import { ToastContainer } from "react-toastify";

import { fetchData } from "helpers/dataOperations";

import TweetList from "components/TweetList";
import LoadMore from "components/LoadMore";
import LinkButton from "components/LinkButton/LinkButton";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isDisable = tweets.length === 12 ? true : false;

  const getTweets = async () => {
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
  };

  const handleClick = () => {
    getTweets();
  };

  useMount(() => {
    getTweets();
  });

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {error && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        >
          {error}
        </ToastContainer>
      )}
      <LinkButton path="/" text="Back" />
      <TweetList tweets={tweets} setError={setError} />
      {!isLoading && <LoadMore onClick={handleClick} disable={isDisable} />}
    </main>
  );
};

export default Tweets;
