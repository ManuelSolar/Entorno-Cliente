/**
 * @author Manuel Solar Bueno
 */

let mastermind = function () {
    const colores = ["red", "white", "black", "yellow", "orange", "brown", "blue", "green"];

    let combinacion;

    const init = () => {
        combinacion = Array(4).fill().map(() => colores[Math.floor(Math.random() * 8)]);
        mostrar();
    };

    const mostrar = function () {
        console.log(combinacion);
    };

    const comprobarCoincidencia = function (...colores) {
        let bolas = {
            bolaNegra: 0,
            bolaBlanca: 0
        };
        let copiaCombinacion = combinacion.slice();

        colores.forEach((element, index, array) => {
            if (element === copiaCombinacion[index]) {
                bolas.bolaNegra++;
                copiaCombinacion[index] = null;
                array[index] = null;
            }
        });
        colores.forEach(element => {
            if (copiaCombinacion.find((encontrado) => element === encontrado)) {
                copiaCombinacion[copiaCombinacion.indexOf(element)] = null;
                bolas.bolaBlanca++;
            }
        });
        return bolas;
    };

    return {
        init: init,
        mostrar: mostrar,
        comprobarCoincidencia: comprobarCoincidencia
    }
}();

document.addEventListener("DOMContentLoaded", mastermind.init);
