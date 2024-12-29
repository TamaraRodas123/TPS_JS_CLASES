// Número mayor (FUNCIÓN EXPRESADA)
// 1. Crea una FUNCION EXPRESADA llamada encontrarMayor que reciba dos numero como parametros

let encontrarMayor = function (a, b) { // se puede usar "let" y "const"
    if (a > b){
        return a; // si "a" es mayor que "b" nos devolvera el valor de "a"
    } 
    else {
        return b; // si "b" es mayor que "a" nos devolvera el valor de "b"
    }
}
// 2. Devuelve el número mayor
console.log("El mayor entre 32 y 23 es: ", encontrarMayor(32, 32));
