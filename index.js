// Assuming these components are defined in your project
import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

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

let currentDate = new Date();

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

window.categoryChecked = function(catId) {
  // Prepare the update data
  const updateData = {
    $inc: { tally: 1 }, // Increment the tally by 1
    $push: { recordedDates: new Date().toISOString() } // Push the current date to recordedDates array
  };

  axios
    .patch(`${process.env.PERPETUA_API_URL}/categories/${catId}`, updateData)
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
};

window.closeFormRtn = function() {
  alert("here");
  var x = document.getElementById("menu_rtn");
  x.style.display = "none";
};

window.closeFormHabit = function() {
  alert("here");
  var x = document.getElementById("menu_habit");
  x.style.display = "none";
};

window.closeFormCat = function() {
  alert("here");
  var x = document.getElementById("menu_cat");
  x.style.display = "none";
};

window.menuCat = function() {
  var x = document.getElementById("menu_cat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function menuRtn() {
  var x = document.getElementById("menu_rtn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

window.moveCalendar = function(days) {
  console.log("Before change:", currentDate);
  currentDate.setDate(currentDate.getDate() + days);
  console.log("After change:", currentDate);
  updateCalendar();
};

let boldedDate = null;

function updateCalendar() {
  const startOfWeek = getStartOfWeek(currentDate);
  console.log("Start of Week:", startOfWeek); // Debugging statement

  const options = { month: "long" };
  const month = startOfWeek.toLocaleDateString("en-US", options);
  console.log("Month:", month); // Debugging statement

  const monthDisplay = document.querySelector(".month-display");
  if (monthDisplay) {
    monthDisplay.textContent = month;
  } else {
    console.error("Month display element not found");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = document.querySelectorAll(".week-display .day .date");
  days.forEach((day, index) => {
    const date = new Date(startOfWeek);
    date.setDate(date.getDate() + index);
    date.setHours(0, 0, 0, 0);

    day.textContent = date.getDate();
    day.classList.toggle("bold", date.getTime() === today.getTime());

    // day.addEventListener("click", function() {
    //   days.forEach(d => d.classList.remove("bold"));
    //   this.classList.add("bold");
    //   boldedDate = new Date(currentDate);
    //   boldedDate.setDate(boldedDate.getDate() + index);
    // });
    // day.addEventListener("click", function() {
    //   days.forEach(d => d.classList.remove("bold"));
    //   this.classList.add("bold");
    //   boldedDate = new Date(currentDate);
    //   boldedDate.setDate(boldedDate.getDate() + index);

    //   // Trigger a router navigation with the selected date
    //   const selectedDayOfWeek = boldedDate.toLocaleString("en-us", {
    //     weekday: "long"
    //   });
    //   router.navigate(`/${selectedDayOfWeek}`);
    // });
    day.addEventListener("click", function() {
      // ... existing logic for bold ...
      days.forEach(d => d.classList.remove("bold"));
      this.classList.add("bold");
      boldedDate = new Date(currentDate);
      boldedDate.setDate(boldedDate.getDate() + index);
      // Get the day of the week for the selected date
      const selectedDayOfWeek = boldedDate.toLocaleString("en-us", {
        weekday: "long"
      });

      router.navigate(`/Today?${selectedDayOfWeek}`);
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

window.togglePopupMenu = function(catId) {
  const popupMenuId = `popup-menu-${catId}`;
  const popupMenu = document.getElementById(popupMenuId);

  // Debugging log
  console.log(
    "Toggling popup menu for ID:",
    popupMenuId,
    "; Found element:",
    popupMenu
  );

  if (popupMenu) {
    // Close all open menus
    document.querySelectorAll(".popup-menu").forEach(menu => {
      if (menu.id !== popupMenuId) {
        menu.style.display = "none";
      }
    });

    // Toggle the clicked category's menu
    popupMenu.style.display =
      popupMenu.style.display === "block" ? "none" : "block";
  } else {
    console.error("Popup menu element not found:", popupMenuId);
  }
};

window.deleteCat = function(catId) {
  // Confirm before delete
  // if (!confirm("Are you sure you want to delete this category?")) {
  //   return;
  // }

  axios
    .delete(`${process.env.PERPETUA_API_URL}/categories/${catId}`)
    .then(response => {
      console.log("Category deleted:", response.data);
      // TODO: Handle successful deletion, e.g., update the UI or state
    })
    .catch(error => {
      console.error("Error deleting category:", error);
      // TODO: Handle errors here, e.g., show a notification
    });
};

function afterRender(state) {
  if (state.view === "Home") {
    document
      .getElementById("deletePixelButton")
      .addEventListener("click", () => alertShow("Delete Pixel clicked"));
  }

  if (state.view === "Today") {
    document.getElementById("addHabit").addEventListener("click", addHabit);
    // document
    //   .getElementById("delete-habit")
    //   .addEventListener("click", deleteHabit);
    document
      .getElementById("today")
      .addEventListener("click", () =>
        updateCalendar((currentDate = new Date()))
      );

    document.querySelectorAll(".circle-card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });

      // document.getElementById("prevWeek").addEventListener("click", function() {
      //   currentDate.setDate(currentDate.getDate() - 1);
      //   updateCalendar();
      // });

      // document.getElementById("nextWeek").addEventListener("click", function() {
      //   currentDate.setDate(currentDate.getDate() + 1);
      //   updateCalendar();
      // });

      // document.getElementById("prevWeek").addEventListener("click", function() {
      //   alert("here");
      //   currentDate.setDate(currentDate.getDate() - 7); // Move back by a week
      //   updateCalendar();
      // });

      // document.getElementById("nextWeek").addEventListener("click", function() {
      //   currentDate.setDate(currentDate.getDate() + 7); // Move forward by a week
      //   updateCalendar();
      // });
    });

    // document.addEventListener("DOMContentLoaded", event => {
    //   setupMenuToggle();
    // });

    // function setupMenuToggle() {
    //   const menuIcons = document.querySelectorAll(".menu-icon");

    //   // Function to close all menus
    //   function closeAllMenus() {
    //     document.querySelectorAll(".popup-menu").forEach(menu => {
    //       menu.classList.remove("show");
    //     });
    //   }

    //   // Toggle menu on icon click
    //   menuIcons.forEach(icon => {
    //     icon.addEventListener("click", function(event) {
    //       closeAllMenus(); // Close all menus
    //       this.nextElementSibling.classList.toggle("show");
    //       event.stopPropagation(); // Prevent click from immediately propagating to document
    //     });
    //   });

    //   // Close menu when clicking outside
    //   document.addEventListener("click", function(event) {
    //     if (!event.target.matches(".menu-icon")) {
    //       closeAllMenus();
    //     }
    //   });

    updateCalendar();
  }

  if (state.view === "Habits") {
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

          // Optional: Remove the selected habit from the dropdown
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

  // if (state.view === "Stats") {
  //   document.querySelectorAll(".circle-card").forEach(card => {
  //     card.addEventListener("click", () => {
  //       card.classList.toggle("active");
  //     });
  //   });
  // }

  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.toggle("show");
  });

  // setupPixelaEventListeners();
}

// function setupPixelaEventListeners() {
//   const createUserButton = document.getElementById("createUserButton");
//   if (createUserButton) {
//     createUserButton.addEventListener("click", () => {
//       createUser("classicatkins", "token"); // Replace 'username' and 'token' with actual values
//     });
//   }
// }

// function createUser(username, token) {
//   console.log("Creating user:", username, token);
//   // Implement the Axios POST request to create a user
//   axios
//     .post("https://pixe.la/v1/users", {
//       token: token,
//       username: username,
//       agreeTermsOfService: "yes",
//       notMinor: "yes"
//     })
//     .then(response => {
//       console.log("User creation response:", response.data);
//     })
//     .catch(error => {
//       console.error("Error creating user:", error);
//     });
// }

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
        done();
        break;
      // Implement other cases as needed
      // default:
      //   done();
      case "Today":
        // Add any specific logic for the Home view
        axios
          .get(`${process.env.PERPETUA_API_URL}/habits?days=${day}`)
          .then(response => {
            store.Habits.habits = response.data;
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
