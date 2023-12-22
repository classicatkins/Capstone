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
          <div class="habit-card">Individual Habit</div>
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
  </section>
`;
