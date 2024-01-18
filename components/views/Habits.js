import html from "html-literal";

export default state => html`
  <section id="habits">
    <div class="shared-board">
      <!-- Column 1: Categories -->
      <div class="shared-column">
        <div class="column-banner-catagories">
          <!-- Banner -->
          <div class="column-title">Categories</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Categories</div>
          <button id="addCat" class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          ${state.categories
            .map(cat => {
              return `<div class="habit-card">
            <div class="card-content">
              <label class="custom-checkbox">
              </label>
              ${cat.name}
              <div class="menu-icon" class="menu-icon" data-cat-id="${cat._id}">
                <!-- Three dots icon or font-awesome icon -->
                &nbsp;&nbsp;&#8942;
              </div>
            </div>
            <div class="popup-menu" id="popup-menu-${cat._id}" style="display: none;">
              <ul>
                <li>
                  <i id="stats-cat" onclick="viewStatCat('${cat._id}')" class="fa-solid fa-chart-simple"
                    >&nbsp&nbsp</i
                  >View Stats
                </li>
                <li>
                  <i id="edit-cat" onclick="editCat('${cat._id}')" class="fa-solid fa-pen-to-square"
                    >&nbsp&nbsp</i
                  >Edit Category
                </li>
                <li id="delete-habit" onclick="deleteCat('${cat._id}')" class="danger">
                  <i class="fa-solid fa-trash">&nbsp&nbsp</i
                  >Delete Category
                </li>
              </ul>
            </div>
          </div>`;
            })
            .join("")}
        </div>
      </div>

      <div class="shared-column">
        <div class="column-banner-habits">
          <!-- Banner -->
          <div class="column-title">Habits</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Habit</div>
          <button id="addHabit" class="circle-button">
            +
          </button>
        </div>
        <div class="shared-column-cards">
          ${state.habits
            .map(habit => {
              return `<div class="habit-card">
            <div class="card-content">
              <label class="custom-checkbox">
              <input type="checkbox" class="check-box" id="habitCheckbox-${habit._id}"  data-habit-id="'${habit._id}'" data-habit-dates="'${habit.dates}'" data-habit-name="'${habit.name}'" data-habit-category="'${habit.category}'" data-habit-reminder="'${habit.reminder}'" data-habit-days="'${habit.days}'" name="habits">
                <span class="checkmark"></span>
              </label>
              ${habit.name}
              <div class="menu-icon" id="menu-icon" data-habit-id="${habit._id}">
                <!-- Three dots icon or font-awesome icon -->
                &nbsp;&nbsp;&#8942;
              </div>
            </div>
            <div class="popup-menu" id="popup-menu-${habit._id}" style="display: none;">
              <ul>
                <li>
                  <i id="stats-cat" onclick="viewStatCat('${habit._id}')" class="fa-solid fa-chart-simple"
                    >&nbsp&nbsp</i
                  >View Stats
                </li>
                <li>
                  <i id="edit-cat" onclick="editCat('${habit._id}')" class="fa-solid fa-pen-to-square"
                    >&nbsp&nbsp</i
                  >Edit Habit
                </li>
                <li id="delete-habit" onclick="deleteCat('${habit._id}')" class="danger">
                  <i class="fa-solid fa-trash">&nbsp&nbsp</i
                  >Delete Habit
                </li>
              </ul>
            </div>
          </div>`;
            })
            .join("")}
        </div>
      </div>

      <!-- Column 3: Routines -->
      <div class="shared-column">
        <div class="column-banner-routines">
          <!-- Banner -->
          <div class="column-title">Routines</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Routine</div>
          <button id="addRtn" class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
        ${state.routines
          .map(rtn => {
            return `<div class="habit-card">
            <div class="card-content">
              <label class="custom-checkbox">
              <input type="checkbox" id="checkbox-${rtn._id}" class="check-box" data-routine-id="${rtn._id}" name="habits" />
                <span class="checkmark"></span>
              </label>
              ${rtn.name}
              <div class="menu-icon" class="menu-icon" data-rtn-id="${rtn._id}">
                <!-- Three dots icon or font-awesome icon -->
                &nbsp;&nbsp;&#8942;
              </div>
            </div>
            <div class="popup-menu" id="popup-menu-${rtn._id}" style="display: none;">
              <ul>
                <li>
                  <i id="stats-cat" onclick="viewStatCat('${rtn._id}')" class="fa-solid fa-chart-simple"
                    >&nbsp&nbsp</i
                  >View Stats
                </li>
                <li>
                  <i id="edit-cat" onclick="editCat('${rtn._id}')" class="fa-solid fa-pen-to-square"
                    >&nbsp&nbsp</i
                  >Edit Routine
                </li>
                <li id="delete-habit" onclick="deleteCat('${rtn._id}')" class="danger">
                  <i class="fa-solid fa-trash">&nbsp&nbsp</i
                  >Delete Routine
                </li>
              </ul>
            </div>
          </div>`;
          })
          .join("")}
        </div>
  </div>





  <form class="menu_rtn" id="menu_rtn" method="POST" action="">
  <div>
  <div class="input-group">
            <label for="Name">Name<span class="required">*</span></label>
            <input class="names" type="text" id="name" name="name" required>
        </div>
    </div>
    <div class="flex-row-names-vertical">
    <!-- <div class="input-group">
    <label for="habits">Habits<span class="required">*</span></label>
    <select class="names" id="habits" name="habits" required>
        <option value="">Select a habit</option>
        <option value="habit1">Habit 1</option>
        <option value="habit2">Habit 2</option>
        <option value="habit3">Habit 3</option>
    </select>
</div> -->
<div class="input-group">
        <select class="names" id="habitSelect">
            <option value="">Select a habit</option>
            <option value="Habit1">Habit 1</option>
            <option value="Habit2">Habit 2</option>
            <option value="Habit3">Habit 3</option>
            <!-- Add other habits here -->
        </select>
        <button type="button" id="addHabitBtn">Add</button>
    </div>
    <ul for="selectedHabits" id="selectedHabits" name="selectedHabits" ></ul>
    <!-- <input type="hidden" name="habits" id="habitsInput">
    <button type="submit">Submit Habits</button> -->
    </div>
    <div class="textarea-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
    </div>
    <div class="center">
        <button id="addSavebtn" name="save">Save</button>
        <button id="button_close" onclick="closeFormRtn">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>






  <form class="menu_habit" id="menu_habit" method="POST" action="">
  <div>
        <div class="input-group">
            <label for="Name">Name<span class="required">*</span></label>
            <input class="names" type="text" id="name" name="name" required>
        </div>
    </div>
    <!-- Dropdown Menu -->
  <div class="input-group">
    <label for="category">Category<span class="required">*</span></label>
    <select class="names" id="category" name="category" required>
      <option value="">--Select a Category--</option>
      <option value="type1">Health</option>
      <option value="type2">Personal</option>
      <option value="type3">Work</option>
      <option value="type3">Social</option>
    </select>
  </div>
    <div class="flex-row-names-vertical">
    <div class="input-group">
    <label>Repeat Days<span class="required">*</span></label>
    <div class="days">
      <!-- //to do: field set? -->
        <input type="checkbox" class="custom-checkbox" id="sunday" name="days" value="Sunday">
        <label class="custom-checkbox"for="sunday">Sun</label>

        <input type="checkbox" id="monday" name="days" value="Monday">
        <label for="monday">Mon</label>

        <input type="checkbox" id="tuesday" name="days" value="Tuesday">
        <label for="tuesday">Tue</label>

        <input type="checkbox" id="wednesday" name="days" value="Wednesday">
        <label for="wednesday">Wed</label>

        <input type="checkbox" id="thursday" name="days" value="Thursday">
        <label for="thursday">Thu</label>

        <input type="checkbox" id="friday" name="days" value="Friday">
        <label for="friday">Fri</label>

        <input type="checkbox" id="saturday" name="days" value="Saturday">
        <label for="saturday">Sat</label>
    </div>
</div>

    <div class="input-group">
        <label for="reminder">Reminder</label>
        <input class="names" type="date" id="reminder" name="reminder">
    </div>
    </div>
    <div class="textarea-group">
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
    </div>
    <div class="center">
        <!-- <button id="addSaveRtn" name="save">Save</button> -->
        <input type="submit" name="submit" value="Submit Habit" />
        <button id="button_close">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>





<form class="menu_cat" id="menu_cat" method="POST" action="">
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
        <button id="addSaveCat" name="save">Save</button>
        <button id="button_close">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>
  </section>
`;
