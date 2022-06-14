/**
 * @author Manuel Solar Bueno
 */

$(function () {
    const colores = ["red", "white", "black", "yellow", "orange", "brown", "blue", "green"];

    const hueco = `<div class="hueco" data-libre="true"></div>`;

    const bolaComprobadora = `<div class="comprobar"></div>`;

    const filtrar = function(){
        return $(this).attr("data-libre") == 'true';
    };

    const crearFila = function(){
        $("#resultados").append(`<div class="fila"></div>`);
        for(let i = 0 ; i < 4; i++){
            $(".fila").last().append(hueco);
        }
        for(let i = 0 ; i < 4; i++){
            $(".fila").last().append(bolaComprobadora);
        }
    }

    $(".colores").each(function (index) { 
         $(this).css("backgroundColor", colores[index])
         .attr("data-color", colores[index]);
    })
        .click(function(){
            $(".hueco[data-libre='true']")
                .first()
                .css("backgroundColor", $(this).attr("data-color"))
                .attr("data-libre", "false")
                .attr("data-color", $(this).attr("data-color"));
    });

    $(document).on("click", ".hueco", function(){
        $(this).css("backgroundColor", "grey")
            .attr("data-libre", "true");
    })
    .on("click", "#reiniciar", function(){
        location.reload();
    });

    $("button").click(function(){
        if($(".hueco").filter(filtrar).length){
            return;
        }

        let intentar = [];
        $(".hueco").each(function() {
            intentar.push($(this).attr("data-color"));
        });
        let intento = mastermind.comprobarCoincidencia(...intentar);
        $(".hueco").toggleClass("hueco").toggleClass("antiguo-hueco");

        let negras = intento.bolaNegra;

        $(".comprobar").each(function(){
            $(this).toggleClass("comprobar").toggleClass("antiguo-comprobar");
            if(intento.bolaNegra > 0){
                $(this).css("backgroundColor","black");
                intento.bolaNegra--;
            }else if(intento.bolaBlanca > 0){
                $(this).css("backgroundColor","white");
                intento.bolaBlanca--;
            }
        });

        if(negras == 4){
            $("#ganar-oculto").attr("id","ganar");
        }else{
            crearFila();
        }
    });

});