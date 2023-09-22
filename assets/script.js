function validateForm() {
    // Clear previous error message
    document.getElementById("errorMsg").textContent = "";

    // Validate the email using a regular expression
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailInput = document.getElementById("email");
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById("errorMsg").textContent = "Invalid email address";
        emailInput.focus();
        return false;
    }

    // You can add more validation rules for other fields here

    return true;
}


