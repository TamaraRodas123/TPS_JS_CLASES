/*Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a
libras. Muestra el resultado con un mensaje. (Averigua como pasar de
kg a libras, Pista: 2.20462)*/

const prompt = require ('prompt-sync')();

let peso = parseFloat (prompt("Ingrese su peso en Kg:"));

let pesoLibras = peso * 2.20462 ;

console.log( `Su peso el libras es ${pesoLibras}`);
