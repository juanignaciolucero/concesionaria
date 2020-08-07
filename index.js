let util = require("./utils/utils");
let vehiculos = util.carga();
let separador = "=============================";

for (vehiculo of vehiculos) {
    console.log(vehiculo.info());
}
console.log(separador);
let veCaro = util.masCaro(vehiculos);
console.log("Vehículo mas caro: " + veCaro.marca + " " + veCaro.modelo);
let veBarato = util.masBarato(vehiculos);
console.log("Vehículo mas barato: " + veBarato.marca + " " + veBarato.modelo);
let vehi = util.contiene('Y', vehiculos);
console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + vehi.marca + " " + vehi.modelo + " $" + vehi.precio);
console.log(separador);
console.log("Vehículos ordenados por precio de mayor a menor:");
vehiculos.sort((a,b)=>b.precio -a.precio);
for(vehiculo of vehiculos){
    console.log(vehiculo.marca+" "+vehiculo.modelo)
}