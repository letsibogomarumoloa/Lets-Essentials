// ======================================
// LETS ESSENTIALS ADMIN LOGIN
// login.js
// ======================================

// Demo credentials
// Replace with a real authentication system later.

const ADMIN_EMAIL = "admin@letsessentials.co.bw";
const ADMIN_PASSWORD = "Lets@2026";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// ----------------------------
// Show / Hide Password
// ----------------------------

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    }else{

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

    }

});

// ----------------------------
// Login
// ----------------------------

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){

        localStorage.setItem("adminLoggedIn","true");

        loginMessage.style.color = "#198754";
        loginMessage.textContent = "Login successful... Redirecting";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        },1000);

    }else{

        loginMessage.style.color = "#dc3545";
        loginMessage.textContent = "Invalid email or password.";

    }

});
