function optionKey(){
    var selects = document.getElementsByTagName("select");
    for(let i=0; i<selects.length; i++){
        for (let j=1; j < 26; j++) {
            var option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            selects[i].appendChild(option);
        }
    }
}

function example1(){
    document.getElementById("om").innerHTML = `ejemplo uno`.toUpperCase();
    document.getElementById("key1").value = 16;
    document.getElementById("key2").value = 12;
    document.getElementById("key3").value = 21;
    document.getElementById("key4").value = 6;
    document.getElementById("key5").value = 2;
    document.getElementById("key6").value = 1;
}

function example2(){
    document.getElementById("om").innerHTML = `ejemplo dos`.toUpperCase();
    document.getElementById("key1").value = 1;
    document.getElementById("key2").value = 2;
    document.getElementById("key3").value = 3;
    document.getElementById("key4").value = 4;
    document.getElementById("key5").value = 5;
    document.getElementById("key6").value = 6;
}

function Clear(){
    document.getElementById("om").value = "";
    document.getElementById("me").value = "";
    document.getElementById("key1").value = 1;
    document.getElementById("key2").value = 1;
    document.getElementById("key3").value = 1;
    document.getElementById("key4").value = 1;
    document.getElementById("key5").value = 1;
    document.getElementById("key6").value = 1;
}

function allows(event){
    var keycode = event.keyCode || event.which;
    var tecla = String.fromCharCode(keycode);
    if(!/^[A-Z]$/.test(tecla) && keycode != 13 && keycode != 32 && keycode != 8){
        event.preventDefault();
    }
}

function capital(textArea){
//esta funcion va a recibir el parametro textArea
textArea.value = textArea.value.toUpperCase();

}

function encrip(){
var message = document.getElementById("om").value;
var output = "";
var k = 1;
for (let i = 0; i < message.length; i++) {
var letter = message.charCodeAt(i);
var desplazamiento = parseInt(document.getElementById("key"+k++).value);
if(/^[A-Z]$/.test(message[i])){
    if(letter+desplazamiento>90){
    output += String.fromCharCode(letter+desplazamiento-26);
    } else{
        output += String.fromCharCode(letter+desplazamiento);  
    }
} else {
    output += String.fromCharCode(letter);
}
if(k==7)
k = 1;
}
document.getElementById("me").value = output.trim();
}

function saveKey(){
var archive = document.createElement("a");
var content = document.getElementById("key1").value + "," + document.getElementById("key2").value + ","
+ document.getElementById("key3").value + "," + document.getElementById("key4").value + ","
+ document.getElementById("key5").value + "," + document.getElementById("key6").value;
archive.setAttribute("href", "data:text/plane;charset=utf-8," + encodeURIComponent(content));
archive.setAttribute("download", "Key.txt");
archive.style.display = "none";
document.body.appendChild(archive);
archive.click();
document.body.removeChild(archive);
}


function saveMessage(){
if(document.getElementById("me").value.trim() != ""){
var archivo = document.createElement("a");
var content = document.getElementById("me").value;
archivo.setAttribute("href", "data:text/plane;charset=utf-8," + encodeURIComponent(content));
archivo.setAttribute("download", "EncriptedMessage.txt");
archivo.style.display ="none";
document.body.appendChild(archivo);
archivo.click();
document.body.removeChild(archivo);
} else alert("no hay mensaje que guardar")
}
