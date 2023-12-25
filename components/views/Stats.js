import html from "html-literal";

export default () => html`
<body>
    <div class="stats-container">
        <div class="grid">
            <div class="graph-box">Graph 1 - chart.js - use</div>
            <div class="graph-box">Graph 2</div>
            <div class="graph-box">Graph 3</div>
            <div class="graph-box">Graph 4</div>
        </div>
        <div class="menu-box">
          <div class="header-container">
            <h3>Graphs</h3>
          <ul>
              <li>Menu Item 1.1</li>
              <li>Menu Item 1.2</li>
              <li>Menu Item 1.3</li>
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
