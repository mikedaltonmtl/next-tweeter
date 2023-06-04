// Current tweets display
import Tweet from "./Tweet";
import TimeAgo from 'react-timeago';

// escape any 'unsafe' characters from the tweet content
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

export default function TweetList({ tweets }) {

  const displayTweets = tweets.map(tweet => {

    const safeTweetContent = escape(tweet.content.text);
    const timeSinceTweet = <TimeAgo date={ tweet.createdAt } />;

    return (
      <Tweet
        key={ tweet.createdAt }
        avatarSrc={ tweet.user.avatar }
        avaterAlt={ "avatar for user " + tweet.user}
        userName={ tweet.user.name }
        handle={ tweet.user.handle }
        text={ safeTweetContent }
        timeAgo={ timeSinceTweet }
      />
    );
  });
  
  return (
    <section id="tweets-container">
      { displayTweets }
    </section>
  );
}
