// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to handle smooth scrolling
function smoothScroll(e) {
  e.preventDefault(); // Prevent default anchor link behavior

  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  const headerHeight = document.querySelector('header').offsetHeight; // Get header height

  const scrollPosition = targetElement.offsetTop - headerHeight; // Calculate scroll position

  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
}

// Add click event listener to all navigation links
navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});
