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
    //console.log("se ha dado click al boton");
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    direccion = document.getElementById("direccion").value;
    fecha = document.getElementById("fecha").value;
    nota = document.getElementById("nota").value;
    if(nombre == "" || apellido == "" || telefono == "" || email == "" || direccion == "" ){
        alert("Todos los campos deben estar llenos");
    }else{

    var fila = tabla.insertRow(contador);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);
    var celda7 = fila.insertCell(6);
    var celda8 = fila.insertCell(7);
    celda1.innerHTML=nombre;
    celda2.innerHTML = apellido;
    celda3.innerHTML = telefono;
    celda4.innerHTML = email;
    celda5.innerHTML = direccion;
    celda6.innerHTML = fecha;
    celda7.innerHTML = nota;
    celda8.innerHTML = '<button class="btn-danger" onclick="eliminarFila(this)">Eliminar</button>';
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("nota").value = "";   
    contador++;
}
}
function eliminarFila(fila){
    tabla.deleteRow(fila.parentNode.parentNode.rowIndex);
    contador--;
}

