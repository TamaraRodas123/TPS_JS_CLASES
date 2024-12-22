const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ");

if (nombre === 'tamara') {
    console.log(`Su nombre es igual al mio`);  
} else {console.log(`Su nombre es diferente al mio`);
}