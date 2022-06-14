/**
 * @author Manuel Solar Bueno
 */

document.addEventListener("DOMContentLoaded", function () {
    const fila = document.querySelector(".fila").cloneNode(true);

    const numBolas = 4;

    const borrarColor = function(){
        this.classList.remove(this.classList[1]);
    };

    const comprobarBolas = function(){
        let intentar = [];
        let comprobarLibre = Array.from(document.querySelectorAll(".hueco"));
        if (comprobarLibre.find(encontrado => encontrado.classList.length == 1))
            return;

        comprobarLibre.forEach(hueco => {
            hueco.classList.remove("hueco");
            hueco.className = `antiguo-hueco ${hueco.className}`;
            intentar.push(hueco.classList[1]);
            hueco.removeEventListener("click", borrarColor);
        })

        let intento = mastermind.comprobarCoincidencia(...intentar);
        let negras = intento.bolaNegra;

        document.querySelectorAll(".comprobar").forEach(element => {
            element.classList.remove("comprobar");
            element.classList.add("antiguo-comprobar");
            if (intento.bolaNegra > 0) {
                element.classList.add("black");
                intento.bolaNegra--;
            } else if (intento.bolaBlanca > 0) {
                element.classList.add("white");
                intento.bolaBlanca--
            }
        })
        if (negras == numBolas) {
            document.querySelector("#ganar-oculto").id = "ganar";
            this.removeEventListener("click", comprobarBolas);
        } else {
            const nuevosHuecos = document.getElementById("resultados").appendChild(fila.cloneNode(true));
            nuevosHuecos.childNodes.forEach(hueco => {
                if (hueco.classList == "hueco") {
                    hueco.addEventListener("click", borrarColor);
                }
            })
        }
    };

    // Colocar colores en la fila
    document.querySelectorAll(".colores").forEach(element => {
        element.addEventListener("click", function(){
            const hueco = Array.from(document.querySelectorAll(".hueco"));
            const encontrado = hueco.find(element => element.classList.length == 1);
            encontrado?.classList.add(this.classList[1]);
        });
    });

    document.querySelectorAll(".hueco").forEach(element => {
        element.addEventListener("click", borrarColor);
    });

    document.querySelector("#comprobar").addEventListener("click", comprobarBolas);

    document.querySelector("#reiniciar").addEventListener("click", function(){
        location.reload();
    });
});