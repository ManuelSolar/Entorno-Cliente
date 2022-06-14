/**
 * Script donde uso los plugins de Jquery
 * 
 * @author Manuel Solar
 */

$(document).ready(function() {
    $(function(){
        $("#background-color").click(function(){
            $(".ejemplos").backgroundColor("green");
        });
        $("#color").click(function(){
            $(".ejemplos").color("blue");
        });
        $("#text").click(function(){
            $(".ejemplos").text("El texto ha cambiado");
        });
    });
});