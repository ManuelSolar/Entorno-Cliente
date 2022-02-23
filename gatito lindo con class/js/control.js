/**
 * Controla los datos y acciones del Gato
 * 
 * @author Manuel Solar Bueno
 */

 {
    let peso;
    let info;
    let imagen;
    let botonComer;
    let botonJugar;
    let botonDormir;
    let BotonEdad;

    let muestraInfo = function() {
        info = document.getElementById("info");
        imagen = document.getElementById("imagen");
        document.getElementById("nombre").textContent += gato.nombre;
        document.getElementById("fechaDeNacimiento").textContent += gato.fechaNacimiento.toLocaleDateString();
        document.getElementById("raza").textContent += gato.raza;
        peso = document.getElementById("peso");
        cambiaPeso();
        botonComer = document.getElementById("comer").addEventListener("click", comer);
        botonJugar = document.getElementById("jugar").addEventListener("click", jugar);
        botonDormir = document.getElementById("dormir").addEventListener("click", dormir);
        BotonEdad = document.getElementById("edad").addEventListener("click", calcularEdad);
    }

    let cambiaPeso = function() {
        peso.textContent = "Peso: " + gato.peso + " kg";
    }

    let comer = function() {
        try {
            gato.comer();
            info.textContent = gato.nombre + " está comiendo";
            imagen.src = "img/comer.png";
            imagen.height = "200";
            imagen.width = "200";
            cambiaPeso();
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.png";
            botonComer.disabled = "true";
        }
    }

    let jugar = function() {
        try {
            gato.jugar();
            info.textContent = gato.nombre + " está echandose unas partidas";
            imagen.src = "img/jugar.png";
            imagen.height = "200";
            imagen.width = "200";
            cambiaPeso();
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.png";
            botonJugar.disabled = "true";
        }
    }

    let dormir = function() {
        try {
            gato.dormir();
            info.textContent = gato.nombre + " está en el quinto sueño";
            imagen.src = "img/dormir.png";
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.png";
            botonDormir.disabled = "true";
        }
    }

    let calcularEdad = function() {
        try {
            gato.edad();
            info.textContent = "Tengo " + Math.floor(((new Date()) - Date.parse(gato.fechaNacimiento)) / 86400000) + " días";
            imagen.src = "img/gato.png";
        } catch (e) {
            info.textContent = e.message;
            imagen.src = "img/muerto.png";
            BotonEdad.disabled = "true";
        }
    }


    document.addEventListener("DOMContentLoaded", function init() {
        muestraInfo();
    });
}