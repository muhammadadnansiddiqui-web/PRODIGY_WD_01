const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Scroll effect
window.onscroll =  ()=> {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
