// Mobile navigation, footer year and demonstration contact form.
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });
  }

  document.querySelectorAll('#year').forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const message = document.getElementById('formMessage');
      message.textContent = 'Thank you! This demo form is working on the page, but it does not send or store your details.';
      contactForm.reset();
    });
  }
});
