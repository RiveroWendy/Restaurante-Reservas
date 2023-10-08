function inicio() {
    let formulario = document.querySelector("#formRegistrarCliente");
    formulario.addEventListener("submit", enviarForm);
    let nombre = document.querySelector("#name");
    nombre.addEventListener("blur", obtenerNombre);
    let apellido = document.querySelector("#lastName");
    apellido.addEventListener("blur", obtenerApellido);
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
function obtenerNombre(){
    let nombreInput = document.querySelector("#name").value;
    console.log(nombreInput);
    if(validarNombre(nombreInput)){
        document.querySelector("#message-name").innerHTML="";
    }
    else{
        document.querySelector("#message-name").innerHTML="Formato incorrecto de nombre";
    }
}

function validarNombre(nombre)
{
    const regex = /^[a-zA-Z\s']+$/;
    return regex.test(nombre);
}


function obtenerApellido()
{
    let apellido = document.querySelector("#lastName").value;
    let messageApellido = document.querySelector("#message-lastname");

    messageApellido.innerHTML=""

    if(!validarApellido(apellido)){
        messageApellido.innerHTML="Formato incorrecto de apellido";
    } 
}

function validarApellido(apellido)
{
    const regex = /^[a-zA-Z\s']+$/;
    return regex.test(apellido);
}

function obtenerMail() {
    let email = document.querySelector("#email").value;
    if(validarEmail(email))
    {
        document.querySelector("#message-email").innerHTML="";
    }
    else
    {
        document.querySelector("#message-email").innerHTML="Formato de correo incorrecto";
    }
}

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function obtenerPassword(){
    let password = document.querySelector("#password").value;
    let passwordRepeat = document.querySelector("#passwordRepeat").value;
    let messagePassword =  document.querySelector("#message-password");
    
    
    if (!validarTamanioPassword(password)) {
        messagePassword.innerHTML = "La contraseña debe ser mayor o igual a 8 caracteres";
        console.log(messagePassword);
    } else if (!validarFormatoPassword(password)) {
        messagePassword.innerHTML = "La contraseña debe contener al menos una letra y un número";
        console.log(messagePassword);
    }
}
function validarTamanioPassword(password){
    return password.length >= 8;
}
function validarFormatoPassword(password){
    //Al menos 1 letra y 1 numero
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    return regex.test(password);
}

window.onload = inicio;