/* global console, alert, confirm  */
console.log('hey again.');

const contact = document.querySelector('.contact');
const backToTop = document.querySelector('.back-to-top');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  scrollY < 10
    ? nav.classList.remove('scrolled')
    : nav.classList.add('scrolled');

  const coords = contact.getBoundingClientRect();
  coords.top < 900
    ? backToTop.classList.add('show')
    : backToTop.classList.remove('show');
});
