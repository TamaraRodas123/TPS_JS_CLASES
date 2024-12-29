//  Agregar y eliminar a la fila de mascotas
/*Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. 
Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. 
Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.*/

let mascotas = ["Perro", "Gato", "Conejo"];
mascotas.unshift("Hámster");
let primerAgregado = mascotas.shift("Hámster");
console.log("Por prioridad agregamos atendemos primero a ", primerAgregado);
console.log("Actualizamos la lista en la fila de mascotas en la clinica, por orden prioritario: ", mascotas);