/* Aplicacion que me guarde los datos en una tabla*/
//declaracion de variables
var nombre;
var apellido;
var telefono;
var email;
var direccion;
var fecha;
var nota;
var tabla = document.getElementById("tabla");
var guardar = document.getElementById("guardar");
var contador = 1;
//Al hacer click al boton, ejecuta la siguiente accion
guardar.addEventListener("click",agregarATabla)

function agregarATabla(){
    console.log("se ha dado click al boton");
}

