import logo1x from "assets/logo@1x.png";
import logo2x from "assets/logo@2x.png";
import tweetImg1x from "assets/tweetImg@1x.png";
import tweetImg2x from "assets/tweetImg@2x.png";

const TweetCard = () => {
  return (
    <div>
      <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="logo" />
      <img srcSet={`${tweetImg1x} 1x, ${tweetImg2x} 2x`} alt="logo" />
    </div>
  );
};

export default TweetCard;
