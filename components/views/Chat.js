import html from "html-literal";
export default state => html`
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
