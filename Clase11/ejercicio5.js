//Encuentra los números pares entre dos valores
//Pide al usurio dos numeros enteros (inicio y fin)
//El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
//incluyendo los límites si son pares. Utiliza un CICLO FOR para recorrer los números entre el inicio y el fin. 
//Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.
const prompt = require ('prompt-sync')();

let inicio = parseFloat (prompt("Ingrese un número entero: "));
let fin = parseFloat (prompt("Ingrese otro número entero: "));

if (inicio < fin) {      //utilizo un If para poner la condicion de que inicio debe ser menor a fin.

    for (let i = inicio; i <= fin; i++){//dentro del if utilizo el CICLO FOR pra poder correr los nuemeros 
        if (i % 2 == 0){                //agrego un if dentro del ciclo for para poner la condicion de que los nros deben ser solamente pares
            console.log(i);             //mando a emprimir la condicion "i".  
        }
    }
}
else {
    console.log('Los valores ingresados son invalidos.'); //si no se cumple lo pedido por el CICLO FOR.
}