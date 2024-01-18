import html from "html-literal";

export default () => html`
  <body>
    <div class="menu-box">
      <div class="header-container">
        <h3>Graphs</h3>
        <ul>
          <div class="radio-group-container">
            <li>
              <label class="custom-radio">
                <input
                  type="radio"
                  class="radio-button"
                  name="comparisonOption"
                  id="compareStatsRadio"
                  checked
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
                  id="allHabitsRadio"
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
          </div>
          <div class="radio-group-container">
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
          </div>
        </ul>
      </div>
      <div class="radio-group-container">
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

    <div class="grid-pixela" id="pixelaGraphs">
      <div id="graphs-container-pixela">
        <!-- Graphs will be displayed here -->
        <h1>My Pixela Habits Graph</h1>
        <img
          src="https://pixe.la/v1/users/matkins/graphs/all-habits"
          alt="Pixela Habits Graph"
        />
      </div>
      <br />
      <br />
      <br />
    </div>
    <div class="stats-container" id="allStats">
      <div class="grid-all-stats">
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
    </div>
  </body>
`;
