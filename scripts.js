// Toggle navigation menu on small screens
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('header nav ul');

// Add event listener to the button to toggle the menu
menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form validation on Contact page
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Message sent successfully!");
        this.reset();  // Reset the form fields after submission
    }
});
