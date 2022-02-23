
 masterMind = (function() {

    let colores = ["white", "black", "red", "brown", "yellow", "green", "orange", "blue"];
    let lineaCPU;
    const NUM_COLORES = colores.length;
    const NUM_CASILLAS = 4;

    
    let generarAleatorio = function() {
        return Math.floor((Math.random() * NUM_COLORES));
    };

   
    let generarlineaCPU = function() {
        for (let i = 0; i < NUM_CASILLAS; i++) {
            lineaCPU.push(colores[generarAleatorio()]);
        }
    }

    
    let mostrar = function() {
        console.log(lineaCPU);
    }

    
    let comprobarCombinacion = function(coloresUsuario) {

        let copiaLineaMaquina = lineaCPU.slice();
        let combinacionUsuario = coloresUsuario.slice();

        return {
            pistasNegras: contarNegros(combinacionUsuario, copiaLineaMaquina),
            pistasBlancas: contarBlancos(combinacionUsuario, copiaLineaMaquina),
        }
    }

    let contarNegros = function(combinacionUsuario, copiaLineaMaquina) {
        let pistasNegras = 0;

        combinacionUsuario.forEach(function(elemento, indice) {
            if (elemento == copiaLineaMaquina[indice]) {
                pistasNegras++;
                copiaLineaMaquina[indice] = null
                combinacionUsuario[indice] = -1;
            }
        });

        return pistasNegras;
    }

    let contarBlancos = function(combinacionUsuario, copiaLineaMaquina) {
        let pistasBlancas = 0;

        combinacionUsuario.forEach(function(elemento) {
            let indice = copiaLineaMaquina.indexOf(elemento);
            if (indice !== -1) {
                pistasBlancas++;
                copiaLineaMaquina[indice] = null
            }
        });

        return pistasBlancas;
    }

    let init = function() {
        lineaCPU = [];
        generarlineaCPU();
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobarCombinacion: comprobarCombinacion
    };
})();