// New Tweet form
import { useEffect, useState } from 'react';
import { slideUp, slideDown } from '../helpers/slideUpDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


export default function NewTweet() {

  const maxLength = 140;
  const [charsRemaining, setCharsRemaining] = useState(maxLength);
  const [tweetText, setTweetText] = useState("");

  const handleTextInput = function(event) {
    setTweetText(event.target.value);
    setCharsRemaining(maxLength - event.target.value.length);
  };

  useEffect(() => {
    const textCounter = document.getElementById("counter");
    textCounter.className = charsRemaining < 0 ? "counter negative" : "counter";
  }, [charsRemaining]);

  const handleSubmit = function(event) {
    event.preventDefault();
    console.log('charsRemaining', charsRemaining);
    const errorMessage = document.getElementById("validation-error");

    // clear any outstanding error (validation) messages
    errorMessage.innerHTML = "";

    // validate for character length
    if (charsRemaining < 0) {

      const errorText = '<svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#c33}</style><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>&nbsp;&nbsp;Sorry, your tweet exceeds the maximum length (140 chars).';
      errorMessage.innerHTML += errorText;
      slideDown(errorMessage, 700);
      return;
    }

    errorMessage.innerHTML = "";
    slideUp(errorMessage, 500);

  };
  //   // validate for empty or null tweet
  //   if ($tweetText === "" || $tweetText === null) {
  //     const errorText = '<i class="fa-solid fa-triangle-exclamation"></i> Please compose your tweet to be submitted';
  //     $( "p#validation-error" ).append(errorText);
  //     $( "p#validation-error" ).slideDown('slow');
  //     return;
  //   }

  // clear any validation messages when user focuses on textbox
  // $( "#tweet-text" ).focus(function() {
  //   $( "p#validation-error" ).empty();
  //   $( "p#validation-error" ).slideUp('slow');
  // });

  return (
    <section className="new-tweet">
      <form id="new-tweet-form" action="/tweets/" method="POST" encType="application/x-www-form-urlencoded">
        <label htmlFor="tweet-text">What are you humming about?</label>
        <textarea
          name="text"
          id="tweet-text"
          value={ tweetText }
          onChange={ handleTextInput }
        >
        </textarea>
        <p id="validation-error"></p>
        <div id="form-footer">
          <button onClick={ handleSubmit }>Tweet</button>
          <output name="counter" id="counter" className="counter" htmlFor="tweet-text">{ charsRemaining }</output>
        </div>
      </form>
    </section>
  );
}
