const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const gender = document.getElementsByClassName("gender");
const textarea = document.getElementById("comment");
const submit = document.getElementById("submitBtn");
const regex = /^[a-zA-Z\s]*$/; 

    
submit.addEventListener("click" , function(event){
    event.preventDefault();

    // functia test, primeste ca parametru un string, deci in cazul tau, valoarea din input
    // si returneaza un boolean, deci tu rezultatul probabil ca doresti sa il compari cu false
    // si nu valoarea din input, valoarea din input nu ar avea sens sa o compari cu false
    if (firstName.value === "" || regex.test(firstName.value) === false){
        // acest return aici, zice ca, ar trebui sa se iasa din functie
        return;
    } 
    // aici pui alse
    // si pe else, pui borderul read

    if (lastName.value === "" || regex.test(lastName.value) === false) {
        return;
    }
    // aici pui alse
    // si pe else, pui borderul read

    // daca cumva se ajunge pe unul din if-uri si se face return, nu mai ajunge aici, dar banui ca asta si vrei
    displayBanner();
})

// de sters funtia
function invalidForm() {
    // codul de aici - trebuie mutat mai sus 
    if (firstName.value === "" || regex.test(firstName.value) === false) {
        firstName.style.borderColor = "red";
    }
    if (lastName.value === "" || regex.test(lastName.value)  === false) {
        lastName.style.borderColor = "red";
    }
}

// nu inteleg de ce ai doua event listeners
// click-ul pe buton il asculti o data si in acea funtie faci toate verificarile
// de sters acest event listener
submit.addEventListener("click", invalidForm, true);

function validForm() {
    if (firstName.value !== "" || regex.test(firstName.value === true)){
        firstName.style.borderColor ="unset";
    }

    if (lastName.value !== "" || regex.test(lastName.value === true)){
        lastName.style.borderColor ="unset";
    }


}

// pentru ca si la keydown vrei aceeasi validare ca si la submit, ar trebui extrasa intr-o functie 
// logica de validare si aplicata si la click pe submit si la keydown
firstName.addEventListener("keydown", validForm);
lastName.addEventListener("keydown", validForm);

function displayBanner() {
    const banner = document.getElementById("banner");
    banner.style.visibility = "visible";
    document.getElementById("userFirstName").innerHTML = firstName.value;
}


// dupa ce faci imbunatatiriile sugerate mai sus - anunta-ma si revizuim :-)