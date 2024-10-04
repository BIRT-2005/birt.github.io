var contador = 0;
        var arreglo = [];

        function Capturar() {
            var input = document.getElementById("elementoInput");
            var valor = parseInt(input.value);
            
            // Validar que el valor ingresado sea un número entero
            if (isNaN(valor)) {
                alert("Por favor, ingrese un número entero.");
                return;
            }

            // Agregar el valor al arreglo
            arreglo.push(valor);
            
            // Imprimir el arreglo de forma horizontal
            var renglonIndice = document.getElementById("renglonIndice");
            renglonIndice.insertCell(-1).innerHTML = `[${contador}]`;
            var renglonDato = document.getElementById("renglonDato");
            renglonDato.insertCell(-1).innerHTML = valor;

            // Imprimir el arreglo de forma vertical
            var tabla = document.getElementById("tablaVertical");
            var renglonVertical = tabla.insertRow(-1);
            renglonVertical.insertCell(0).innerHTML = `[${contador}]`;
            renglonVertical.insertCell(1).innerHTML = valor;

            if (contador >= 9) {
                // Deshabilitar el input y el botón al capturar el último elemento
                document.getElementById("capturarBoton").disabled = true;
                input.disabled = true;
                document.getElementById("generarBoton").disabled = false;
            } else {
                document.getElementById("contador").innerHTML = `Elemento [${++contador}]:`;
            }

            // Limpiar el input
            input.value = "";
        }

        function Aleatorio() {
            document.getElementById("elementoInput").value = Math.floor(Math.random() * 1000);
        }

        function Reiniciar() {
            contador = 0;
            arreglo = [];
            document.getElementById("capturarBoton").disabled = false;
            document.getElementById("elementoInput").disabled = false;
            document.getElementById("generarBoton").disabled = true;
            document.getElementById("renglonIndice").innerHTML = "";
            document.getElementById("renglonDato").innerHTML = "";
            document.getElementById("tablaVertical").innerHTML = "";
            document.getElementById("resultados").innerHTML = "";
            document.getElementById("contador").innerHTML = "Elemento [0]:";
            Aleatorio();
        }

        function Calcular() {
            var menor = Math.min(...arreglo);
            var mayor = Math.max(...arreglo);
            var suma = arreglo.reduce((a, b) => a + b, 0);
            var promedio = suma / arreglo.length;

            // Ordenar el arreglo para calcular mediana y moda
            var sortedArreglo = [...arreglo].sort((a, b) => a - b);
            var mediana = (sortedArreglo.length % 2 === 0) ? 
                (sortedArreglo[sortedArreglo.length / 2 - 1] + sortedArreglo[sortedArreglo.length / 2]) / 2 :
                sortedArreglo[Math.floor(sortedArreglo.length / 2)];

            // Calcular moda
            var frecuencias = {};
            var maxFrecuencia = 0;
            var moda = [];
            sortedArreglo.forEach(num => {
                frecuencias[num] = (frecuencias[num] || 0) + 1;
                if (frecuencias[num] > maxFrecuencia) {
                    maxFrecuencia = frecuencias[num];
                    moda = [num];
                } else if (frecuencias[num] === maxFrecuencia && !moda.includes(num)) {
                    moda.push(num);
                }
            });

            var modaFinal = (maxFrecuencia === 1) ? "No hay moda" : `Las modas son: ${moda.join(", ")}`;

            // Imprimir resultados
            document.getElementById("resultados").innerHTML = `
                El menor es: ${menor}<br>
                El mayor es: ${mayor}<br>
                La suma es: ${suma}<br>
                El promedio es: ${promedio.toFixed(2)}<br>
                La mediana es: ${mediana}<br>
                ${modaFinal}`;
        }