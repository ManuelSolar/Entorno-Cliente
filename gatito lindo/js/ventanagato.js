/**
 * Ventana creada con el nuevo Gato
 * 
 * @author manuel Solar Bueno
 */
 {
    let error;

    let datosGato = function() {
        let nombre = document.getElementById("nombre").value;
        let fechaNacimiento = document.getElementById("fechaDeNacimiento").value;
        let raza = document.getElementById("raza").value;
        let peso = parseInt(document.getElementById("peso").value);

        try {
            if (nombre == "") {
                throw new Error("Ponle nombre al gato");
            }
            if (fechaNacimiento == "") {
                throw new Error("Elige una fecha de nacimiento para el gato");
            } else if (new Date(fechaNacimiento) > new Date()) {
                throw new Error("La fecha de nacimiento no puede ser en el futuro");
            }
            if (raza == "") {
                throw new Error("Elige una raza para el gato");
            } 
            if (peso < 1 || peso > 15) {
                throw new Error("El peso debe estar entre 1 y 15");
            } else if (isNaN(peso)) {
                throw new Error("El peso debe ser un número");
            }

            ventanaGato(new Gato(nombre, fechaNacimiento, raza, peso));
        } catch (e) {
            error.textContent = e.message;
        }
    }

    let ventanaGato = function(gato) {
        let ventana = window.open("", "", "width=600,height=700");
        let contenido = `
        <!DOCTYPE html>
        <html lang="es">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Gato</title>
            <link rel="stylesheet" href="css/style.css">
            <script src="js/control.js"></script>
        </head>
        
        <body>
            <h1>Información del Gato</h1>
            <main>
                <div id="informacion">
                    <p id="nombre">Nombre del gato: </p>
                    <p id="fechaDeNacimiento">Fecha de nacimiento: </p>
                    <p id="raza">Raza: </p>
                    <p id="peso">Peso: </p>
                </div>
                <div id="control-panel">
                    <img id="imagen" src="img/gato.png" alt="Imagen del Gato"><br>
                    <button id="jugar">Jugar</button>
                    <button id="comer">Comer</button>
                    <button id="dormir">Dormir</button>
                    <button id="edad">Edad</button>
                </div>
            </main>
            <p id="info"><p>
        </body>
        
        </html>`;
        ventana.document.write(contenido);
        ventana.document.close();
        ventana.gato = gato;
    }

    document.addEventListener("DOMContentLoaded", function init() {
        document.getElementById("nuevoGato").addEventListener("click", datosGato);
        error = document.getElementById("error");
        error.style.color = "red";
    });
}   