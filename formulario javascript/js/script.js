 {

    let init = function() {

        let rellenarCampos = function() {
            document.getElementById("nombre").value = "Manuel";
            document.getElementById("edad").value = "22";
            document.getElementsByName("sexos")[0].checked = "true";
            document.getElementById("idioma").value = "frances";
            document.getElementById("DNI").value = "12345678Z";
            document.getElementById("email").value = "prueba@gmail.com";
            document.getElementById("fechaNacimiento").value = "20/09/1999";
            document.getElementById("telefono").value = "666666666";
            document.getElementById("cuentaCorriente").value = "1111-1111-11-1111111111";
            document.getElementById("direccionWeb").value = "https://www.ejemplo.com";
            document.getElementById("terminos").checked = true;
        }

        let nombre = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "nombre");
        }

        let edad = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "edad");
        }

        let sexo = function() {
            this.parentElement.parentElement.lastElementChild.textContent = validar.comprobarRadio(document.getElementsByName("sexos"));
        }

        let idioma = function() {
            this.nextElementSibling.textContent = validar.comprobarSelect(this);
        }

        let DNI = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "DNI");
        }

        let email = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "email");
        }

        let fechaNacimiento = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "fechaNacimiento");
        }

        let telefono = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value.trim(), "telefono");
        }

        let cuentaCorriente = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "cuentaCorriente");
        }

        let direccionWeb = function() {
            this.nextElementSibling.textContent = validar.comprobarValor(this.value, "direccionWeb");
        }

        let terminos = function() {
            this.nextElementSibling.textContent = validar.comprobarCheck(this.checked);
        }

        let funciones = {
            nombre: nombre,
            edad: edad,
            sexo1: sexo,
            sexo2: sexo,
            DNI: DNI,
            email: email,
            fechaNacimiento: fechaNacimiento,
            telefono: telefono,
            cuentaCorriente: cuentaCorriente,
            direccionWeb: direccionWeb,
            terminos: terminos
        }

        let inputs = document.getElementsByTagName("input");

        for (input of inputs) {
            input.addEventListener("blur", funciones[input.id]);
        }

        document.getElementById("idioma").addEventListener("blur", idioma);

        document.getElementById("rellenar").addEventListener("click", function() {
            event.preventDefault();
            rellenarCampos();
        });


        document.getElementById("limpiar").addEventListener("click", function() {
            let spans = Array.from(document.getElementsByTagName("span"));

            spans.forEach(elemento => {
                elemento.textContent = "";
            });
        });

        document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
            event.preventDefault();

            let inputs = Array.from(document.getElementsByTagName("input"));

            inputs.forEach(input => {
                input.dispatchEvent(new Event("blur"));
            });

            let spans = Array.from(document.getElementsByTagName("span"));
            let span = spans.find(element => element.textContent != "");

            document.getElementById("idioma").dispatchEvent(new Event("blur"));

            if (span) {
                span.parentElement.firstElementChild.focus();
            };


        });

    }

    window.addEventListener("DOMContentLoaded", init);
}
