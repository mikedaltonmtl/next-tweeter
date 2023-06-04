// Top nav bar (fixed at top of page)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ goToTop }) {
  return (
    <nav>
      <span>tweeter</span>
      <div onClick={ goToTop }>
        <strong>Write</strong> a new tweet<br />
        <FontAwesomeIcon
          id="new-tweet-arrow"
          icon={ faAnglesDown }
          style={{ fontSize: 24 }}
          title="write a new tweet"
        />
      </div>
    </nav>
  );
}