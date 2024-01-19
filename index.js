// Assuming these components are defined in your project
import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import Chart from "chart.js/auto";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
        ${Nav(store.Links)}
        ${Main(state)}
        ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}

function attachCheckboxListeners(state) {
  state.habits.forEach(habit => {
    const checkbox = document.getElementById(`habitCheckbox-${habit._id}`);
    if (checkbox) {
      checkbox.addEventListener("change", function() {
        handleHabitCheckboxChange(
          this,
          habit._id,
          habit.dates,
          habit.name,
          habit.category,
          habit.reminder,
          habit.days
        );
      });
    }
  });
}

function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  document.querySelector(".hello-display").textContent = greeting + " Melissa!";
}
//line chart

const Utils = {
  // Function to generate random numbers
  rand: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Function to generate an array of random numbers
  numbers: function(config) {
    let arr = [];
    for (let i = 0; i < config.count; i++) {
      arr.push(this.rand(config.min, config.max));
    }
    return arr;
  },

  // Predefined chart colors (you can add more colors here)
  CHART_COLORS: {
    red: "rgb(255, 99, 132)",
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
    yellow: "rgb(255, 205, 86)",
    purple: "rgb(153, 102, 255)",
    orange: "rgb(255, 159, 64)",
    grey: "rgb(201, 203, 207)"
  },

  // Function to generate a random color
  namedColor: function(index) {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "grey"
    ];
    return colors[index % colors.length];
  },

  // Function to transparentize a color
  // transparentize: function(color, opacity) {
  //   const alpha = opacity === undefined ? 0.5 : 1 - opacity;
  //   return color + alpha;
  // },

  transparentize: function(color, opacity) {
    // Check if color is a string
    if (typeof color !== "string") {
      console.error("Color must be a string in RGB format");
      return color; // Return the input as-is
    }

    const alpha = opacity === undefined ? 0.5 : opacity;
    const rgb = color.match(/\d+/g);
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  },

  // Function to generate months labels
  months: function(config) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ];
    return monthNames.slice(0, config.count);
  }

  // // Predefined chart colors (you can add more colors here)
  // CHART_COLORS: {
  //   red: "rgb(255, 99, 132)",
  //   blue: "rgb(54, 162, 235)",
  //   green: "rgb(75, 192, 192)",
  //   yellow: "rgb(255, 205, 86)",
  //   purple: "rgb(153, 102, 255)",
  //   orange: "rgb(255, 159, 64)",
  //   grey: "rgb(201, 203, 207)"
  // }
};

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 });
const data = {
  labels: labels,
  datasets: [
    {
      label: "Health",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5)
    },
    {
      label: "Work",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5)
    },
    {
      label: "Personal",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.orange,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5)
    },
    {
      label: "Social",
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.purple,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple, 0.5)
    }
  ]
};

const DATA_COUNT_Pie = 4; //todo: habits categories
const NUMBER_CFG_Pie = { count: DATA_COUNT_Pie, min: 0, max: 100 };

const dataPie = {
  labels: ["Health", "Work", "Personal", "Social"],
  datasets: [
    {
      label: "Dataset 1",
      data: Utils.numbers(NUMBER_CFG_Pie),
      backgroundColor: Object.values(Utils.CHART_COLORS)
    }
  ]
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Line Chart"
      }
    }
  }
};

const configPie = {
  type: "pie",
  data: dataPie,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Pie Chart"
      }
    }
  }
};

const configRadar = {
  type: "radar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Radar Chart"
      }
    }
  }
};

const configBar = {
  type: "bar",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Stacked Bar Chart"
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
};

const actions = [
  {
    name: "Randomize",
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = Utils.numbers({
          count: chart.data.labels.length,
          min: -100,
          max: 100
        });
      });
      chart.update();
    }
  },
  {
    name: "Add Dataset",
    handler(chart) {
      const data = chart.data;
      const dsColor = Utils.namedColor(chart.data.datasets.length);
      const newDataset = {
        label: "Dataset " + (data.datasets.length + 1),
        backgroundColor: Utils.transparentize(dsColor, 0.5),
        borderColor: dsColor,
        data: Utils.numbers({ count: data.labels.length, min: -100, max: 100 })
      };
      chart.data.datasets.push(newDataset);
      chart.update();
    }
  },
  {
    name: "Add Data",
    handler(chart) {
      const data = chart.data;
      if (data.datasets.length > 0) {
        data.labels = Utils.months({ count: data.labels.length + 1 });

        for (let index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Utils.rand(-100, 100));
        }

        chart.update();
      }
    }
  },
  {
    name: "Remove Dataset",
    handler(chart) {
      chart.data.datasets.pop();
      chart.update();
    }
  },
  {
    name: "Remove Data",
    handler(chart) {
      chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach(dataset => {
        dataset.data.pop();
      });

      chart.update();
    }
  }
];

