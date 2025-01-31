document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const emailButtons = document.getElementById("emailButtons");
    const getStarted = document.getElementById("getStartedButton");
    const errorMessage = document.getElementById("error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener("focus", function () {
        emailButtons.classList.remove("animate-bounce"); // Remove animation class
        errorMessage.classList.add("invisible");
    });

    emailInput.addEventListener("blur", function () {
        emailButtons.classList.add("animate-bounce"); // Add animation class back when unfocused
    });

    getStarted.addEventListener("click", function () {
        var email = emailInput.value;
        if (!email) {
            errorMessage.innerText="Email address is required!";
            errorMessage.classList.remove("invisible");
            errorMessage.classList.add("text-red-600");
            errorMessage.classList.remove("text-emerald-600");
        }
        else if (!emailRegex.test(email)) {
            errorMessage.innerText="Not a valid email!";
            errorMessage.classList.remove("invisible");
            errorMessage.classList.add("text-red-600");
            errorMessage.classList.remove("text-emerald-600");
        }
        else {
            errorMessage.innerText="Email is valid, Thank you!";
            errorMessage.classList.remove("invisible");
            errorMessage.classList.remove("text-red-600");
            errorMessage.classList.add("text-emerald-600");
        }
    });
});