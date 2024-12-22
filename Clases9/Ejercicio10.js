/*Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
semana correspondiente. Si el número no está dentro de ese rango,
muestra un mensaje de error.*/

const prompt=require('prompt-sync')();

let numero= parseFloat(prompt("Ingrese un numero del 1 al 7: "));

if (numero=== 1){
    console.log(`El dia correspondiente al nùmero 1 es el Lunes.`);
} else if (numero===2){
    console.log(`El dia correspondiente al numero 2 es Martes`);
} else if (numero===3){
    console.log(`El dia correspondiente al numero 3 es Miercoles`);
}else if (numero === 4){
    console.log(`El dia correspondiente al numero 4 es Jueves`);
}else if (numero===5){
    console.log(`El dia correspondiente al numero 5 es Viernes`);
}else if (numero===6){
    console.log(`El dia correspondiente al numero 6 es Sabado`);
}else if (numero===7){
    console.log(`El dia correspondiente al numero 7 es Domingo`);
} else {console.log(`Error`);
}