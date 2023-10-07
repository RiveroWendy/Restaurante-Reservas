function inicio() {
    let formulario = document.querySelector("#formulario-registro");
    formulario.addEventListener("submit", enviarForm);
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
    let nombre = document.querySelector("#name").value;
    if(validarNombre(nombre)){
        document.querySelector("#message-name").innerHTML="";
    }
    else{
        document.querySelector("#message-name").innerHTML="Formato incorrecto de nombre";
    }
}

function validarNombre(nombre)
{
    const regex = /^[a-zA-Z\s']+$/;
    if(regex.test(nombre)){
        return true;
    }
    else{
        return false;
    }
}

function obtenerApellido()
{
    let apellido = document.querySelector("#lastname");
    if(validarApellido(apellido)){
        document.querySelector("#message-lastname").innerHTML="";
    }
    else{
        document.querySelector("#message-lastname").innerHTML="Formato incorrecto de apellido";
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
    if(validarTamanioPassword(password))
    {
        document.querySelector("#message-password").innerHTML="";
    }
    else{
        document.querySelector("#message-password").innerHTML="La contraseña debe ser mayor o igual a 8 caracteres";
    }
    if(validarFormatoPassword(password))
    {
        document.querySelector("#message-password").innerHTML="";
    }
    else{
        document.querySelector("#message-password").innerHTML="La contraseña debe contener al menos una letra y un numero";
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