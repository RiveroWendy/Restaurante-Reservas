function mostrarFormularioCliente() {
    var formularioCliente = document.getElementById("formRegistrarCliente");
    var formularioRestaurante = document.getElementById("formRegistrarEncargado");
    
    formularioCliente.style.display = "block";
    formularioRestaurante.style.display = "none";
}

function mostrarFormularioRestaurante() {
    var formularioCliente = document.getElementById("formRegistrarCliente");
    var formularioRestaurante = document.getElementById("formRegistrarEncargado");
    
    formularioCliente.style.display = "none";
    formularioRestaurante.style.display = "block";
}


document.addEventListener("DOMContentLoaded", function() {
    var clientButton = document.getElementById("clientButton");
    var restaurantButton = document.getElementById("encargadoButton");
    
    clientButton.addEventListener("click", function(){
        mostrarFormularioCliente();
    });
    
    restaurantButton.addEventListener("click", function(){
        mostrarFormularioRestaurante();
    });
});
