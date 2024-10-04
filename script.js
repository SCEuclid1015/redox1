// Smooth scrolling to anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Responsive navigation menu
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Close navigation menu when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('nav')) {
    nav.classList.remove('nav-open');
  }
});
