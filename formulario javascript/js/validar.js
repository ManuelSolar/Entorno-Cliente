/**
 * Script para validar los datos introducidos en el formulario.
 * 
 * @author Manuel Solar Bueno
 */

 let inputsErroneos = [];

 let validar = function() {
 
     let regex = {
         nombre: [
             /^([A-ZÁÉÍÓÚÑ]){1}([a-zñáéíóú])+$/,
             "El nombre debe comenzar por letra mayúscula"
         ],
         edad: [
             /^[1-9]?\d$/,
             "La edad debe de ser un número entre 0 y 99"
         ],
         dni: [
             /^(\d{8})[ -]?([A-Z(^IÑOU)]$)/i, ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'], "Formato válido 12345678Z"
         ],
         email: [
             /^((\w){2,}\.)*((\w){2,})\@(\w){2,}\.(\w){2,3}(\.(\w){2,3})*$/i,
             "Formato de email no válido"
         ],
         fecha: [
             /^(\d{2})([-/]?)(\d{2})(\2)(\d{4})$/,
             "Formatos válidos: dd/mm/YYYY, dd mm YYYY, dd-mm-YYYY"
         ],
         telefono: [
             /^(\(\+?\d{2,4}\))?([. ])?(\d{3})([. ])?(\d{3})([. ])?(\d{3})$/,
             "Error, formato correcto: Ejemplo 668250469"
         ],
         cuentaCorriente: [
             /^[\d]{20}$|^[\d]{4}([-/ ])[\d]{4}\1[\d]{2}\1[\d]{10}$/,
             "La cuenta corriente contiene 20 números, pueden ser seguidos o del formato: xxxx-xxxx-xx-xxxxxxxxxx / xxxx xxxx xx xxxxxxxxxx"
         ],
         direccionWeb: [
             /^http[s]?:\/\/([w]{3}\.)?[a-z]{3,}\.[a-z]{2,3}((\.|\/)?[a-z]{2,})?$/,
             "Error, formato correcto: https://www.google.es o http://www.google.es"
         ]
     };
 
     let comprobarValor = function(valor, tipo) {
         if (valor.trim() != "") {
             switch (tipo) {
                 case "nombre":
                     if (regex.nombre[0].test(valor)) {
                         return "";
                     } else {
                         return regex.nombre[1];
                     };
                 case "edad":
                     if (regex.edad[0].test(valor)) {
                         return "";
                     } else {
                         return regex.edad[1];
                     };
                 case "email":
                     if (regex.email[0].test(valor)) {
                         return "";
                     } else {
                         return regex.email[1];
                     };
                 case "telefono":
                     if (regex.telefono[0].test(valor)) {
                         return "";
                     } else {
                         return regex.telefono[1];
                     };
                 case "cuentaCorrienta":
                     if (regex.telefono[0].test(valor)) {
                         return "";
                     } else {
                         return regex.telefono[1];
                     };
                 case "direccionWeb":
                     if (regex.direccionWeb[0].test(valor)) {
                         return "";
                     } else {
                         return regex.direccionWeb[1];
                     };
                 case "DNI":
                     try {
                         let [, numero, letra] = regex.dni[0].exec(valor);
                         return (regex.dni[1][numero % 23] == letra.toUpperCase()) ? "" : "La letra introducida no es la correcta";
                     } catch (error) {
                         return regex.dni[2];
                     }
                 case "fechaNacimiento":
                     if (!regex.fecha[0].test(valor)) {
                         return regex.fecha[1];
                     } else {
                         let [, dia, , mes, , ano] = regex.fecha[0].exec(valor);
                         let fecha = new Date(`${mes}/${dia},${ano}`);
                         if (parseInt(dia) !== fecha.getDate() || parseInt(mes) - 1 !== fecha.getMonth() || parseInt(ano) !== fecha.getFullYear()) {
                             return "Fecha no existe";
                         }
                         return "";
                     }
             }
         } else {
             return "El " + tipo + " no puede estar vacío";
         }
     }
 
     let comprobarRadio = function(radios) {
         return (Array.from(radios).some((i) => i.checked)) ? "" : "Seleccione una opción";
     }
 
     let comprobarSelect = function(select) {
         if ("".includes(select.value)) {
             return "Debes seleccionar una opción.";
         } else {
             return "";
         }
     }
 
     let comprobarCheck = function(checkbox) {
         if (!checkbox) {
             return "Debes de hacer click";
         } else {
             return "";
         }
     }
 
     return {
         comprobarRadio: comprobarRadio,
         comprobarSelect: comprobarSelect,
         comprobarCheck: comprobarCheck,
         comprobarValor: comprobarValor
     }
 }();