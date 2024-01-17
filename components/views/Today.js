import html from "html-literal";

export default state => html`
  <body class="body-today">
    <div class="flex-row">
      <div class="flex-box">
        <p class="hello-display">Good Morning Melissa!</p>
        <div class="calendar-container">
          <div class="month-flex">
            <div class="month-display">Month Day#</div>
            <div class="today-display" id="today">Today</div>
          </div>
          <div class="week-display">
            <div class="day">
              <div class="weekday">Sun</div>
              <div class="date">1</div>
            </div>
            <div class="day">
              <div class="weekday">Mon</div>
              <div class="date">1</div>
            </div>
            <div class="day">
              <div class="weekday">Tue</div>
              <div class="date">1</div>
            </div>
            <div class="day">
              <div class="weekday">Wen</div>
              <div class="date">1</div>
            </div>
            <div class="day">
              <div class="weekday">Thu</div>
              <div class="date">1</div>
            </div>
            <div class="day">
              <div class="weekday">Fri</div>
              <div class="date">1</div>
            </div>
            <div class="day">
              <div class="weekday">Sat</div>
              <div class="date">1</div>
            </div>

            <!-- Weekdays (Sun, Mon, etc.) and Dates (1, 2, etc.) -->
            <!-- ... -->
          </div>
          <div class="week-navigation">
            <button id="prevWeek" onclick="moveCalendar(-7)">Previous Week</button>
            <button id="nextWeek" onclick="moveCalendar(+7)">Next Week</button>
          </div>
        </div>
      </div>
      <div class="flex-box">Alerts</div>
      <div class="flex-box">
        <div class="today-margin">Streaks</div>
        <br>
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.65,4.05C9.8,4.2,9.95,4.35,10.1,4.5c0.9,0.95,1.6,1.9,2.1,2.8c0.55,1,0.85,1.9,0.85,2.65c0,0.6-0.15,1.2-0.4,1.7 c-0.25,0.45-0.6,0.85-1.05,1.2c-0.45,0.35-1,0.6-1.65,0.8C9.3,13.9,8.65,14,8,14s-1.3-0.1-1.9-0.3s-1.15-0.45-1.65-0.8 C4,12.55,3.65,12.15,3.4,11.7C3.15,11.2,3,10.65,3,10c0-0.6,0.2-1.3,0.65-2.1C3.75,7.7,3.85,7.5,4,7.3c0.8,0.65,1.55,0.8,2.05,0.8 C6.9,8.1,7.7,7.7,8.35,7c0.4-0.5,0.75-1.1,1-1.85C9.45,4.8,9.55,4.45,9.65,4.05 M8,0c0,3.9-0.85,6.1-1.95,6.1C5.45,6.1,4.7,5.45,4,4 c-1.65,1.85-3,4-3,6c0,4,3.7,6,7,6l0,0c3.3,0,7-2,7-6C15,5,8,0,8,0L8,0z"
          />
          <text
            id="streakNumber"
            x="50%"
            y="70%"
            dominant-baseline="middle"
            text-anchor="middle"
            font-family="Arial"
            font-size="4.1"
            fill="black"
          >
            2
          </text>
        </svg>
      </div>
    </div>
    <div class="shared-board">
      <!-- Column 1: Categories -->
      <div class="shared-column">
        <div class="column-banner-morning">
          <!-- Banner -->
          <div class="column-title">Morning Routine</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Step</div>
          <button class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">Wake up early</div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">
              Exercise&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            </div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">
              Shower&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            </div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">
              Eat Breakfast&nbsp&#8202;&#8202;
            </div>
          </div>
          <!-- More cards... -->
        </div>
      </div>

      <!-- Column 2: Habits -->
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
          <!-- <div class="habit-card">Individual Habit</div> -->
          ${state.habits
            .map(habit => {
              return `<div class="habit-card">
            <div class="card-content">
              <label class="custom-checkbox">
                <input type="checkbox" class="check-box" name="habits" />
                <span class="checkmark"></span>
              </label>
              ${habit.name}
              <div class="menu-icon" class="menu-icon" data-habit-id="${habit._id}">
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
        <div class="column-banner-evening">
          <!-- Banner -->
          <div class="column-title">Evening Routine</div>
        </div>
        <div class="add-container">
          <div class="add-label">Add Step</div>
          <button class="circle-button">+</button>
        </div>
        <div class="shared-column-cards">
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">
              Shower&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            </div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">
              Brush Teeth&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8202;&#8202;
            </div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">
              Read&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&#8202;&#8202;
            </div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">Go to bed early</div>
          </div>
          <!-- More cards... -->
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </body>
  <form class="menu_habit" id="menu_habit" method="POST" action="">
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
        <button id="button_close" onclick="closeFormHabit">close</button>
        <!-- <button id="button_clear" onclick="clear">clear</button> -->

    </div>
      </div>
</form>

`;
