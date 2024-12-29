// Eliminar al último invitado
/*Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
El último invitado no puede asistir. Elimina al último invitado y muestra
quién fue eliminado y el estado actualizado de la lista */

let fiesta = ["Ana", "Juan", "Carlos", "Sofía"];
let ultimoFiesta = fiesta.pop()
console.log("Los invitados son: ", fiesta);
console.log("El que no esta invitado es ", ultimoFiesta);