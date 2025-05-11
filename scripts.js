const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('header nav ul');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
    } else {
      alert('Message sent successfully!');
      form.reset();
    }
  });
}
