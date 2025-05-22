// Simple script to toggle the mobile dropdown menu
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});
