function inicio() {
    let formulario = document.querySelector("#formulario-login");
    formulario.addEventListener("submit", enviarForm);
}

function enviarForm(e){
    e.preventDefault(); 
    validarCampos();
}

function validarCampos() {
    let emailInput = document.querySelector("#email").value;
    let passwordInput = document.querySelector("#password").value;
    let messageEmail = document.querySelector("#message-email");
    let messagePassword = document.querySelector("#message-password");

    messageEmail.innerHTML = "";
    messagePassword.innerHTML = "";

    if (validarCampoVacio(emailInput)) {
        messageEmail.innerHTML = "No puede quedar vacío";
    }

    if (validarCampoVacio(passwordInput)) {
        messagePassword.innerHTML = "No puede quedar vacío";
    }

    if (!validarCampoVacio(emailInput) && !validarCampoVacio(passwordInput)) {
      
        pruebaLoginAdmin(emailInput, passwordInput);
    }
}

function pruebaLoginAdmin(email, password) {
    if (email === "admin@gmail.com" && password === "admin1234") {
        window.location = "admin-home.html";
    }
}

function validarCampoVacio(valor) {
    return valor === "";
}

window.onload = inicio;
