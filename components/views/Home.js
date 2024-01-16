import html from "html-literal";
export default state => html`
  <section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="index.html">"Call to Action" "Button"</a>

    <button id="createUserButton">Create User</button>
    <button id="createGraphButton">Create Graph</button>
    <button id="recordPixelButton">Record Pixel</button>
    <button id="updatePixelButton" onclick="alertShow()">Update Pixel</button>
    <button id="deletePixelButton" ${(onclick = "alertShow()")}>
      Delete Pixel
    </button>
  </section>

  <section class="masthead">
    <article>
      <div>
        <div class="masthead__eyebrow">
          Business Management for Your Consulting Firm
        </div>
        <h1 class="masthead__heading">
          Grow your consulting firm with TimeFront.
        </h1>
        <p>
          Tired of running your business out of Excel? TimeFront will organize
          your complex client engagements and provide you with new levels of
          insights and intelligence.
        </p>
        <p>
          <a
            class="btn btn--primary masthead__cta subscribe_view"
            href="https://platform.timefront.ai/"
            >Sign up now!</a
          >
        </p>
      </div>
      <img
        class="masthead__image"
        src="img/masthead_img.webp"
        alt="masthead_img"
      />
    </article>
  </section>
`;
