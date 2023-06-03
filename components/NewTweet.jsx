

export default function NewTweet() {
  return (
    <section class="new-tweet">
      <form id="new-tweet-form" action="/tweets/" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="tweet-text">What are you humming about?</label>
        <textarea name="text" id="tweet-text"></textarea>
        <p id="validation-error"></p>
        <div id="form-footer">
          <button type="submit">Tweet</button>
          <output name="counter" class="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  );
}
