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

    if (!validarNombreApellido(nombreInput)) {
        document.querySelector("#message-name").innerHTML = "Formato incorrecto de nombre";
    }

}

function obtenerApellido() {
    let apellido = document.querySelector("#lastName").value;
    let messageApellido = document.querySelector("#message-lastname");

    messageApellido.innerHTML = ""

    if (!validarNombreApellido(apellido)) {
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

    if (!validarEmail(email)) {
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


    if (!validarTamanioPassword(password)) {
        messagePassword.innerHTML = "La contraseña debe ser mayor o igual a 8 caracteres";
        console.log(messagePassword);
    } else if (!validarFormatoPassword(password)) {
        messagePassword.innerHTML = "La contraseña debe contener al menos una letra y un número";
        console.log(messagePassword);
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

window.onload = inicio;