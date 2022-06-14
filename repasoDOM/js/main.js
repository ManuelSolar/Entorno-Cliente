document.addEventListener("DOMContentLoaded", _ => {
    const inputText = document.querySelectorAll('input[type=text]');
    const botones = document.querySelectorAll('button');
    const secciones = document.querySelectorAll('section');
    const h2 = document.querySelector('h2');

    
    const anadirAlFinal = function(){
        const div = document.createElement("div");
        const crearContenido = document.createTextNode(inputText[0].value);
        div.appendChild(crearContenido);
        (this.textContent.includes('uno')) ? secciones[0].appendChild(div) : secciones[1].appendChild(div);
    }

    const anadirAlPrincipio = function(){
        const div = document.createElement("div");
        const crearContenido = document.createTextNode(inputText[1].value);
        div.appendChild(crearContenido);
        (this.textContent.includes('uno')) ? secciones[0].insertBefore(div,secciones[0].firstChild) 
            : secciones[1].insertBefore(div, secciones[1].firstChild);
        }
        
    const eliminarAlFinal = function(){
    (this.textContent.includes('uno')) ? secciones[0].lastChild?.remove()
        : secciones[1].lastChild?.remove();
    }

    const eliminarAlPrincipio = function(){
    (this.textContent.includes('uno')) ? secciones[0].firstChild?.remove()
        : secciones[1].firstChild?.remove();
    }

    botones[0].addEventListener("click", anadirAlFinal);
    botones[1].addEventListener("click", anadirAlFinal);
    botones[2].addEventListener("click", anadirAlPrincipio);
    botones[3].addEventListener("click", anadirAlPrincipio);
    botones[4].addEventListener("click", eliminarAlFinal);
    botones[5].addEventListener("click", eliminarAlFinal);
    botones[6].addEventListener("click", eliminarAlPrincipio);
    botones[7].addEventListener("click", eliminarAlPrincipio);
    
    botones[8].addEventListener("click", function(){
        try{
            const clon = document.querySelector("#uno").cloneNode(true);
            document.body.appendChild(clon);
        }catch (e){
            console.log("no existe la seccion uno");
        }
    });
    
    botones[9].addEventListener("click", function(){
        document.querySelector("#uno")?.remove();
    });
    
    botones[10].addEventListener("click", _ => {
        secciones[0].style.color = document.getElementById("color").value;
    });
    
    botones[11].addEventListener("click", _ => {
        secciones[1].style.backgroundColor = document.querySelector("input[name='fondo']:checked").value;
    });

    botones[12].addEventListener("click", function() {
        h2.classList.toggle(this.nextSibling.value);
    });

    document.querySelectorAll('input[type=checkbox]').forEach(element => {
        element.addEventListener("change", function() {
            this.checked ? h2.classList.add(this.value) : h2.classList.remove(this.value);
        });
    });
})