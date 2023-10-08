function inicio() {
    let formulario = document.querySelector("#formRegistrarCliente");
    formulario.addEventListener("submit", enviarForm);
    let nombre = document.querySelector("#name");
    nombre.addEventListener("blur", obtenerNombre);
    let apellido = document.querySelector("#lastName");
    apellido.addEventListener("blur", obtenerApellido);
    let email = document.querySelector("#email");
    email.addEventListener("blur", obtenerMail);
    let password = document.querySelector("#password");
    password.addEventListener("blur", obtenerPassword);
    let passwordrepeat = document.querySelector("#passwordRepeat");
    passwordrepeat.addEventListener("blur", obtenerPassword);
}

function enviarForm(e) {
    e.preventDefault();
    obtenerMail();
    obtenerPassword();
    obtenerNombre();
    obtenerApellido();
}
// Validar Formato del nombre
function obtenerNombre() {
    let nombreInput = document.querySelector("#name").value;
    let messageNombre = document.querySelector("#message-name");

    messageNombre.innerHTML = "";

    if(validarCampoVacio(nombreInput)){
        messageNombre.innerHTML = "No puede quedar vacio";
    }
    else if (!validarNombreApellido(nombreInput)) {
        document.querySelector("#message-name").innerHTML = "Formato incorrecto de nombre";
    }

}

function obtenerApellido() {
    let apellido = document.querySelector("#lastName").value;
    let messageApellido = document.querySelector("#message-lastname");

    messageApellido.innerHTML = ""

    if(validarCampoVacio(apellido)){
        messageApellido.innerHTML = "No puede quedar vacio";
    }
    else if (!validarNombreApellido(apellido)) {
        messageApellido.innerHTML = "Formato incorrecto de apellido";
    }
}

function validarNombreApellido(valor) {
    const regex = /^[a-zA-Z\s']+$/;
    return regex.test(valor);
}

function obtenerMail() {
    let email = document.querySelector("#email").value;
    let messageEmail = document.querySelector("#message-email");

    messageEmail.innerHTML = ""

    if(validarCampoVacio(email)){
        messageEmail.innerHTML = "No puede quedar vacio";
    }
    else if (!validarEmail(email)) {
        messageEmail.innerHTML = "Formato de correo incorrecto";
    }

}

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function obtenerPassword() {
    let password = document.querySelector("#password").value;
    let passwordRepeat = document.querySelector("#passwordRepeat").value;
    let messagePassword = document.querySelector("#message-password");
    let messageRepeat = document.querySelector("#message-passwordrepeat");

    messagePassword.innerHTML="";
    messageRepeat.innerHTML="";

    if (!validarTamanioPassword(password)) {
        messagePassword.innerHTML = "La contraseña debe ser mayor o igual a 8 caracteres";
       
    } else if (!validarFormatoPassword(password)) {
        messagePassword.innerHTML = "La contraseña debe contener al menos una letra y un número";
       
    }
    else if(!validarPasswordRepetido(password, passwordRepeat)){
        messageRepeat.innerHTML="Las contraseñas no coinciden";
    }
}
function validarTamanioPassword(password) {
    return password.length >= 8;
}
function validarFormatoPassword(password) {
    //Al menos 1 letra y 1 numero
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    return regex.test(password);
}

function validarPasswordRepetido(password, passwordRepeat){
    return password == passwordRepeat;
}

function validarCampoVacio(valor){
    return valor =="";
}

window.onload = inicio;