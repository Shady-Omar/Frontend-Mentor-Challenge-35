let btn = document.querySelector("#btn");
let email = document.querySelector("#mail");
let error = document.querySelector(".error");

btn.addEventListener('click', validation)

function validation() {
    if (email.value == "" || email.value == null) {
        error.style.display = "block"
        return false
    } 
}