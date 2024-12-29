// Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentajr de IVA.
// Usa una funcion flecha para calcular el precio final.

const prompt = require('prompt-sync')();

const calcularPrecioIVA = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingrese el precio dep procucto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));
let precioFinal = calcularPrecioIVA(precio, iva);

console.log(`El precio final con IVA es: ${precioFinal}`);

// Este ejercicio lo resolvimos en clases
