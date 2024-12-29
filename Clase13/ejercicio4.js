// NUMERO PAR O IMPAR
// 1. Crea una FUNCION DECLARADA llamada esPar que reciba un numero y devuelva "Es par." o "Es impar."
function esPar (numero) {
    let resultado; // a esta variable la dejamos asi para asignarle un valor mas adelante
    if (numero % 2 === 0) {
        resultado = "Es par.";
    }
    else {
        resultado = "Es impar."
    }
    return resultado;
}
console.log(esPar(23));
console.log(esPar(50));

