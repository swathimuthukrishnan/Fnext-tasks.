document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from reloading the page

    const password = document.getElementById("password").value;

    document.getElementById("message").textContent = "login successfully";
});
document.getElementById("user").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from reloading the page

    const password = document.getElementById("password").value;

    document.getElementById("message").textContent = "welcome";
});