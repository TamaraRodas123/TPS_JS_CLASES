const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese un numero: "));

let numero2 = parseFloat(prompt("Ingrese otro numero: "));

let suma = numero1 + numero2 ;

console.log(`La suma de ambos numeros es: ${suma}`);
