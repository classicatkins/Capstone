
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname;

  links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active-link');
      }
  });
});
