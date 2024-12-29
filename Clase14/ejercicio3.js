// CLASIFICAION DE EDADES
// Solicita al usuario una edad y usas una funcion flecha para clasificarla en niño, adolocente, adulto o adulto mayor.

const prompt = require('prompt-sync')();

let clasificaionPorEdad = (edad) => {
    if (edad <= 12 ) return "Niño.";
    
    else if (edad < 18) return "Adolecente.";

    else if (edad <= 59) return "Adulto responsable.";

    else return "Pertenece  a la tercera edad."
}
let edad = parseFloat(prompt("Ingrese su edad: "));
let clasificaion = clasificaionPorEdad(edad);

console.log(`La clasificacion de su edad es: ${clasificaion} `);
