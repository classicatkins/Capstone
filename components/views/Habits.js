import html from "html-literal";

export default () => html`
  <section id="habits">
    <div class="shared-board">
      <!-- Column 1: Categories -->
      <div class="shared-column">
        <div class="column-banner-catagories">
          <!-- Banner -->
          <div class="column-title">Catagories</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button id="addCat" onclick="menuCat" class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">
            <div class="card-content">
              <label class="custom-checkbox">
                <input type="checkbox" class="check-box" name="habits" />
                <span class="checkmark"></span>
              </label>
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
        <div class="column-banner-habits">
          <!-- Banner -->
          <div class="column-title">Habits</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button id="addHabit" onclick="addHabit" class="circle-button">
            +
          </button>
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
        <div class="column-banner-routines">
          <!-- Banner -->
          <div class="column-title">Routines</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button id="addRtn" onclick="menuRtn" class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Individual Habit</div>
          <div class="habit-card">Habit</div>
          <!-- More cards... -->
        </div>
  </div>





  <form class="ed_test" id="menu_rtn">
  <div>
  <div class="input-group">
            <label for="Name">Name<span class="required">*</span></label>
            <input class="names" type="text" id="name" name="name" required>
        </div>
    </div>
    <div class="flex-row-names-vertical">
    <div class="input-group">
    <label for="habits">Habits<span class="required">*</span></label>
    <select class="names" id="habits" name="habits" required>
        <option value="">Select a habit</option>
        <option value="habit1">Habit 1</option>
        <option value="habit2">Habit 2</option>
        <option value="habit3">Habit 3</option>
    </select>
</div>
    </div>
    <div class="textarea-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
    </div>
    <div class="center">
        <button id="addSavebtn" onclick="addTest" name="save">Save</button>
        <button id="button_close" onclick="myFunction">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>






  <form class="ed_test" id="menu_habit">
  <div>
        <div class="input-group">
            <label for="Name">Name<span class="required">*</span></label>
            <input class="names" type="text" id="name" name="name" required>
        </div>
    </div>
    <div class="flex-row-names-vertical">
    <div class="input-group">
    <label>Repeat Days<span class="required">*</span></label>
    <div class="days">
        <input type="checkbox" class="custom-checkbox" id="sunday" name="days" value="Sunday" required>
        <label class="custom-checkbox"for="sunday">Sun</label>

        <input type="checkbox" id="monday" name="days" value="Monday" required>
        <label for="monday">Mon</label>

        <input type="checkbox" id="tuesday" name="days" value="Tuesday" required>
        <label for="tuesday">Tue</label>

        <input type="checkbox" id="wednesday" name="days" value="Wednesday" required>
        <label for="wednesday">Wed</label>

        <input type="checkbox" id="thursday" name="days" value="Thursday" required>
        <label for="thursday">Thu</label>

        <input type="checkbox" id="friday" name="days" value="Friday" required>
        <label for="friday">Fri</label>

        <input type="checkbox" id="saturday" name="days" value="Saturday" required>
        <label for="saturday">Sat</label>
    </div>
</div>

    <div class="input-group">
        <label for="phone">Reminder</label>
        <input class="names" type="text" id="phone" name="phone">
    </div>
    </div>
    <div class="textarea-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
    </div>
    <div class="center">
        <button id="addSavebtn" onclick="addTest" name="save">Save</button>
        <button id="button_close" onclick="myFunction">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>





<form class="ed_test" id="menu_cat">
  <div>
  <div class="input-group">
            <label for="Name">Name <span class="required">*</span></label>
            <input class="names" type="text" id="name" name="name" required>
        </div>
    <div class="textarea-group">
        <label for="notes">Notes</span></label>
        <textarea id="notes" name="notes"></textarea>
    </div>
    <div class="center">
        <button id="addSavebtn" onclick="addTest" name="save">Save</button>
        <button id="button_close" onclick="myFunction">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>
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
