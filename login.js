alert("login.js ishladi");

function checkPassword() {

    const password = document.getElementById("password").value.trim();

    if (password === "IandR27121609") {

        alert("Parol to'g'ri!");

        window.location.href = "index.html";

    } else {

        alert("Parol noto'g'ri!");

        document.getElementById("error-message").textContent =
            "Incorrect password. Please try again.";

    }

}