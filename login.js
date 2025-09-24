const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "" || password === "") {
        errorMsg.textContent = "Please fill in all fields!";
    } else {
        errorMsg.textContent = "";
        // Redirect to ecostudy.html
        window.location.href = "ecoverse.html";
    }
});