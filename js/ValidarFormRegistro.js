function inicio() {
    //Form Cliente
    let formularioCliente = document.querySelector("#formRegistrarCliente");
    formularioCliente.addEventListener("submit", enviarFormCliente);
    //Form Encargado
    let formularioEncargado = document.querySelector("#formRegistrarEncargado");
    formularioEncargado.addEventListener("submit", enviarFormEncargado);
    //Inputs Form Cliente
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
   
    //Inputs Form Encargado
    let nameManager = document.querySelector("#nameOfTheManager");
    nameManager.addEventListener("blur", obtenerNombreEncargado);
    
    let lastNameManager = document.querySelector("#lastNameManager");
    lastNameManager.addEventListener("blur", obtenerApellidoEncargado);
    
    let dniManager = document.querySelector("#dniManager");
    dniManager.addEventListener("blur", obtenerDNIEncargado);
    
    let phoneManager = document.querySelector("#phoneManager");
    phoneManager.addEventListener("blur", obtenerTelefonoEncargado);

    let emailManager = document.querySelector("#emailManager");
    emailManager.addEventListener("blur", obtenerMailEncargado);

    let passwordManager = document.querySelector("#passwordManager");
    passwordManager.addEventListener("blur", obtenerPasswordEncargado);

    let passwordrepeatManager = document.querySelector("#passwordManagerRepeat");
    passwordrepeatManager.addEventListener("blur", obtenerPasswordEncargado);
}

function enviarFormCliente(e) {
    e.preventDefault();
    obtenerMail();
    obtenerPassword();
    obtenerNombre();
    obtenerApellido();
}
function enviarFormEncargado(e) {
    e.preventDefault();
    
}
// Validar Formato del nombre
//Funciones para obtener los Inputs del form Cliente
function obtenerNombre() {
    let nombreInput = document.querySelector("#name").value;
    let messageNombre = document.querySelector("#message-name");

    messageNombre.innerHTML = "";

    if(validarCampoVacio(nombreInput)){
        messageNombre.innerHTML = "No puede quedar vacio";
    }
    else if (!validarNombreApellido(nombreInput)) {
        messageNombre.innerHTML = "Formato incorrecto de nombre";
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
//Funciones para obtener los Inputs del form Cliente

function obtenerNombreEncargado() {
    let nombreEncargadoInput = document.querySelector("#nameOfTheManager").value;
    let messageEncargado = document.querySelector("#message-nameManager");

    messageEncargado.innerHTML = "";

    if(validarCampoVacio(nombreEncargadoInput)){
        messageEncargado.innerHTML = "No puede quedar vacio";
    }
    else if (!validarNombreApellido(nombreEncargadoInput)) {
        messageEncargado.innerHTML = "Formato incorrecto de nombre";
    }
}

function obtenerApellidoEncargado() {
    let apellidoEncargadoInput = document.querySelector("#lastNameManager").value;
    let messageApellidoEncargado = document.querySelector("#message-lastNameManager");

    messageApellidoEncargado.innerHTML = "";

    if(validarCampoVacio(apellidoEncargadoInput)){
        messageApellidoEncargado.innerHTML = "No puede quedar vacio";
    }
    else if (!validarNombreApellido(apellidoEncargadoInput)) {
        messageApellidoEncargado.innerHTML = "Formato incorrecto de nombre";
    }
}

function obtenerDNIEncargado() {
    let dniEncargadoInput = document.querySelector("#dniManager").value;
    let messageApellidoEncargado = document.querySelector("#message-dniManager");

    messageApellidoEncargado.innerHTML = "";

    if(validarCampoVacio(dniEncargadoInput)){
        messageApellidoEncargado.innerHTML = "No puede quedar vacio";
    }
    else if (!validarDNI(dniEncargadoInput)) {
        messageApellidoEncargado.innerHTML = "Formato incorrecto de DNI";
    }
}

function obtenerTelefonoEncargado() {
    let telefonoEncargadoInput = document.querySelector("#phoneManager").value;
    let messageTelefonoEncargado = document.querySelector("#message-phoneManager");

    messageTelefonoEncargado.innerHTML = "";

    if(validarCampoVacio(telefonoEncargadoInput)){
        messageTelefonoEncargado.innerHTML = "No puede quedar vacio";
    }
    else if (!validarTelefono(telefonoEncargadoInput)) {
        messageTelefonoEncargado.innerHTML = "Formato incorrecto de Telefono";
    }
}

function obtenerMailEncargado() {
    let emailManagerInput = document.querySelector("#emailManager").value;
    let messageEmailManager = document.querySelector("#message-emailManager");

    messageEmailManager.innerHTML = ""

    if(validarCampoVacio(emailManagerInput)){
        messageEmailManager.innerHTML = "No puede quedar vacio";
    }
    else if (!validarEmail(emailManagerInput)) {
        messageEmailManager.innerHTML = "Formato de correo incorrecto";
    }

}

function obtenerPasswordEncargado() {
    let password = document.querySelector("#passwordManager").value;
    let passwordRepeat = document.querySelector("#passwordManagerRepeat").value;
    let messagePassword = document.querySelector("#message-passwordManager");
    let messageRepeat = document.querySelector("#message-passwordManagerRepeat");

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


//Funciones para validar los inputs

function validarNombreApellido(valor) {
    const regex = /^[a-zA-Z\s']+$/;
    return regex.test(valor);
}

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function validarDNI(dni){
    const patron = /^\d{9}$/;
    return patron.test(dni);
}

function validarTelefono(telefono){
    const patron = /^\d{4}-\d{4}$/;;
    return patron.test(telefono);
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