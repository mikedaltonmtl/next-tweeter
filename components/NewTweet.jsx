// New Tweet form

export default function NewTweet() {
  return (
    <section className="new-tweet">
      <form id="new-tweet-form" action="/tweets/" method="POST" encType="application/x-www-form-urlencoded">
        <label htmlFor="tweet-text">What are you humming about?</label>
        <textarea name="text" id="tweet-text"></textarea>
        <p id="validation-error"></p>
        <div id="form-footer">
          <button type="submit">Tweet</button>
          <output name="counter" className="counter" htmlFor="tweet-text">140</output>
        </div>
      </form>
    </section>
  );
}
