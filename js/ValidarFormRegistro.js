function inicio() {
    let formulario = document.querySelector("#formulario-registro");
    formulario.addEventListener("submit", enviarForm);
}

function enviarForm(e) {
    e.preventDefault();
    obtenerMail();
    obtenerPassword();
}

function obtenerNombre(){
    let nombre = document.querySelector("#name");
}

function obtenerApellido()
{
    let nombre = document.querySelector("#lastname");
}

function obtenerMail() {
    let email = document.querySelector("#email").value;
    if(validarEmail(email)){

    }
}

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function obtenerPassword(){
    let password = document.querySelector("#password").value;

    validarPassword(password);
}
function validarPassword(password){
    return password.length >= 8;
}