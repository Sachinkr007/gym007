// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// Display current year in footer
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('current-year');
yearElement.textContent = currentYear;

// Perform additional actions or add custom JavaScript code as needed
