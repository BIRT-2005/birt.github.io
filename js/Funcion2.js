function enteros() {
    if (!isNaN(document.getElementById("num1").value) && !isNaN(document.getElementById("num2").value)) {
        var a = parseInt(document.getElementById("num1").value);
        var b = parseInt(document.getElementById("num2").value);
        var multiplos = "";
        var count = 0;
        for (let i = a; i <= b; i++) {
            if (i % 3 == 0) {
                multiplos += `${i} <br>`;
                count++;
            }
        }
        if (a != b)
        for (let i = a; i >= b; i--) {
            if (i % 3 == 0) {
                multiplos += `${i} <br>`;
                count++;
            }
        }
        document.getElementById("out").innerHTML = `Resultado:<br> Entre ${a} y ${b} hay ${count} múltiplos de 3`;
    } else {
        document.getElementById("out").innerHTML = `Existe un error en el tipo de datos ingresados`;
    }
}