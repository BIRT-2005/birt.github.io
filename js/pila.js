 const palabrasAleatorias = [
            "sol", "libro", "café", "nube", "guitarra",
            "ventana", "camino", "sombra", "fuego", "montaña",
            "río", "luz", "jardín", "arena", "puente"
        ];

        function Aleatorias() {
            const indice = Math.floor(Math.random() * palabrasAleatorias.length);
            document.getElementById("Elemento").value = palabrasAleatorias[indice];
        }

        function CambioTexto() {
            const texto = document.getElementById("Elemento").value;
            document.getElementById("mensaje").innerHTML = texto;
        }

        function Push() {
            const elemento = document.getElementById("Elemento").value.trim();
            if (elemento !== "") {
                document.getElementById("mensaje").innerHTML = "";

                const rt = document.createElement("tr");
                const celda1 = document.createElement("td");
                const celda2 = document.createElement("td");
                
                celda1.textContent = "tope->";
                celda2.textContent = elemento;
                rt.appendChild(celda1);
                rt.appendChild(celda2);

                const tabla = document.getElementById("tabla");
                tabla.insertBefore(rt, tabla.firstChild);

                if (tabla.childElementCount > 1) {
                    tabla.childNodes[1].firstChild.textContent = "";
                }
            } else {
                document.getElementById("mensaje").innerHTML = "No se aceptan cadenas vacías";
            }
        }

        function Pop() {
            const tabla = document.getElementById("tabla");
            if (tabla.hasChildNodes()) {
                const tope = tabla.firstChild;
                document.getElementById("mensaje").innerHTML = `Se eliminó del tope: ${tope.lastChild.textContent}`;
                tabla.removeChild(tope);

                if (tabla.firstChild) {
                    tabla.firstChild.firstChild.textContent = "tope->";
                }
            } else {
                document.getElementById("mensaje").innerHTML = "No hay elementos para hacer el Pop";
            }
        }

        function Peek() {
            const tabla = document.getElementById("tabla");
            if (tabla.hasChildNodes()) {
                document.getElementById("mensaje").innerHTML = `En el tope de la pila se encuentra: ${tabla.firstChild.lastChild.textContent}`;
            } else {
                document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
            }
        }

        function Clear() {
            document.getElementById("tabla").innerHTML = "";
            document.getElementById("mensaje").innerHTML = "Se hizo clear en la pila";
        }

        function Find() {
            const tabla = document.getElementById("tabla");
            const elemento = document.getElementById("Elemento").value;
            let encontrado = false;

            if (tabla.hasChildNodes()) {
                for (let i = 0; i < tabla.childNodes.length; i++) {
                    if (tabla.childNodes[i].lastChild.textContent === elemento) {
                        document.getElementById("mensaje").innerHTML = "Sí se encuentra";
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) {
                    document.getElementById("mensaje").innerHTML = "No se encuentra";
                }
            } else {
                document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
            }
        }

        function isEmpty() {
            const tabla = document.getElementById("tabla");
            document.getElementById("mensaje").innerHTML = tabla.hasChildNodes() ? "false" : "true";
        }