import html from "html-literal";
import favicon from "../assets/img/favicon.svg";

export default (links, activeView) => html`
  <nav>
    <div class="nav-inline">
      <ul class="nav-left">
        <img src="${favicon}" alt="Favicon" class="favicon" />
        <li class="nav-perpetua ${activeView === "Home" ? "active" : ""}">
          <a href="/Home" title="Home" data-navigo>Perpetua</a>
        </li>
      </ul>
    </div>
    <div class="nav-right">
      <ul>
        <i class="fas fa-bars"></i>
        <li class="dropdown">
          <!-- Dropdown Menu -->

          <ul class="dropdown-content">
            <li><a href="today" class="nav-link">Home</a></li>

            <li><a href="habits" class="nav-link">Habits</a></li>

            <li><a href="stats" class="nav-link">Stats</a></li>

            <li><a href="contact" class="nav-link">Contact</a></li>

            <li><a href="about" class="nav-link">About</a></li>

            <li><a href="settings" class="nav-link">Settings</a></li>
          </ul>
        </li>

        ${links
          .map(link => {
            const isActive = link.title === activeView;
            console.log(
              `Link: ${link.title}, Active: ${activeView}, Is Active: ${isActive}`
            );
            return `
    <li class="${isActive ? "active" : ""} hidden--mobile">
      <a href="/${link.title}" title="${link.title}" data-navigo>
        ${
          link.title === "Settings"
            ? `<i class="fa-solid fa-gear"></i>`
            : link.text
        }
      </a>
    </li>`;
          })
          .join("")}
      </ul>
    </div>
  </nav>
`;

// import html from "html-literal";
// import favicon from "../assets/img/favicon.svg";

// export default links => html`
//   <nav>
//     <div class="nav-inline">
//       <ul class="nav-left">
//         <img src="${favicon}" alt="Favicon" class="favicon" />
//         <!-- <li class="nav-perpetua"><a href="/Home" title="Home" data-navigo>Perpetua</a></li> -->
//       </ul>
//       <ul class="nav-left">
//         <!-- <img src="${favicon}" alt="Favicon" class="favicon"> -->
//         <li class="nav-perpetua">
//           <a href="/Home" title="Home" data-navigo>Perpetua</a>
//         </li>
//       </ul>
//     </div>
//     <div class="nav-right">
//       <ul>
//         <i class="fas fa-bars"></i>
//         <li class="dropdown">
//                 <!-- Dropdown Menu -->
//                 <ul class="dropdown-content">
//                     <li><a href="today" class="nav-link">Home</a></li>
//                     <li><a href="habits" class="nav-link">Habits</a></li>
//                     <li><a href="stats" class="nav-link">Stats</a></li>
//                     <li><a href="contact" class="nav-link">Contact</a></li>
//                     <li><a href="about" class="nav-link">About</a></li>
//                     <li><a href="settings" class="nav-link">Settings</a></li>
//                 </ul>
//             </li>

//           ${links
//             .map(link => {
//               if (link.title === "Settings") {
//                 // If link.title is "Settings", replace with the gear icon
//                 return `<li class="hidden--mobile"><a href="/${link.title}" title="${link.title}" data-navigo><i class="fa-solid fa-gear"></i></a></li>`;
//               } else {
//                 // For other link titles, use the default behavior
//                 return `<li class="hidden--mobile"><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`;
//               }
//             })
//             .join("")}
//         </li>
//       </ul>
//     </div>
//   </nav>
// `;
