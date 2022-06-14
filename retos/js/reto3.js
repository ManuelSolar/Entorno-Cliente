const valida1 = "bici coche (balón) bici coche peluche"; // -> ✅
const valida2 = "(muñeca) consola bici"; // ✅

const noValida1 = "bici coche (balón bici coche" // -> ❌
const noValida2 = "peluche (bici [coche) bici coche balón" // -> ❌
const noValida3 = "(peluche {) bici" // -> ❌
const noValida4 = "() bici" // ❌

const isValid = function(gift){
    // si la cadena no cierra el paréntesis es falso, pero si lo cierra, debe llevar una palabra dentro
    if(gift.indexOf(')') === -1){
        return false;
    }
    // la cadena no hace falta que lleve parentesis
    if(gift.indexOf('(') === -1){
        return true;
    }
    // si la cadena no tiene parentesis es verdadera
    if(gift.indexOf('(') === -1 && gift.indexOf(')') === -1){
        return true;
    }
    // si la cadena tiene llaves o corchetes es falsa
    if(gift.indexOf('{') !== -1 || gift.indexOf('}') !== -1 || gift.indexOf('[') !== -1 || gift.indexOf(']') !== -1){
        return false;
    }
}

console.log(isValid(valida1));