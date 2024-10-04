function cubo(){
    if(!isNaN(document.getElementById("num").value) && 1<(document.getElementById("num").value)){

    var naturales=parseInt(document.getElementById("num").value);
    var Resultado="Resultado:<br>";

    for (let i = 2; i <= naturales; i++) {
        if(i%2==0){
            Resultado += `${i} al cubo es ${i*i*i}<br>`;
        }
    }
    document.getElementById("out").innerHTML=Resultado;
} else{
    document.getElementById("out").innerHTML=
    `error`;
}
}