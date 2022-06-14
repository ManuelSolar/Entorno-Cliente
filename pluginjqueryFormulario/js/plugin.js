/**
 * @author Manuel Solar Bueno
 */
(function ($) {
    $.fn.formulario = function (valores) {
        let valoresDefecto = $.extend({
            color: "#ff0000",
            backgroundColor: "#ffDEDE",
            border: "2px solid #ffD3D7",
        }, valores );
        let borrarCss = {
            color: "",
            backgroundColor: "",
            border: "",
        };
        function comprobarBlur(){
            $(this).each(function () {
                switch (this.dataset.tipo) {
                    case "correo":
                        if (/^\w+(\.\w+)?@\w+\.\w+\.?\w+\.?\w+/gm.test(this.value)) {
                            $(this).css(borrarCss);
                            this.dataset.valido = "true";
                        }else{
                            $(this).css({
                                color: valoresDefecto.color,
                                backgroundColor: valoresDefecto.backgroundColor,
                                border: valoresDefecto.border,
                            });
                            this.dataset.valido = "false";
                        }
                        break;
                    case "nombre":
                        if (/^[A-z]{3,}(\s[A-z]{3,})?(\s[A-z]{3,})?/gm.test(this.value)) {
                            $(this).css(borrarCss);
                            this.dataset.valido = "true";
                        }else{
                            $(this).css({
                                color: valoresDefecto.color,
                                backgroundColor: valoresDefecto.backgroundColor,
                                border: valoresDefecto.border,
                            });
                            this.dataset.valido = "false";
                        }
                }
            });
        }
        this.find("input").blur(comprobarBlur);
        this.submit(function (e) {
            e.preventDefault();
            let $campos = $(this).find("input");
            $campos.trigger("blur");
            let $inputs = $(this).find("input");
            $inputs.each(function () {
                if (this.dataset.valido == "false") {
                    this.focus();
                    return false;
                }
            });


        });
        return this;
    };

}(jQuery));