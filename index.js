import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
}

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
//render();

// add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var hamburgerIcon = document.querySelector(".fa-bars"); // Selects the hamburger icon
//   var dropdownContent = document.querySelector(".dropdown-content");
//
//   // Event listener for clicking the hamburger icon
//   hamburgerIcon.addEventListener("click", function(event) {
//     event.stopPropagation(); // Prevent click from immediately propagating
//     dropdownContent.classList.toggle("show");
//   });
//
//   // Event listener for clicking anywhere on the page
//   document.addEventListener("click", function(event) {
//     // If clicking outside the dropdown content and the icon, hide the dropdown
//     if (
//       !dropdownContent.contains(event.target) &&
//       !hamburgerIcon.contains(event.target)
//     ) {
//       dropdownContent.classList.remove("show");
//     }
//   });
// });
