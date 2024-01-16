import html from "html-literal";

export default () => html`
  <body>
    <div class="stats-container">
      <div class="grid">
        <div class="graph-box">
          <div id="graphs">
            <div id="graph-container">
              <canvas id="graph-chart-bar"></canvas>
            </div>
          </div>
        </div>
        <div class="graph-box">
          <div id="graphs">
            <!-- <h3>Pie Chart</h3> -->
            <div id="graph-container">
              <canvas id="graph-chart-line"></canvas>
            </div>
          </div>
        </div>
        <div class="graph-box">
          <div id="graphs">
            <!-- <h3>Pie Chart</h3> -->
            <div id="graph-container">
              <canvas id="graph-chart-pie"></canvas>
            </div>
          </div>
        </div>
        <div class="graph-box">
          <div class="graph-box">
            <div id="graphs">
              <div id="graph-container">
                <canvas id="graph-chart-radar"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-box">
        <div class="header-container">
          <h3>Graphs</h3>
          <ul>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspCompare Stats
            </li>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspAll Habits
            </li>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspLine Chart
            </li>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspPie Chart
            </li>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspRadar Chart
            </li>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspBar Chart
            </li>
          </ul>
        </div>
        <div class="header-container">
          <h3>AI Communication</h3>
          <ul>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspQ & A
            </li>
          </ul>
        </div>
        <div class="header-container">
          <h3>Badges</h3>
          <ul>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspMy Badges
            </li>
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                />
                <span class="radio-mark-stat"></span> </label
              >&nbsp&nbspBadges to Achieve
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
`;
