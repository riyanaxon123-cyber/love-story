function checkPassword() {

    const password = document.getElementById("password").value;

    const correctPassword = "IandR27121609";

    if (password === correctPassword) {

        window.location.href = "index.html";

    } else {

        document.getElementById("error-message").textContent =
            "Incorrect password. Please try again.";

    }

}