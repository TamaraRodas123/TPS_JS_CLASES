const prompt = require('prompt-sync')();
let numero = parseFloat (prompt("Ingrese un numero: "));
if (numero>0){
    console.log(`Su numero es positivo`);
}
else if (numero<0){
    console.log(`Su numero es negativo`);
    
}
else {
    console.log(`Su numero es 0`);
    
}
