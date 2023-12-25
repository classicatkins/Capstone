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
    afterRender();
}

function afterRender() {
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });

    setupPixelaEventListeners();
}

function setupPixelaEventListeners() {
  const createUserButton = document.getElementById("createUserButton");
  if (createUserButton) {
      createUserButton.addEventListener("click", () => {
          createUser("classicatkins", "token"); // Replace 'username' and 'token' with actual values
      });
  }

  // Here you can add more event listeners for other Pixela API actions if needed
  // For example:
  // const createGraphButton = document.getElementById("createGraphButton");
  // if (createGraphButton) {
  //     createGraphButton.addEventListener("click", () => {
  //         createGraph("username", "token", "graphId", ...); // Replace with actual values and implement createGraph function
  //     });
  // }
}

function createUser(username, token) {
  console.log("Creating user:", username, token);
  // Implement the Axios POST request to create a user
  axios.post('https://pixe.la/v1/users', {
      token: token,
      username: username,
      agreeTermsOfService: 'yes',
      notMinor: 'yes'
  })
  .then(response => {
      console.log('User creation response:', response.data);
  })
  .catch(error => {
      console.error('Error creating user:', error);
  });
}

router.hooks({
    before: (done, params) => {
        const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

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
        const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";
        render(store[view]);
    }
});

router.on({
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
}).resolve();

// Example Axios GET request
axios.get("https://api.openweathermap.org/data/2.5/weather?q=St.%20Louis&APPID=723e0986e0f98b33c0d046e7f38d272c");
