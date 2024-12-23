//Sabes contar? 
//Creamos un programa dodne le pedimos al usuario un numero positivo.
//El programa debera contar desde el 1 hasta ese numero e imprimir cada valor en la consola.
//Usamos el ciclo for 
const prompt = require ('prompt-sync')();
let numero = parseFloat (prompt("Ingrese un numero positivo por favor: "));

//CICLO FOR 
for (let i = 1; i <= numero; i++) {
    console.log('dando la vuelta ' + i);
}