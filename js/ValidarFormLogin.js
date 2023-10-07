function inicio(){
 let formulario = document.querySelector("#formulario-login");
 formulario.addEventListener("submit", enviarForm);
}

function enviarForm(e)
{
    e.preventDefault();
    obtenerMail();
    obtenerPassword();
}
function obtenerMail(){
    let email = document.querySelector("#email").value;
   // validarFormatoEmail(email);
    validarEmailPuesto(email);
}

function validarEmailPuesto(email){
    if(email ==""){
        document.querySelector("#message-email").innerHTML="No puede quedar vacio";
    }
    else{
        document.querySelector("#message-email").innerHTML="";
    }
}

// function validarFormatoEmail(email)
// {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if(!emailRegex.test(email) && email!=="")
//     {
//         document.querySelector("#message-email").innerHTML="formato de email incorrecto";
//     }
//     else{
//         document.querySelector("#message-email").innerHTML="";
//     }
// }
function obtenerPassword()
{
    let password = document.querySelector("#password").value;
    validarPasswordPuesto(password);
}
function validarPasswordPuesto(password)
{
    if(password ==="")
    {
        document.querySelector("#message-password").innerHTML="No puede quedar vacio";
    }
    else{
        document.querySelector("#message-password").innerHTML="";
    }
}

window.onload = inicio;