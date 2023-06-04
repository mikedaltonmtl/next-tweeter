// Individual Tweet to be displayed
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function Tweet(props) {

  return (
    <article className="tweet">
      <header>
        <Image
          src={ props.avatarSrc }
          alt={ props.avaterAlt }
          width={ 64 }
          height={ 64 }
          priority
        />
        <p>{ props.userName }</p>
        <p className="handle">{ props.handle }</p>
      </header>
      <p className="tweet-text">{ props.text }</p>
      <footer>
        <p>{ props.timeAgo }</p>
        <FontAwesomeIcon
          icon={ faFlag }
          style={{ fontSize: 18 }}
          title="flag this"
          className="tweetIcon"
        />
        <FontAwesomeIcon
          icon={ faRetweet }
          style={{ fontSize: 18 }}
          title="re-tweet"
          className="tweetIcon"
        />
        <FontAwesomeIcon
          icon={ faHeart }
          style={{ fontSize: 18 }}
          className="tweetIcon"
        />
      </footer>
    </article>
  );
}
