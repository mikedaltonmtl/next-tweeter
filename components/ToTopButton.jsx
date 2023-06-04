// Back to top button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";


export default function ToTopButton({ goToTop }) {
  return (
    <FontAwesomeIcon
      id="bottom-button"
      icon={ faCircleArrowUp }
      style={{ fontSize: 36 }}
      title="back to top button"
      className="show"
      onClick={ goToTop }
    />
  );
}
