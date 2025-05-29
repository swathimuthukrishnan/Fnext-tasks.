document.getElementById("Registrationform").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from reloading the page

    const password = document.getElementById("password").value;

    document.getElementById("message").textContent = "REGISTRATION COMPLETED";
});