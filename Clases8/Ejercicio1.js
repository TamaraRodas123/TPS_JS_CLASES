const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Ingrese un numero: "));

let dobleNumero = numero * 2;

console.log(`El doble del numero es: ${dobleNumero}`);