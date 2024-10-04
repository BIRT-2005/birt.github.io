function Fibonacci() {
    let num = parseInt(document.getElementById("num").value);

    if (!isNaN(num) && num > 1) {
        let a = 0, b = 1, resultado = "Sucesión:<br>";

        resultado += a + "<br>" + b + "<br>";

        for (let i = 2; i < num; i++) {
            let c = a + b;
            resultado += c + "<br>";
            a = b;
            b = c;
        }

        document.getElementById("out").innerHTML = resultado;
    } else {
        document.getElementById("out").innerHTML = "Error: Introduzca un número válido mayor que 1";
    }
}