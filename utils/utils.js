let Auto = require("../models/auto.model");
let Moto = require("../models/moto.model");

const carga = function () {
    let ans = [];
    ans.push(new Auto("Peugeot", "206", 4, 200000));
    ans.push(new Moto("Honda", "Titan", 125, 60000));
    ans.push(new Auto("Peugeot", "208", 5, 250000));
    ans.push(new Moto("Yamaha", "YBR", 160, 80500.50));
    return ans
}

const masCaro = function (vehiculos) {
    return vehiculos.reduce((vehiculo, vehiculo2) => {
        
        return vehiculo.precio < vehiculo2.precio ? vehiculo2 : vehiculo;
    });

}

const masBarato = function (vehiculos) {
    return vehiculos.reduce((vehiculo, vehiculo2) => {
        return vehiculo.precio > vehiculo2.precio ? vehiculo2 : vehiculo;
    })
}

const contiene = function(cadena, vehiculos) {
   return vehiculos.find(vehiculo => {
        return vehiculo.modelo.includes(cadena)
    })
}

module.exports = {
    carga,
    masCaro,
    masBarato,
    contiene
}