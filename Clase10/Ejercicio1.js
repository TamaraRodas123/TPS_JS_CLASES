const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ");
let edad= parseFloat(prompt("Ingrese su edad: "));
let peso = parseFloat(prompt("Ingrese su peso: "));

console.log(`Su nombre es ${nombre}, su edad es ${edad} y su peso es ${peso}`);
