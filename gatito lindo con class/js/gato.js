/**
 * Clase Gato hacer con class
 * 
 * @author Manuel Solar Bueno
 */



 class Gato {
    constructor(nombre, fechaNacimiento, raza, peso) {
        this.setNombre(nombre);
        this.setFechaNacimiento(fechaNacimiento);
        this.setRaza(raza);
        this.setPeso(peso);
    }
    #setNombre(nombre) {
        this.nombre = nombre;
    }
    #setFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = new Date(fechaNacimiento);
    }
    #setRaza(raza) {
        this.raza = raza;
    }
    #setPeso(peso) {
        this.peso = peso;
    }
    estado() {
        if (this.peso < 1 || this.peso > 15) {
            throw new Error("Ahora hay un angelito más en el cielo :'(");
        }
    }
    jugar() {
        this.estado();
        this.setPeso(this.peso - 1);
        this.estado();
    }
    comer() {
        this.estado();
        this.setPeso(this.peso + 1);
        this.estado();
    }
    dormir() {
        this.estado();
    }
    edad() {
        this.estado();
    }
}






