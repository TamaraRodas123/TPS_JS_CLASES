// CALCULAR PROMEDIO DE CALIFICACIONES
// Solicita al usuario cinco notas y usa una funcion flecha para calculat el promedio.

const prompt = require('prompt-sync')();
let suma = 0; // indicamos que "suma" se incrementa desde 0 

// Creamos un arrow que tiene mas de una linea
let calcularPromedio = (calificaciones) => { // crearemos un bucle for para que se repita 5 veces 
    for(let i = 0; i < 5; i++) {// indicamos que "i" debe ser < 5 porque es la cantidad de notas que se van agregar
        let calificaiones = parseFloat(prompt("Ingrese una calificación: ")); // varibale para poder agragar las calificaciones
        suma += calificaciones;
    }
    return suma / 5; // para sacar el promedio
}
console.log(calcularPromedio());

// no me daaaa!  