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

function clear() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

function menuCat() {
  var x = document.getElementById("menu_cat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function saveHabit() {
  //    return msg;
  let x = document.getElementById("firstName").value;
  let y = document.getElementById("lastName").value;

  alert(x + "   " + y);
}

function menuRtn() {
  var x = document.getElementById("menu_rtn");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function updateCalendar() {
  const startOfWeek = getStartOfWeek(currentDate);
  const options = { month: "long" };
  const month = startOfWeek.toLocaleDateString("en-US", options);
  document.querySelector(".month-display").textContent = month;

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today to the start of the day

  const days = document.querySelectorAll(".week-display .day .date");
  days.forEach((day, index) => {
    const date = new Date(startOfWeek);
    date.setDate(date.getDate() + index);
    date.setHours(0, 0, 0, 0); // Normalize the date to the start of the day

    day.textContent = date.getDate();
    day.classList.toggle(
      "bold",
      date.getTime() === today.getTime() // Compare the dates
    );
  });
}

function alertShow() {
  alert("here");
}

function afterRender(state) {
  //todo: add calls here
  if (state.view === "Home") {
    document
      .getElementById("deletePixelButton")
      .addEventListener("click", () => alertShow("Delete Pixel clicked"));
  }

  if (state.view === "Today") {
    document
      .getElementById("today")
      .addEventListener("click", () =>
        updateCalendar((currentDate = new Date()))
      );

    document.querySelectorAll(".circle-card").forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("active");
      });

      document.getElementById("prevWeek").addEventListener("click", function() {
        currentDate.setDate(currentDate.getDate() - 1);
        updateCalendar();
      });

      document.getElementById("nextWeek").addEventListener("click", function() {
        currentDate.setDate(currentDate.getDate() + 1);
        updateCalendar();
      });
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
    document.getElementById("addHabit").addEventListener("click", addHabit);
    document.getElementById("addCat").addEventListener("click", menuCat);
    document
      .getElementById("button_close")
      .addEventListener("click", myFunction);
    document.getElementById("addRtn").addEventListener("click", menuRtn);
    document.getElementById("addSavebtn").addEventListener("click", saveHabit);

    document.getElementById("addTest").addEventListener("click", addTest);
    document.getElementById("button_clear").addEventListener("click", clear);

    document
      .getElementById("addRtn")
      .addEventListener("click", () => menuRtn());
    document
      .getElementById("addHabit")
      .addEventListener("click", () => addHabit());
    document
      .getElementById("addCat")
      .addEventListener("click", () => menuCat());
    // document
    //   .getElementById("addSavebtn")
    //   .addEventListener("click", () => addTest());
    document
      .getElementById("button_close")
      .addEventListener("click", () => myFunction());
    // function toggleMenu(icon) {
    //   const popupMenu = icon.nextElementSibling;
    //   popupMenu.classList.toggle("active");
    // }
    // document.addEventListener("click", function(event) {
    //   if (!event.target.classList.contains("menu-icon")) {
    //     const popupMenus = document.querySelectorAll(".popup-menu.active");
    //     for (const menu of popupMenus) {
    //       menu.classList.remove("active");
    //     }
    //   }
    // });
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
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    switch (view) {
      case "Home":
        // Add any specific logic for the Home view
        done();
        break;
      // Implement other cases as needed
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

// Example Axios GET request
// axios.get(
//   "https://api.openweathermap.org/data/2.5/weather?q=St.%20Louis&APPID=723e0986e0f98b33c0d046e7f38d272c"
// );

// function alertShow() {
//   alert();
// }
