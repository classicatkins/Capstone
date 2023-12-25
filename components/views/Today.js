import html from "html-literal";

export default () => html`
<body class="body-today">
  <div class="flex-row">
    <div class="flex-box">
      <p>function to calculate time + name</p>
      <div class="calendar-container">
        <div class="month-display">Month</div>
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
    <div class="weekday">Thur</div>
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
            <button id="prevWeek">Previous Week</button>
            <button id="nextWeek">Next Week</button>
        </div>
    </div>
    </div>
    <div class="flex-box">Alerts</div>
    <div class="flex-box">Streaks
      <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.65,4.05C9.8,4.2,9.95,4.35,10.1,4.5c0.9,0.95,1.6,1.9,2.1,2.8c0.55,1,0.85,1.9,0.85,2.65c0,0.6-0.15,1.2-0.4,1.7 c-0.25,0.45-0.6,0.85-1.05,1.2c-0.45,0.35-1,0.6-1.65,0.8C9.3,13.9,8.65,14,8,14s-1.3-0.1-1.9-0.3s-1.15-0.45-1.65-0.8 C4,12.55,3.65,12.15,3.4,11.7C3.15,11.2,3,10.65,3,10c0-0.6,0.2-1.3,0.65-2.1C3.75,7.7,3.85,7.5,4,7.3c0.8,0.65,1.55,0.8,2.05,0.8 C6.9,8.1,7.7,7.7,8.35,7c0.4-0.5,0.75-1.1,1-1.85C9.45,4.8,9.55,4.45,9.65,4.05 M8,0c0,3.9-0.85,6.1-1.95,6.1C5.45,6.1,4.7,5.45,4,4 c-1.65,1.85-3,4-3,6c0,4,3.7,6,7,6l0,0c3.3,0,7-2,7-6C15,5,8,0,8,0L8,0z" />
        <text id="streakNumber" x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="4.1" fill="black">2</text>
    </svg>
    </div>
</div>
    <div class="shared-board">
        <!-- Column 1: Categories -->
        <div class="shared-column">
          <div class="column-banner"> <!-- Banner -->
            <div class="column-title">Morning Routine</div>
        </div>
            <div class="add-container">
              <div class="add-label">Add Catagory</div>
              <button class="circle-button">+</button>
          </div>
            <div class="shared-column-cards">
              <div class="circle-card">
                <div class="circle"></div>
                <div class="circle-card-text">Category Item 1</div>
            </div>
            <div class="circle-card">
                <div class="circle"></div>
                <div class="circle-card-text">Category Item 1</div>
            </div>
            <div class="circle-card">
              <div class="circle"></div>
              <div class="circle-card-text">Category Item 1</div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">Category Item 1</div>
        </div>
                <!-- More cards... -->
            </div>
        </div>

        <!-- Column 2: Habits -->
        <div class="shared-column">
          <div class="column-banner"> <!-- Banner -->
            <div class="column-title">Today's Habits</div>
        </div>
            <div class="add-container">
              <div class="add-label">Add Habit</div>
              <button class="circle-button">+</button>
          </div>
            <div class="shared-column-cards">
                <div class="habit-card">Individual Habit</div>
                <div class="habit-card">Habit</div>
                <!-- More cards... -->
            </div>
        </div>

        <!-- Column 3: Routines -->
        <div class="shared-column">
          <div class="column-banner"> <!-- Banner -->
            <div class="column-title">Evening Routine</div>
        </div>
            <div class="add-container">
              <div class="add-label">Add Routine</div>
              <button class="circle-button">+</button>
          </div>
            <div class="shared-column-cards">
              <div class="circle-card">
                <div class="circle"></div>
                <div class="circle-card-text">Category Item 1</div>
            </div>
            <div class="circle-card">
                <div class="circle"></div>
                <div class="circle-card-text">Category Item 1</div>
            </div>
            <div class="circle-card">
              <div class="circle"></div>
              <div class="circle-card-text">Category Item 1</div>
          </div>
          <div class="circle-card">
            <div class="circle"></div>
            <div class="circle-card-text">Category Item 1</div>
        </div>
                <!-- More cards... -->
            </div>
        </div>
    </div>
    <script>
      document.querySelectorAll('.circle-card').forEach(card => {
          card.addEventListener('click', () => {
              card.classList.toggle('active');
          });
      });

      function updateStreakNumber(newNumber) {
    document.getElementById('streakNumber').textContent = newNumber;
}

updateStreakNumber(5);

let currentDate = new Date();

function updateCalendar() {
    const startOfWeek = getStartOfWeek(currentDate);
    const options = { month: 'long' };
    const month = startOfWeek.toLocaleDateString('en-US', options);
    document.querySelector('.month-display').textContent = month;

    const days = document.querySelectorAll('.week-display .day .date');
    days.forEach((day, index) => {
        const date = new Date(startOfWeek);
        date.setDate(date.getDate() + index);
        day.textContent = date.getDate();
        day.classList.toggle('bold', date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth());
    });
}

function getStartOfWeek(date) {
    const day = date.getDay();
    const start = new Date(date);
    start.setDate(date.getDate() - day);
    return start;
}

document.getElementById('prevWeek').addEventListener('click', function() {
    currentDate.setDate(currentDate.getDate() - 7);
    updateCalendar();
});

document.getElementById('nextWeek').addEventListener('click', function() {
    currentDate.setDate(currentDate.getDate() + 7);
    updateCalendar();
});

updateCalendar();
  </script>
</body>
`;
