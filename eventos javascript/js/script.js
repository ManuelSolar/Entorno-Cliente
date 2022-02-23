/**
 * @author Manuel Solar Bueno
 */

    document.addEventListener("DOMContentLoaded", function () {
        document.oncontextmenu = function () { return false };
        let allCanvas = document.querySelectorAll("canvas");

        const colorAleatorio = function () {
            this.setAttribute("data-color",`rgb(${Math.floor(Math.random() * (300 - 100)) + 100},${Math.floor(Math.random() * (300 - 100)) + 100},${Math.floor(Math.random() * (300 - 100)) + 100})`)
            return this.style.backgroundColor = this.getAttribute("data-color");
        }

        allCanvas.forEach(element => {
            const backgroundCanvas = colorAleatorio.bind(element);
            backgroundCanvas(element);
            let context = element.getContext("2d");
            context.font = "bold 15px roboto";
            context.fillText(element.id, 5, 25);
            context.fillText("(0,0)", 5, 50);
            context.fillText("(0,0)", 5, 75);
            element.addEventListener(element.id, function (e) {
                backgroundCanvas(this);
                context.clearRect(0, 0, this.width, this.height);
                context.fillText(this.id, 5, 25);
                context.fillText(`(${e.offsetX},${e.offsetY})`, 5, 50);
                context.fillText(`(${e.button},${e.buttons})`, 5, 75);
            })
        });
    });
