import html from "html-literal";
import favicon from "../assets/img/favicon.svg";

export default links => html`
  <nav>
    <div class="nav-inline">
      <ul class="nav-left">
      <img src="${favicon}" alt="Favicon" class="favicon">
      <!-- <li class="nav-perpetua"><a href="/Home" title="Home" data-navigo>Perpetua</a></li> -->
      </ul>
      <ul class="nav-left">
      <!-- <img src="${favicon}" alt="Favicon" class="favicon"> -->
      <li class="nav-perpetua"><a href="/Home" title="Home" data-navigo>Perpetua</a></li>
      </ul>
    </div>
    <div class="nav-right">
    <ul>
    <i class="fas fa-bars"></i>
      ${links
        .map(link => {
          if (link.title === "Settings") {
            // If link.title is "Settings", replace with the gear icon
            return `<li class="hidden--mobile"><a href="/${link.title}" title="${link.title}" data-navigo><i class="fa-solid fa-gear"></i></a></li>`;
          } else {
            // For other link titles, use the default behavior
            return `<li class="hidden--mobile"><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`;
          }
        })
        .join("")}
    </ul>
    </div>
  </nav>
`;

