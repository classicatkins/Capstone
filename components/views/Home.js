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

  <!-- <section class="masthead">
  <article>
    <div>
      <div class="masthead__eyebrow">Business Management for Your Consulting Firm</div>
      <h1 class="masthead__heading">Grow your consulting firm with TimeFront.</h1>
      <p>
        Tired of running your business out of Excel? TimeFront will organize your complex client engagements
        and provide you with new levels of insights and intelligence.
      </p>
      <p>
        <a class="btn btn--primary masthead__cta subscribe_view" href="https://platform.timefront.ai/">Sign up now!</a>
      </p>
    </div>
    <img class="masthead__image" src="img/masthead_img.webp" alt="masthead_img"/>
  </article>
</section>

<section id="features" class="features">
  <article>
    <h2 class="feature__heading">Features</h2>
    <p class="feature__intro">TimeFront gives you the power to automate your consulting business so that you can get back to consulting.</p>
    <div class="feature__list">
      <div class="feature__item">
        <div class="feature__image feature__image--blue">
          <img src="img/time.svg" alt="icon">
        </div>
        <h3 class="feature__title">Time Tracking</h3>
        <p class="feature__text">Join the big leagues and empower your consultants to track time through TimeFront.</p>
      </div>
      <div class="feature__item">
        <div class="feature__image feature__image--orange">
          <img src="img/user.svg" alt="icon">
        </div>
        <h3 class="feature__title">Engagement Management</h3>
        <p class="feature__text">Always know what people are doing and where your resources are being utilized.</p>
      </div>
      <div class="feature__item">
        <div class="feature__image feature__image--pink">
          <img src="img/invoice.svg" alt="icon">
        </div>
        <h3 class="feature__title">Invoice Management</h3>
        <p class="feature__text">Automate building and sending invoices to make sure you get paid.</p>
      </div>
      <div class="feature__item">
        <div class="feature__image feature__image--green">
          <img src="img/chart.svg" alt="icon">
        </div>
        <h3 class="feature__title">Insights, Forecasting, and More</h3>
        <p class="feature__text">Leverage detailed reporting and forecasting to make data-driven decisions.</p>
      </div>
    </div>
    <a class="btn btn--primary feature__cta subscribe_view" href="https://platform.timefront.ai/">Get started today!</a>
  </article>
</section>

<section id="pricing" class="pricing">
  <article>
    <h2 class="pricing__heading">Choose a plan to <em>automate your consulting business</em></h2>
    <p class="pricing__intro">Get started for free. No credit card required.</p>
    <div class="pricing__list" id="dynamic-pricing-plans">
    </div>
  </article>
</section>

<section id="faq" class="faq">
  <article>
    <h2 class="faq__heading">Frequently Asked Questions</h2>
    <div class="faq__list">
      <div class="faq__item">
        <h4 class="faq__question">How does billing work?</h4>
        <div class="faq_answer">
          Choose your plan, and that's what you pay monthly. Simple as that! In the meantime, subscribe now, and pay later!
        </div>
      </div>
      <div class="faq__item">
        <h4 class="faq__question">Can I cancel my subscription?</h4>
        <div class="faq_answer">
          Yes, you can cancel at anytime. To cancel, email us at
          <a class="mailto" href="mailto:support@timefront.ai">support@timefront.ai</a> and let
          us know how we can improve.
        </div>
      </div>
      <div class="faq__item">
        <h4 class="faq__question">What type of support does TimeFront offer?</h4>
        <div class="faq_answer">
          There is a variety of support for everyone. Each user has access to our
          support team via email. Users of the Pro plan have the same access; however,
          they will receive priority over Free plan emails. For support, please contact us at
          <a class="mailto" href="mailto:support@timefront.ai">support@timefront.ai</a>.
        </div>
      </div>
      <div class="faq__item">
        <h4 class="faq__question">Can I ask an infrequently asked question?</h4>
        <div class="faq_answer">
          Of course! We're always around to help. You can email us at anytime at
          <a class="mailto" href="mailto:help@timefront.ai">help@timefront.ai</a>.
        </div>
      </div>
    </div>
  </article>
</section>

<section id="contact" class="reach">
  <article>
    <h2>Curious about how you can automate your business?</h2>
    <p>Schedule a demo or talk to our team to find out more.</p>
    <div class="reach__actions">
      <a class="btn btn--primary subscribe_view" href="https://platform.timefront.ai/">Get started today!</a>
      <a class="btn --muted mailto" href="mailto:hello@timefront.ai" target="_blank">Send us an email</a>
    </div>
  </article>
</section>

<section class="footer">
  <article>
    <div class="footer__logo">
      <img src="img/logo_text_white.svg" alt="TimeFront">
      <div>Spend more time on what matters.</div>
    </div>
    <div class="footer__links">
      <a href="privacy.pdf" target="_blank">Privacy Policy</a>
      <a href="terms.pdf" target="_blank">Terms &amp; Conditions</a>
    </div>
    <div class="footer__contact">
      <div class="footer__address">
        <div><a class="mailto" href="mailto:hello@timefront.ai">hello@timefront.com</a></div>
      </div>
      <div class="footer__socials">
        <a href="https://www.facebook.com/mytimefront" target="_blank">
          <img src="img/facebook_white.svg" alt="Facebook">
        </a>
        <a href="https://twitter.com/time_front" target="_blank">
          <img src="img/twitter_white.svg" alt="Twitter">
        </a>
        <a href="https://www.linkedin.com/company/timefront/" target="_blank">
          <img src="img/linkedin_white.svg" alt="Linkedin">
        </a>
      </div>
    </div>
  </article>
</section>

<section class="copyright">
  <article>
    <p>Copyright &copy; 2022-2023 Time Front. All rights reserved.</p>
    <img src="img/logo_icon_white.svg" alt="TimeFront">
  </article>
</section> -->
`;
