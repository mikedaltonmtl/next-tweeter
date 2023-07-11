// Current tweets display
import Tweet from "./Tweet";
import TimeAgo from 'react-timeago';

export default function TweetList({ tweets }) {

  const displayTweets = tweets.map(tweet => {

    const timeSinceTweet = <TimeAgo date={ tweet.createdAt } />;

    return (
      <Tweet
        key={ tweet.createdAt }
        avatarSrc={ tweet.user.avatar }
        avaterAlt={ "avatar for user " + tweet.user}
        userName={ tweet.user.name }
        handle={ tweet.user.handle }
        text={ tweet.content.text }
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
