// MENSAJE SEGUN LA HORA
// 1. declara una VARIABLE GLOBAL "horaActual" puedes asignarle un valor fijo.
let horaActual = 3; 

// 2. Crea una funcion declarada "mostrarSaludo" que imprima
function mostrarSaludo (){
    if (horaActual < 12){ 
        console.log("Buenos dias"); //"Buenoas dias" si la hora es horaActual es menor a 12
        
    }
    else if (horaActual < 18) {
        console.log("Buenas tardes."); //"Buenas tardes si la horaActual es menor a 18"
        }
    else {
        console.log("Buenas noches."); //Por descarte si es mayor a las anteriores sera Buenas
    }
}
mostrarSaludo();
