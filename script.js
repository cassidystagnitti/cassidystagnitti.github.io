function makeNavbarSticky() {
  const navbar = document.querySelector('.navbar'); // Get the navigation bar element
  const sticky = navbar.offsetTop; // Get the offset position of the navbar

  // Add the sticky class to the navbar when you reach its scroll position
  function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  // Listen for scroll events and call the stickyNavbar function
  window.addEventListener('scroll', stickyNavbar);
}

// Call the makeNavbarSticky function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', makeNavbarSticky);
