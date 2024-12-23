//Semaforo Inteligente
//Programamos un semaforo para cuando el usurio ingrese uno de los colores (rojo, amarillo, verde)
//dependiendo del color ingresado se les imprimira un mensaje
//Utilizamos SWITCH
let color = prompt("Ingrese un color del semaforo (rojo, amarillo, verde): ");
switch (color) {
    case "rojo":
        console.log('¡ALTO! No puede avanzar.');
        break;
    case "amarillo":
        console.log('PRECAUCION! Preparate para avanzar.');
        break;
    case "verde":
        console.log('Avanza con seguridad =)');
        break;
}
//Y si todo sale "OK" se imprimira, de lo contrario a llorar.