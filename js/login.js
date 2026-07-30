/*
==========================================================
Travel Inquiry Management System (TIMS)
Login Module
Version : 1.0.0
==========================================================
*/

// ======================================================
// Page Loaded
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }

});

// ======================================================
// Login User
// ======================================================

async function loginUser(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const loader = document.getElementById("loader");
    const btnText = document.getElementById("btnText");
    const errorBox = document.getElementById("error");
    const loginButton = document.querySelector(".btn-login");

    // Hide previous error
    errorBox.style.display = "none";
    errorBox.innerText = "";

    // Basic validation
    if (email === "" || password === "") {

        errorBox.innerText = "Please enter your email and password.";
        errorBox.style.display = "block";
        return;

    }

    // Disable button
    loginButton.disabled = true;
    loader.style.display = "inline-block";
    btnText.innerText = "Signing In...";

    try {

        const result = await signIn(email, password);

        if (result.success) {

            console.log("Login Successful");
            console.log(result.user);

            alert("Login Successful!");

            // Dashboard redirection will be added later.
            // Example:
            // window.location.href = "dashboard/dashboard.html";

        } else {

            errorBox.innerText = result.message || "Invalid email or password.";
            errorBox.style.display = "block";

        }

    } catch (error) {

        console.error(error);

        errorBox.innerText = "An unexpected error occurred.";
        errorBox.style.display = "block";

    }

    // Enable button again
    loginButton.disabled = false;
    loader.style.display = "none";
    btnText.innerText = "Login";

}

// ======================================================
// Show / Hide Password
// ======================================================

function togglePassword() {

    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (password.type === "password") {

        password.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }

}