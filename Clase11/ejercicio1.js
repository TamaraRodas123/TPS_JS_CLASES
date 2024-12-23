//Positivo, negativo o cero?
//EScribir un programa que pida al usuario un numero cualquiera
const prompt = require("prompt-sync")();
let numero = parseFloat(prompt("Ingrese un numero: "));

//Analizamos si el nro es +, - o 0
if (numero > 0){
    console.log("El numero ingresado es positivo.");
}
else {
    console.log("El numero ingresado en negsativo")
}
