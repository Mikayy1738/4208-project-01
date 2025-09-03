function checkPassword() {
    const correctPassword = "friend";
    const password = document.getElementById("password").value;
    if (password === correctPassword) {
        window.location.href = "watcher.html";
    } else {
        alert("The door stands firm and silent, not responding to your words. Try again.");
    }
}