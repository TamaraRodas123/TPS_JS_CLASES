const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt(`Ingrese un numero: `));
let numero2 = parseFloat(prompt(`Ingrese otro numero: `));

if (numero1>numero2){
    console.log(`El numero mas grande es: ${numero1}`);
    
}
else if (numero1<numero2){
    console.log(`El numero mas grande es: ${numero2} `);
    
}
else {
    console.log(`Ambos numeros son iguales`);
    
}