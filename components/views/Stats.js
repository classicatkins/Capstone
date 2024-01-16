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
              <input
                class="checkbox"
                type="checkbox"
                class="check-box"
                name="habits"
              />&nbsp&nbspCompare Stats
            </li>
            <li>
              <label class="custom-checkbox">
                <input type="checkbox" class="check-box" name="habits" />
                <span class="checkmark"></span> </label
              >&nbsp&nbspAll Habits
            </li>
            <li>
              <input
                type="checkbox"
                class="check-box"
                name="habits"
              />&nbsp&nbspLine Chart
            </li>
            <li>
              <input
                type="checkbox"
                class="check-box"
                name="habits"
              />&nbsp&nbspPie Chart
            </li>
            <li>
              <input
                type="checkbox"
                class="check-box"
                name="habits"
              />&nbsp&nbspRadar Chart
            </li>
            <li>
              <input
                type="checkbox"
                class="check-box"
                name="habits"
              />&nbsp&nbspBar Chart
            </li>
          </ul>
        </div>
        <div class="header-container">
          <h3>AI Communication</h3>
          <ul>
            <li>Q & A</li>
          </ul>
        </div>
        <div class="header-container">
          <h3>Badges</h3>
          <ul>
            <li>My Badges</li>
            <li>Badges to achieve</li>
          </ul>
        </div>
      </div>
    </div>
  </body>
`;
