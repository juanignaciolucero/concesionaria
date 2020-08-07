let Vehiculo = require("./vehiculo.model");

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    info() {
        return "Marca: " + this.marca + " // Modelo: " + this.modelo +
            " // Cilindrada: " + this.cilindrada + "c // Precio: $" + this.precio
    }
}

module.exports = Moto;