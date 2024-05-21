const emailLabel = document.querySelector("#email_label");
const emailInput = document.querySelector("input");
const emailError = document.querySelector(".error");
const callToActionInput = document.querySelector(".call_to_action_input");
const callToActionError = document.querySelector(".call_to_action_error");

function validateEmail() {
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please check your email";
        emailInput.style.borderColor = "red";
        return false;
    } else if (emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "";
        emailInput.style.borderColor = "green";
        return true;
    }
}
function validateActionEmail() {
    if (callToActionInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        callToActionError.innerHTML = "";
        return true;
    } else if (!callToActionInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        callToActionError.innerHTML = "Please check your email";
        callToActionInput.style.borderColor = "red";
        return false;
    }
}