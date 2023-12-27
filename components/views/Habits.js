import html from "html-literal";

export default () => html`
  <section id="habits">
    <div class="shared-board">
      <!-- Column 1: Categories -->
      <div class="shared-column">
        <div class="column-banner">
          <!-- Banner -->
          <div class="column-title">Habits</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">
            <div class="card-content">
              <input type="checkbox" class="check-box" name="habits" />
              &nbsp&nbspHabit 3
              <div class="menu-icon">
                <!-- Three dots icon or font-awesome icon -->
                &nbsp;&nbsp;&#8942;
              </div>
            </div>
            <div class="popup-menu">
              <ul>
                <li>Action 1</li>
                <li>Action 2</li>
                <li>Action 3</li>
              </ul>
            </div>
          </div>

          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
      </div>

      <div class="shared-column">
        <div class="column-banner">
          <!-- Banner -->
          <div class="column-title">Habits</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
      </div>

      <!-- Column 3: Routines -->
      <div class="shared-column">
        <div class="column-banner">
          <!-- Banner -->
          <div class="column-title">Routines</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
      </div>
    </div>
    <script>
      function toggleMenu(icon) {
        const popupMenu = icon.nextElementSibling;
        popupMenu.classList.toggle("active");
      }

      document.addEventListener("click", function(event) {
        if (!event.target.classList.contains("menu-icon")) {
          const popupMenus = document.querySelectorAll(".popup-menu.active");
          for (const menu of popupMenus) {
            menu.classList.remove("active");
          }
        }
      });
    </script>
  </section>
`;
