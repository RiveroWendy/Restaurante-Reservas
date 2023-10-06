function mostrarFormularioCliente() {
    var formularioCliente = document.getElementById("formRegistrarCliente");
    var formularioRestaurante = document.getElementById("formRegistrarRestaurante");
    
    formularioCliente.style.display = "block";
    formularioRestaurante.style.display = "none";
}

function mostrarFormularioRestaurante() {
    var formularioCliente = document.getElementById("formRegistrarCliente");
    var formularioRestaurante = document.getElementById("formRegistrarRestaurante");
    
    formularioCliente.style.display = "none";
    formularioRestaurante.style.display = "block";
}


document.addEventListener("DOMContentLoaded", function() {
    var clientButton = document.getElementById("clientButton");
    var restaurantButton = document.getElementById("restaurantButton");
    
    clientButton.addEventListener("click", function(){
        mostrarFormularioCliente();
    });
    
    restaurantButton.addEventListener("click", function(){
        mostrarFormularioRestaurante();
    });
});
