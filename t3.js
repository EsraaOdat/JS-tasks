// firstName

let firstName = document.getElementById("firstName");
let message_error1 = document.getElementById("error1");

firstName.addEventListener("input", getError1);
var pattern1 = /^[^0-9]*$/;

function getError1() {
    if (pattern1.test(firstName.value)) {
        message_error1.innerHTML = "";
    } else {
        message_error1.innerHTML = "Numbers are not allowed";
    }
}


// lastName
let lastName = document.getElementById("lastName");
let message_error2 = document.getElementById("error2");

lastName.addEventListener("input", getError2);
var pattern2 = /^[^0-9]*$/;

function getError2() {
    if (pattern2.test(lastName.value)) {
        message_error2.innerHTML = "";
    } else {
        message_error2.innerHTML = "Numbers are not allowed";
    }
}

// email

let email = document.getElementById("email");
let email_error = document.getElementById("error4");

email.addEventListener("input", getError4);
var patternEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function getError4() {
    if (patternEmail.test(email.value)) {
        email_error.innerHTML = "";
    } else {
        email_error.innerHTML = "This email is not valid";
    }
}


// birthDate
let birthDate = document.getElementById("birthDate");
let message_error3 = document.getElementById("error3");

birthDate.addEventListener("input", getError3);
var pattern_birthDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

function getError3() {
    if (pattern_birthDate.test(birthDate.value)) {
        message_error3.innerHTML = "";
    } else {
        message_error3.innerHTML = "The format should be dd/mm/yyyy";
    }
}



// password

let main_password = document.getElementById("password");
let password_error = document.getElementById("password_error");

main_password.addEventListener("input", getError5);

function getError5() {
    if (main_password.value.length < 6) {
        password_error.innerHTML = "Too short";
    } else {
        password_error.innerHTML = "";
    }
}


// confirmPassword

let main_confirmPassword = document.getElementById("confirmPassword");
let confirm_password_error = document.getElementById("confirmPassword_error");

main_confirmPassword.addEventListener("input", getError6);

function getError6() {
    if (main_confirmPassword.value !== main_password.value) {
        confirm_password_error.innerHTML = "Passwords do not match";
    } else {
        confirm_password_error.innerHTML = "";
    }
}
