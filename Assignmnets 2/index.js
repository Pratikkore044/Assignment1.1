const form = document.getElementById("registrationform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmpassword"); 


const validateName = () => {
    if (nameInput.value.trim() === "") {
        alert("Name is required.");
        return false;
    }
    return true;
};

const validateEmail = () => { 
    if (emailInput.value.trim() === "") {
        alert("Email is required.");
        return false;
    }
    return true;
};

const validatePassword = () => {
        if(passwordInput.value.trim() === "") {
            alert("password is required.");
            return false;
        } if(confirmPasswordInput.value.trim() === ""){
            alert("confirmpassword is required.");
            return false;
        }
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();  

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        alert("Registration successful!");
        form.reset();  
    }
});
