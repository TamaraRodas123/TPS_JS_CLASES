/*Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y
determine cuál es el mayor de los tres.*/

const prompt = require('prompt-sync')();

let numero1= parseFloat (prompt ("Ingrese un numero: "));

let numero2 = parseFloat ( prompt("Ingrese otro numero: "));

let numero3 = parseFloat (  prompt("Ingrese un tercer numero: "));

if ((numero1>numero2) && (numero1>numero3)) {
    console.log(`El numero mayor es ${numero1}`);
}
else if((numero2 >numero1) && (numero2> numero3)) {
    console.log(`El numero mas grande es ${numero2}`);
    
}else { console.log(`El numero mas grande es ${numero3}`);
}
