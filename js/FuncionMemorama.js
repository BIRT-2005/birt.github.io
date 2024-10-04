var tarjetas = [
    "1.png", "1.png", "2.png", "2.png",
    "3.png", "3.png", "4.png", "4.png",
    "5.png", "5.png", "6.png", "6.png",
    "7.png", "7.png", "8.png", "8.png"
];

var imagenTemporal, esperando = false;
var contador = 0;

function voltearimg(imagen, indice) {
    imagen.src = `./img/${tarjetas[indice]}`;
    imagen.removeAttribute("onclick");
    if (!esperando) imagenTemporal = imagen;
        //alert("paso por temporal");
    else {
        if (imagenTemporal.src == imagen.src) {
           //alert("encontramos un par");
           setTimeout(function() {EliminarPar(imagenTemporal, imagen);},500);
        } else {
            //alert("no es par");
            setTimeout(function() {Regresar(imagenTemporal, imagen);},500);
        }
    }
    esperando = !esperando;
}

function EliminarPar(imagen1, imagen2) {
    //desaparece la imagen pero ajusta la tabla
    /*imagen1.src = "";
    imagen1.style.display="none";
    imagen2.src = "";
    imagen2.style.display="none";*/

    //Desaparece la imagen sin ajustar la tabla
    imagen1.style.visibility = "hidden";
    imagen2.style.visibility = "hidden";
    imagen1.removeAttribute("onclick");
    imagen2.removeAttribute("onclick");
    contador++;
    if (contador!=8) {
        document.getElementById("contador").innerHTML = `Pares encontrados: ${contador}`;   
    } else {
        document.getElementById("contador").innerHTML = `Pares encontrados: ${contador} ganaste`;
    }
}

function Revolver() {
    var i = 0, j = 0;
    for (i = tarjetas.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
    }
    //alert(tarjetas.join(" - "));
    //document.getElementById("Salida").innerHTML = tarjetas.join(" - ");
}

function Regresar(imagen1, imagen2){
    imagen1.src = "./img/0.png";
    imagen2.src = "./img/0.png";
    imagen1.setAttribute("onclick", `voltearimg(this,${imagen1.id})`);
    imagen2.setAttribute("onclick", `voltearimg(this,${imagen2.id})`);
}

function Fondo(){
    var fondo = Math.floor(Math.random() * 4) + 1;
    document.getElementById("tabla").style.backgroundImage = `url("./img/fondo${fondo}.png")`;
}

function reiniciar(){
    location.reload();
}