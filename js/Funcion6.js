var elemento = 0;

function Capturar() {
    document.getElementById("error").innerHTML = ""; // Limpiamos cualquier error previo

    // Obtenemos el valor del campo de entrada
    var valorUsuario = document.getElementById("datos").value;

    // Verificar que el usuario introduzca un valor válido (opcional)
    if (valorUsuario === "") {
        document.getElementById("error").innerHTML = "Por favor, ingrese un número.";
        return;
    }

    // Insertamos el valor en la tabla horizontal
    var row = document.getElementById("renglon");
    var valor = row.insertCell(-1);
    valor.innerHTML = `[${elemento}]`;

    var row2 = document.getElementById("renglon2");
    var valor2 = row2.insertCell(-1);
    valor2.innerHTML = valorUsuario;

    // Insertamos el valor en la tabla vertical
    var columna = document.getElementById("vertical");
    var renglónV = columna.insertRow(-1);
    var valorV2 = renglónV.insertCell(0);
    valorV2.innerHTML = `[${elemento}]`;
    var valorV = renglónV.insertCell(1);
    valorV.innerHTML = valorUsuario;

    // Limpiar el campo de entrada de datos y enfocarlo
    document.getElementById("datos").value = "";
    document.getElementById("datos").focus();

    // Actualizamos el mensaje de captura
    document.getElementById("arreglo").innerHTML = `Capture el elemento [${elemento}]`;

    // Deshabilitar los controles si se ha capturado 10 elementos
    if (elemento >= 9) {
        document.getElementById("datos").disabled = true;
        document.getElementById("boton").disabled = true;
    }

    ++elemento;
}

function Reiniciar() {
    // Limpiar las tablas y reactivar el input
    document.getElementById("renglon").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";
    document.getElementById("vertical").innerHTML = "";
    document.getElementById("datos").disabled = false;
    document.getElementById("boton").disabled = false;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [0]`;
    elemento = 0;
}
