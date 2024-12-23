// La tabla de multiplicar
//crea un programa q le pida al usuario un nro y luego imprima su tabla de multiplicar desde el 1 al 10
//USA EL CICLO FOR
const prompt = require ('prompt-sync')();

let numero = parseFloat(prompt("Ingrese un número para poder multiplicarlo: "));

for (let i = 1; i <= 10; i++){ 
    console.log(`${numero} x ${i} = ${numero * i}`);
}
