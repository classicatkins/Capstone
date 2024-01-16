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
              />&nbsp&nbspMenu Item 1.1
            </li>
            <li>
              <label class="custom-checkbox">
                <input type="checkbox" class="check-box" name="habits" />
                <span class="checkmark"></span> </label
              >&nbsp&nbspMenu Item 1.2
            </li>
            <li>
              <input
                type="checkbox"
                class="check-box"
                name="habits"
              />&nbsp&nbspMenu Item 1.3
            </li>
          </ul>
        </div>
        <div class="header-container">
          <h3>Habits</h3>
          <ul>
            <li>Menu Item 2.1</li>
            <li>Menu Item 2.2</li>
          </ul>
        </div>
        <div class="header-container">
          <h3>Catagories</h3>
          <ul>
            <li>Menu Item 3.1</li>
            <li>Menu Item 3.2</li>
            <li>Menu Item 3.3</li>
            <li>Menu Item 3.4</li>
          </ul>
        </div>
      </div>
    </div>
  </body>
`;
