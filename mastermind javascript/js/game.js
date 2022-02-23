{
    let puntero;
    let casillas;
    let pistas;
    let colores;
    let filaCasillas;
    let casillasPistas;
    let botonComprobar;
    let num_lineas;
    let tableroIzquierda;
    let divGanar;
    let botonReiniciar;
    let botonNuevaPartida;
    let contadorFilas;
    let intento = 0;
    let fila;

    let pintarCasilla = function(id) {

        for (let i = 0; i < casillas.length; i++) {

            if (casillas[i].style.backgroundColor == "transparent" || casillas[i].style.backgroundColor == "") {

                switch (id) {

                    case "white":
                        casillas[i].style = "background-color: white;";
                        break;

                    case "black":
                        casillas[i].style = "background-color: black;";
                        break;

                    case "red":
                        casillas[i].style = "background-color: red;";
                        break;

                    case "brown":
                        casillas[i].style = "background-color: brown;";
                        break;

                    case "yellow":
                        casillas[i].style = "background-color: yellow;";
                        break;

                    case "green":
                        casillas[i].style = "background-color: green;";
                        break;

                    case "orange":
                        casillas[i].style = "background-color: orange;";
                        break;

                    case "blue":
                        casillas[i].style = "background-color: blue;";
                        break;
                }

                casillas[i].addEventListener("click", limpiarFicha);
                break;
            }

        }
        if (puntero < 4)
            puntero++;
    }

    let nuevoTurno = function() {
        puntero = 0;
        casillas = document.getElementsByClassName("casilla" + num_lineas);
        casillasPistas = document.getElementsByClassName("casillaPista" + num_lineas);
        num_lineas++;
        window.scrollTo(0, 0);
    }

    let crearFila = function() {
        // Declaración de variables
        let nuevaCasilla;
        let nuevaCasillaPista;
        fila = document.createElement("div");
        filaCasillas = document.createElement("div");
        pistas = document.createElement("div");

        // Añadimos los correspondientes ids
        fila.id = "fila";
        filaCasillas.id = casillas;
        pistas.id = pistas;

        // Generamos las casillas
        for (let i = 0; i < 4; i++) {
            nuevaCasilla = document.createElement("div");
            nuevaCasilla.classList.add("casilla");
            nuevaCasilla.classList.add("casilla" + num_lineas);
            filaCasillas.appendChild(nuevaCasilla);
        }

        // Generamos las casillas de pistas
        for (let i = 0; i < 4; i++) {
            nuevaCasillaPista = document.createElement("div");
            nuevaCasillaPista.classList.add("casillaPista");
            nuevaCasillaPista.classList.add("casillaPista" + num_lineas);
            pistas.appendChild(nuevaCasillaPista);
        }

        fila.appendChild(filaCasillas);
        fila.appendChild(pistas);
        tableroIzquierda.appendChild(fila);

        nuevoTurno();
        contadorFilas++;
        intento++;
        intentos.innerHTML = "Intentos: " + intento;
    }

    let comprobar = function() {
        let coloresUsuario = [];
        let indice = 0;

        for (let i = 0; i < casillas.length; i++) {
            if (casillas[i].style.backgroundColor == "red") {
                coloresUsuario.push("red");
            } else if (casillas[i].style.backgroundColor == "white") {
                coloresUsuario.push("white");
            } else if (casillas[i].style.backgroundColor == "black") {
                coloresUsuario.push("black");
            } else if (casillas[i].style.backgroundColor == "green") {
                coloresUsuario.push("green");
            } else if (casillas[i].style.backgroundColor == "blue") {
                coloresUsuario.push("blue");
            } else if (casillas[i].style.backgroundColor == "yellow") {
                coloresUsuario.push("yellow");
            } else if (casillas[i].style.backgroundColor == "brown") {
                coloresUsuario.push("brown");
            } else if (casillas[i].style.backgroundColor == "orange") {
                coloresUsuario.push("orange");
            }
        }

        if (puntero >= 4) {
            mastermind = masterMind.comprobarCombinacion(coloresUsuario);

            if (mastermind.pistasNegras > 0) {
                while (indice < mastermind.pistasNegras) {
                    casillasPistas[indice].style = "background-color: black;";
                    indice++;
                }
            }

            if (indice == 4) {
                divGanar.style = "display: block;";
                divBotones.style.display = "none";
                puntero = undefined;
                eliminarEventos();
            } else if (mastermind.pistasBlancas > 0) {
                for (let i = 0; i < mastermind.pistasBlancas; i++) {
                    casillasPistas[indice].style = "background-color: white;";
                    indice++;
                    if (indice == 4) {
                        eliminarEventos();
                        crearFila();
                        contadorFilas++;
                        indice = 0;
                        return;
                    }
                }
                indice = 0;
            }
            if (indice != 4) {
                eliminarEventos();
                crearFila();
                contadorFilas++;
            }
        }
    }

    let limpiarFicha = function(event) {
        event.target.style = "background-color: transparent;";
        event.target.removeEventListener("click", limpiarFicha);
        puntero--;
    }

    let eliminarEventos = function() {
        fila.disabled = true;
        for (let i = 0; i < casillas.length; i++) {
            casillas[i].removeEventListener("click", limpiarFicha);
        }
    }

    let reiniciar = function() {
        location.reload();
    }

    let init = function() {
        masterMind.init();
        masterMind.mostrar();
        num_lineas = 0;

        casillas = document.getElementsByClassName("casilla");
        casillasPistas = document.getElementsByClassName("casillaPista");
        colores = document.getElementsByClassName("bolas");
        tableroIzquierda = document.getElementById("tablero");
        botonComprobar = document.getElementById("botonComprobar");
        botonReiniciar = document.getElementById("botonReiniciar");
        botonNuevaPartida = document.getElementById("botonNuevaPartida");
        divGanar = document.getElementById("divGanar");
        divBotones = document.getElementById("botones");
        intentos = document.getElementById("intentos");
        fila = document.getElementById("fila");

        //Eventos
        botonComprobar.addEventListener("click", comprobar);
        botonNuevaPartida.addEventListener("click", reiniciar);
        botonReiniciar.addEventListener("click", reiniciar);

        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click", pintarCasilla.bind(null, colores[i].id));
        }

        crearFila();
    }

    window.onload = init;
}