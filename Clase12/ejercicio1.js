//Ejercico 1 de la clase 13
//CREA UN PROGRAMA QUE SOLICITE AL USUARIO INGRESAR NÚMEROS CONTINUAMENTE
//HASTA QUE EL USUARIO INGRESE UN NRO NEGATIVO.
//LUEGO IMPRIME LA SUMA DE TODOS LOS NUMEROS INGRESADOS
const prompt = require('prompt-sync')();
let suma = 0;
let nro = parseInt(prompt("Ingrese un numero: "));
//Agregamos el WHILE
while (nro >= 0){
    suma += nro;
    nro = parseInt(prompt("Ingrese un numero: "));
}
console.log(`La suma de todos los numeros es: ${suma}`);

//si todo esta OK saldra el resultado, de lo contrario lloremos