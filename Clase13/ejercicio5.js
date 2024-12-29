// 1. Crea una FUNCION EXPRESADA llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parametros

let concatenarNombres = function (nombre , apellido) {
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto
}; // 2. devolver el nombre completo.
console.log(concatenarNombres("Zarek", "Moesia"));