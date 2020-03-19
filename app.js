const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const gender = document.getElementsByClassName("gender");
const textarea = document.getElementById("comment");
const submit = document.getElementById("submitBtn");
const regex = /^[a-zA-Z\s]*$/; 

    
submit.addEventListener("click" , function(event){
    event.preventDefault();

    if (firstName.value === "" || regex.test(firstName.value === false)){
        return;
    } 
    if (lastName.value === "" || regex.test(lastName.value === false)) {
        return;
    }

    displayBanner();
})

function invalidForm() {
    if (firstName.value === "" || regex.test(firstName.value === false)) {
        firstName.style.borderColor = "red";
    }
    if (lastName.value === "" || regex.test(lastName.value === false)) {
        lastName.style.borderColor = "red";
    }
}

submit.addEventListener("click" ,invalidForm , true);

function validForm() {
    if (firstName.value !== "" || regex.test(firstName.value === true)){
        firstName.style.borderColor ="unset";
    }

    if (lastName.value !== "" || regex.test(lastName.value === true)){
        lastName.style.borderColor ="unset";
    }


}

firstName.addEventListener("keydown", validForm);
lastName.addEventListener("keydown", validForm);

function displayBanner() {
    const banner = document.getElementById("banner");
    banner.style.visibility = "visible";
    document.getElementById("userFirstName").innerHTML = firstName.value;
}