function getStartOfWeek(date) {
  const day = date.getDay();
  const start = new Date(date);
  start.setDate(date.getDate() - day);
  return start;
}

function addHabit() {
  var x = document.getElementById("menu_habit");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function addStat() {
  alert("add stat");
}

function myFunction() {
  alert("here2");
  var x = document.getElementById("menu_rtn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("menu_habit");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("menu_cat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function routineChecked(rtnId) {
  // Prepare the update data
  const updateData = {
    $inc: { tally: 1 }, // Increment the tally by 1
    $push: { recordedDates: new Date().toISOString() } // Push the current date to recordedDates array
  };

  axios
    .put(`${process.env.PERPETUA_API_URL}/routines/${rtnId}`, updateData)
    .then(response => {
      console.log(
        "Category updated with new tally and recorded date:",
        response.data
      );
      // TODO: Handle successful update, e.g., update the UI or state
    })
    .catch(error => {
      console.error("Error updating category:", error);
      // TODO: Handle errors here, e.g., show a notification
    });
}

function routineUnchecked(rtnId) {
  // Prepare the update data
  const updateData = {
    $inc: { tally: 1 }, // Increment the tally by 1
    $push: { recordedDates: new Date().toISOString() } // Push the current date to recordedDates array
  };

  axios
    .put(`${process.env.PERPETUA_API_URL}/routines/${rtnId}`, updateData)
    .then(response => {
      console.log(
        "Category updated with new tally and recorded date:",
        response.data
      );
      // TODO: Handle successful update, e.g., update the UI or state
    })
    .catch(error => {
      console.error("Error updating category:", error);
      // TODO: Handle errors here, e.g., show a notification
    });
}

function handleHabitCheckboxChange(checkbox) {
  // Extract all necessary data attributes from the checkbox
  const habitId = checkbox.dataset.habitId;
  const habitDates = checkbox.dataset.habitDates; // make sure to parse or process this as needed
  const habitName = checkbox.dataset.habitName;
  const habitCategory = checkbox.dataset.habitCategory;
  const habitReminder = checkbox.dataset.habitReminder;
  const habitDays = checkbox.dataset.habitDays; // make sure to parse or process this as needed

  if (checkbox.checked) {
    habitChecked(
      habitId,
      habitDates,
      habitName,
      habitCategory,
      habitReminder,
      habitDays
    );
  } else {
    habitUnchecked(
      habitId,
      habitDates,
      habitName,
      habitCategory,
      habitReminder,
      habitDays
    );
  }
}

// window.handleHabitCheckboxChange = function(
//   checkbox,
//   habitId,
//   habitDates,
//   habitName,
//   habitCategory,
//   habitReminder,
//   habitDays
// ) {
//   if (checkbox.checked) {
//     habitChecked(
//       habitId,
//       habitDates,
//       habitName,
//       habitCategory,
//       habitReminder,
//       habitDays
//     );
//   } else {
//     habitUnchecked(
//       habitId,
//       habitDates,
//       habitName,
//       habitCategory,
//       habitReminder,
//       habitDays
//     );
//   }
// };

function handleRtnCheckboxChange(checkbox, routineId) {
  if (checkbox.checked) {
    routineChecked(routineId);
  } else {
    routineUnchecked(routineId);
  }
}

async function habitChecked(
  habitId,
  habitDates,
  habitName,
  habitCategory,
  habitReminder,
  habitDays
) {
  console.log(habitDates);
  if (!Array.isArray(habitDates)) {
    habitDates = habitDates ? [habitDates] : [];
  }
  // Add the current date to habitDates array
  habitDates.push(new Date().toISOString());
  // Prepare the update data
  const updateData = {
    name: habitName,
    category: habitCategory,
    days: habitDays,
    dates: habitDates,
    reminder: habitReminder
  };

  console.log(updateData);

  await axios
    .put(
      "https://pixe.la/v1/users/matkins/graphs/all-habits/increment",
      {},
      {
        headers: { "X-USER-TOKEN": 10251025 }
      }
    )
    .then(response => {
      console.log("User creation response:", response.data);
    })
    .catch(error => {
      console.error("Error creating user:", error);
    });

  // await axios
  //   .put(`${process.env.PERPETUA_API_URL}/habits/${habitId}`, updateData)
  //   .then(response => {
  //     console.log(
  //       "Category updated with new tally and recorded date:",
  //       response.data
  //     );
  //     // TODO: Handle successful update, e.g., update the UI or state
  //   })
  //   .catch(error => {
  //     console.error("Error updating category:", error);
  //     // TODO: Handle errors here, e.g., show a notification
  //   });

  console.log({
    name: updateData.name,
    category: updateData.category,
    days: updateData.days,
    reminder: updateData.reminder,
    dates: updateData.dates
  });

  axios
    .put(`${process.env.PERPETUA_API_URL}/habits/${habitId}`, {
      name: updateData.name,
      category: updateData.category,
      days: updateData.days,
      reminder: updateData.reminder,
      dates: updateData.dates
    })
    .then(response => {
      console.log(
        "Category updated with new tally and recorded date:",
        response.data
      );
      // TODO: Handle successful update, e.g., update the UI or state
    })
    .catch(error => {
      console.error("Error updating category:", error);
      // TODO: Handle errors here, e.g., show a notification
    });
}

async function habitUnchecked(habitId, habitDates) {
  if (!Array.isArray(habitDates)) {
    habitDates = [];
  }
  // Remove the last date from the habitDates array
  habitDates.pop();

  await axios
    .put(
      "https://pixe.la/v1/users/matkins/graphs/all-habits/decrement",
      {},
      {
        headers: { "X-USER-TOKEN": 10251025 }
      }
    )
    .then(response => {
      console.log("User creation response:", response.data);
    })
    .catch(error => {
      console.error("Error creating user:", error);
    });

  await axios
    .put(`${process.env.PERPETUA_API_URL}/habits/${habitId}`, updateData)
    .then(response => {
      console.log(
        "Habit updated with new tally and recorded date:",
        response.data
      );
      // TODO: Handle successful update, e.g., update the UI or state
    })
    .catch(error => {
      console.error("Error updating category:", error);
      // TODO: Handle errors here, e.g., show a notification
    });
}

function menuCat() {
  var x = document.getElementById("menu_cat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuRtn() {
  var x = document.getElementById("menu_rtn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function moveCalendar(days) {
  console.log("Before change:", currentDate);
  currentDate.setDate(currentDate.getDate() + days);
  console.log("After change:", currentDate);
  updateCalendar();
}

// let boldedDate = null;

let currentDate = new Date();
let boldedDate = new Date(currentDate); // Set boldedDate to today's date initially
boldedDate.setHours(0, 0, 0, 0);

function updateCalendar() {
  const startOfWeek = getStartOfWeek(currentDate);

  const options = { month: "long" };
  const month = startOfWeek.toLocaleDateString("en-US", options);

  const monthDisplay = document.querySelector(".month-display");
  if (monthDisplay) {
    monthDisplay.textContent = month;
  } else {
    //console.error("Month display element not found");
  }

  const days = document.querySelectorAll(".week-display .day .date");
  days.forEach((day, index) => {
    const date = new Date(startOfWeek);
    date.setDate(date.getDate() + index);
    date.setHours(0, 0, 0, 0);

    day.textContent = date.getDate();

    // Determine if this day is the currently selected day
    const isSelectedDay = boldedDate && date.getTime() === boldedDate.getTime();
    day.classList.toggle("bold", isSelectedDay);

    day.addEventListener("click", function() {
      boldedDate = new Date(date); // Update boldedDate to the clicked date
      updateCalendar(); // Refresh the calendar

      const selectedDayOfWeek = boldedDate.toLocaleString("en-us", {
        weekday: "long"
      });
      router.navigate(`/Home?${selectedDayOfWeek}`);
    });
  });

  // Add event listener to the "Today" button
  const todayButton = document.getElementById("today");
  if (todayButton) {
    todayButton.addEventListener("click", function() {
      // Set currentDate to today's date
      currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      // Update the calendar
      updateCalendar();

      // Apply bold styling to today's date
      const today = new Date(); // This represents today's date
      today.setHours(0, 0, 0, 0);
      const days = document.querySelectorAll(".week-display .day .date");
      days.forEach(d => {
        d.classList.remove("bold"); // Remove bold from all dates
        const dayDate = new Date(currentDate);
        dayDate.setDate(
          dayDate.getDate() +
            Array.prototype.indexOf.call(days, d) -
            dayDate.getDay()
        );
        dayDate.setHours(0, 0, 0, 0);

        if (dayDate.getTime() === today.getTime()) {
          d.classList.add("bold"); // Apply bold to today's date
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", event => {
  updateCalendar();
});
function deleteHabit() {
  alert("here");
}

function alertShow() {
  alert("here");
}

function afterRender(state) {
  if (state.view === "Stats") {
    var compareStatsRadio = document.getElementById("compareStatsRadio");
    var allHabitsRadio = document.getElementById("allHabitsRadio");

    var allStatsDiv = document.getElementById("allStats");
    var pixelaGraphsDiv = document.getElementById("pixelaGraphs");

    compareStatsRadio.addEventListener("change", function() {
      if (this.checked) {
        allStatsDiv.style.display = "block";
        pixelaGraphsDiv.style.display = "none";
      }
    });

    if (document.getElementById("compareStatsRadio").checked) {
      allStatsDiv.style.display = "block";
      pixelaGraphsDiv.style.display = "none";
    }

    allHabitsRadio.addEventListener("change", function() {
      if (this.checked) {
        allStatsDiv.style.display = "none";
        pixelaGraphsDiv.style.display = "block";
      }
    });

    var ctx = document.getElementById("graph-chart-line");
    new Chart(ctx, config);
    var ctxPie = document.getElementById("graph-chart-pie");
    new Chart(ctxPie, configPie);
    var ctxBar = document.getElementById("graph-chart-bar");
    new Chart(ctxBar, configBar);
    var ctxRadar = document.getElementById("graph-chart-radar");
    new Chart(ctxRadar, configRadar);
  }

  if (state.view === "Home") {
    updateGreeting();
    var prevWeekButton = document.getElementById("prevWeek");
    if (prevWeekButton) {
      prevWeekButton.addEventListener("click", function() {
        moveCalendar(-7);
      });
    }

    var nextWeekButton = document.getElementById("nextWeek");
    if (nextWeekButton) {
      nextWeekButton.addEventListener("click", function() {
        moveCalendar(7);
      });
    }
    document.querySelectorAll(".menu-icon").forEach(icon => {
      icon.addEventListener("click", function(event) {
        const habitId = event.currentTarget.getAttribute("data-habit-id");
        const popupMenu = document.getElementById(`popup-menu-${habitId}`);
        if (popupMenu) {
          popupMenu.style.display =
            popupMenu.style.display === "none" ? "block" : "none";
        }
      });
    });
    document.getElementById("addHabit").addEventListener("click", addHabit);

    document
      .getElementById("today")
      .addEventListener("click", () =>
        updateCalendar((currentDate = new Date()))
      );

    document.querySelectorAll(".circle-card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });
    });

    updateCalendar();
  }

  if (state.view === "Habits") {
    attachCheckboxListeners(state);

    document.addEventListener("DOMContentLoaded", function() {
      var addButton = document.getElementById("addCat");
      if (addButton) {
        addButton.addEventListener("click", menuCat);
      }
    });

    const checkboxes = document.querySelectorAll(".check-box");
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("click", function() {
        const routineId = this.getAttribute("data-routine-id");
        handleRtnCheckboxChange(this, routineId);
      });
    });

    document.querySelectorAll(".menu-icon").forEach(icon => {
      icon.addEventListener("click", function(event) {
        const catId = event.currentTarget.getAttribute("data-cat-id");
        const popupMenu = document.getElementById(`popup-menu-${catId}`);
        if (popupMenu) {
          popupMenu.style.display =
            popupMenu.style.display === "none" ? "block" : "none";
        }
      });
    });

    document.querySelectorAll(".menu-icon").forEach(icon => {
      icon.addEventListener("click", function(event) {
        const rtnId = event.currentTarget.getAttribute("data-rtn-id");
        const popupMenu = document.getElementById(`popup-menu-${rtnId}`);
        if (popupMenu) {
          popupMenu.style.display =
            popupMenu.style.display === "none" ? "block" : "none";
        }
      });
    });

    document.querySelectorAll(".menu-icon").forEach(icon => {
      icon.addEventListener("click", function(event) {
        const habitId = event.currentTarget.getAttribute("data-habit-id");
        const popupMenu = document.getElementById(`popup-menu-${habitId}`);
        if (popupMenu) {
          popupMenu.style.display =
            popupMenu.style.display === "none" ? "block" : "none";
        }
      });
    });
    document
      .getElementById("delete-habit")
      .addEventListener("click", deleteHabit);
    document
      .getElementById("addHabitBtn")
      .addEventListener("click", function() {
        var selectedHabit = document.getElementById("habitSelect").value;
        if (selectedHabit) {
          var li = document.createElement("li");
          li.textContent = selectedHabit;
          li.setAttribute("data-value", selectedHabit);
          document.getElementById("selectedHabits").appendChild(li);

          document.getElementById("habitSelect").value = "";
        }
      });
    document.getElementById("addHabit").addEventListener("click", addHabit);
    document.getElementById("addCat").addEventListener("click", menuCat);
    document
      .getElementById("button_close")
      .addEventListener("click", myFunction);
    document.getElementById("addRtn").addEventListener("click", menuRtn);
    // document.getElementById("addSavebtn").addEventListener("click", saveHabit);
    document.querySelector("#menu_habit").addEventListener("submit", event => {
      event.preventDefault();
      // document.getElementById("menu_habit").submit();
      //habits
      // Get the form element
      const inputListHabit = event.target.elements;
      console.log("Input Element List", inputListHabit);

      // Create an empty array to hold the toppings
      const days = [];

      // Iterate over the toppings array

      for (let input of inputListHabit.days) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          days.push(input.value);
        }
      }

      // Create a request body object to send to the API
      const requestDataHabit = {
        name: inputListHabit.name.value,
        days: days,
        reminder: inputListHabit.reminder.value,
        notes: inputListHabit.notes.value
      };
      // Log the request body to the console
      console.log("request Body", requestDataHabit);
      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.PERPETUA_API_URL}/habits`, requestDataHabit)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Habits.habits.push(response.data);
          router.navigate("/Habits");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });

    document.querySelector("#menu_rtn").addEventListener("submit", event => {
      event.preventDefault();
      // document.getElementById("menu_rtn").submit();
      //routines
      // Get the form element
      const inputListRtn = event.target.elements;
      console.log("Input Element List", inputListRtn);

      // Create an empty array to hold the toppings
      // const habits = ["warm up", "exercise", "stretch"];

      // Iterate over the toppings array

      // for (let input of inputListRtn.selectedHabits) {
      //   // If the value of the checked attribute is true then add the value to the toppings array
      //   if (input.checked) {
      //     habits.push(input.value);
      //   }
      // }

      // Create a request body object to send to the API
      const requestDataRtn = {
        name: inputListRtn.name.value,
        //habits: habits,
        notes: inputListRtn.notes.value
      };
      // Log the request body to the console
      console.log("request Body", requestDataRtn);
      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.PERPETUA_API_URL}/routines`, requestDataRtn)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Routine.routines.push(response.data);
          router.navigate("/Habits");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });

    document.querySelector("#menu_cat").addEventListener("submit", event => {
      event.preventDefault();
      //catagories
      // Get the form element

      const inputListCat = event.target.elements;
      console.log("Input Element List", inputListCat);

      // Create a request body object to send to the API
      const requestDataCat = {
        name: inputListCat.name.value,
        notes: inputListCat.notes.value
      };
      // Log the request body to the console
      console.log("request Body", requestDataCat);
      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.PERPETUA_API_URL}/categories`, requestDataCat)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Category.categories.push(response.data);
          router.navigate("/Habits");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });

    document
      .getElementById("addRtn")
      .addEventListener("click", () => menuRtn());
    // document
    //   .getElementById("addHabit")
    //   .addEventListener("click", () => addHabit());
    document
      .getElementById("addCat")
      .addEventListener("click", () => menuCat());
    document
      .getElementById("button_close")
      .addEventListener("click", () => myFunction());
  }

  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.toggle("show");
  });
}

router.hooks({
  before: async (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    let day = new Date().toLocaleString("en-us", { weekday: "long" }); // Get current day of the week
    if (params && params.data && params.data.day) {
      day = params.data.day; // Use specified day if provided
    }
    if (boldedDate) {
      day = boldedDate.toLocaleString("en-us", { weekday: "long" });
      // Now use dayOfWeek as needed
    }

    switch (view) {
      case "Home":
        // Add any specific logic for the Home view
        await axios
          .get(`${process.env.PERPETUA_API_URL}/habits?days=${day}`)
          .then(response => {
            store.Home.habits = response.data;
          })
          .catch(error => {
            console.log("It puked", error);
          });
        done();
        break;

      case "Habits":
        await axios
          .get(`${process.env.PERPETUA_API_URL}/habits`)
          .then(response => {
            store.Habits.habits = response.data;
          })
          .catch(error => {
            console.log("It puked", error);
          });
        await axios
          .get(`${process.env.PERPETUA_API_URL}/categories`)
          .then(response => {
            store.Habits.categories = response.data;
          })
          .catch(error => {
            console.log("It puked", error);
          });
        await axios
          .get(`${process.env.PERPETUA_API_URL}/routines`)
          .then(response => {
            store.Habits.routines = response.data;
          })
          .catch(error => {
            console.log("It puked", error);
          });
        done();
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
