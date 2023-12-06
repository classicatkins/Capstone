document.addEventListener("DOMContentLoaded", function() {
  var hamburgerIcon = document.querySelector(".fa-bars"); // Selects the hamburger icon
  var dropdownContent = document.querySelector(".dropdown-content");

  // Event listener for clicking the hamburger icon
  hamburgerIcon.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent click from immediately propagating
    dropdownContent.classList.toggle("show");
  });

  // Event listener for clicking anywhere on the page
  document.addEventListener("click", function(event) {
    // If clicking outside the dropdown content and the icon, hide the dropdown
    if (
      !dropdownContent.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});
