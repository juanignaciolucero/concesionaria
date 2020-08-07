let Vehiculo = require("./vehiculo.model");

class Auto extends Vehiculo{
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    info() {
        return "Marca: " + this.marca + " // Modelo: " + this.modelo + 
        " // Puertas: "+this.puertas+" // Precio: $"+this.precio
    }
}

module.exports = Auto;