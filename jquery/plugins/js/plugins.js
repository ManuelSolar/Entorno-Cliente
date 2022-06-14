/**
 * Plugin que selecciona el background color de un elemento.
 * 
 * @author Manuel Solar
 */

 jQuery.fn.backgroundColor = function(color) {
    return this.css("background-color", color);
};

/**
 * Plugin que selecciona el color de un elemento.
 * 
 * @author Manuel Solar
 */

    jQuery.fn.color = function(color) {
        return this.css("color", color);
    };

/**
 *Plugin que selecciona el texto de un elemento. 
 * 
 * @author Manuel Solar
 */

    jQuery.fn.text = function(text) {
        return this.html(text);
    };