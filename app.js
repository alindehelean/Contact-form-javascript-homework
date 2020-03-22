const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const textarea = document.getElementById("comment");
const submit = document.getElementById("submitBtn");
const gender = document.getElementsByClassName("gender");
const regex = /^[a-zA-Z\s]*$/;



submit.addEventListener("click" , function(event){
        event.preventDefault();

        if(firstName.value === "" || lastName.value === "" || textarea.value === ""){
            alert("Inputs can not be empty");
        }

        if(!regex.test(firstName.value) || !regex.test(lastName.value)){
            alert('Input invalid!');
            return;
        }

    
        else if(firstName.value !== "" && lastName.value !== "" && textarea.value !== "" ) {
            const banner = document.getElementById("banner");
            banner.style.visibility = "visible";
            document.getElementById("userFirstName").innerHTML = firstName.value; 
            console.log(firstName.value);
            console.log(lastName.value);

            function display() {  

                if(document.getElementById('genderM').checked) { 
                    console.log("M");
                } 
                else if(document.getElementById('genderF').checked) { 
                    console.log("F");
                }  
                     
            }         
            
        }
        
            display();
            console.log(textarea.value);
});       