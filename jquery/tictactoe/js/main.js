$(document).ready(function() {
    const x = "x";
    const o = "o";
    let turns = 0;

    //spot const
    const spot1 = $("#spot1");
    const spot2 = $("#spot2");
    const spot3 = $("#spot3");
    const spot4 = $("#spot4");
    const spot5 = $("#spot5");
    const spot6 = $("#spot6");
    const spot7 = $("#spot7");
    const spot8 = $("#spot8");
    const spot9 = $("#spot9");

    //spot click events
    spot1.click(function() {
        if (turns % 2 === 0) {
            spot1.text(x);
            spot1.addClass("x");
            turns++;
        } else {
            spot1.text(o);
            spot1.addClass("o");
            turns++;
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);

    });
    spot2.click(function() {
        if (turns % 2 === 0) {
            spot2.text(x);
            spot2.addClass("x");
            turns++;
        } else {
            spot2.text(o);
            spot2.addClass("o");
            turns++;
        }

        $(this).off("click");
        $("#turn-number").text(turns);
    });

    spot3.click(function() {
        if (turns % 2 === 0) {
            spot3.text(x);
            spot3.addClass("x");
            turns++;
        } else {
            spot3.text(o);
            spot3.addClass("o");
            turns++;
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);
    });
    spot4.click(function() {
        if (turns % 2 === 0) {
            spot4.text(x);
            spot4.addClass("x");
            turns++;
        } else {
            spot4.text(o);
            spot4.addClass("o");
            turns++;
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);

    });
    spot5.click(function() {
        if (turns % 2 === 0) {
            spot5.text(x);
            spot5.addClass("x");
            turns++;
        } else {
            spot5.text(o);
            spot5.addClass("o");
            turns++;
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);

    });
    spot6.click(function() {
        if (turns % 2 === 0) {
            spot6.text(x);
            spot6.addClass("x");
            turns++;
        } else {
            spot6.text(o);
            spot6.addClass("o");
            turns++;
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);

    });
    spot7.click(function() {
        if (turns % 2 === 0) {
            spot7.text(x);
            spot7.addClass("x");
            turns++;
        } else {
            spot7.text(o);
            spot7.addClass("o");
            turns++;
        }

        $(this).off("click");
        $("#turn-number").text(turns);

    });
    spot8.click(function() {
        if (turns % 2 === 0) {
            spot8.text(x);
            spot8.addClass("x");
            turns++;
        } else {
            spot8.text(o);
            spot8.addClass("o");
            turns++;
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);

    });
    spot9.click(function() {
        if (turns % 2 === 0) {
            spot9.text(x);
            spot9.addClass("x");
            turns++;
        } else {
            spot9.text(o);
            spot9.addClass("o");
            turns++;
            
        }
        
        $(this).off("click");
        $("#turn-number").text(turns);

    });

    $(".item").click( function() {
        if(spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o")||
            spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o")||
            spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o")||
            spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o")||
            spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o")||
            spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o")||
            spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o")||
            spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o")) {

            alert("O gana!");
            $(".item").off("click");

        } else if(spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x")||
            spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x")||
            spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x")||
            spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x")||
            spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x")||
            spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x")||
            spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x")||
            spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x")) {

            alert("X gana!");
            $(".item").off("click");
            
        }else if(turns === 9) {

            alert("Empate!");
            $(".item").off("click");

        }

        // Boton reset
        $("#reset").click( function() {
            $(".item").text("+");
            $(".item").removeClass("o");
            $(".item").removeClass("x");
            turns = 0;
            $("#turn-number").text(turns);
            location.reload();
           
        });
           
    });

});