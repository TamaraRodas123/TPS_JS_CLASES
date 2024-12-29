// Arreglo de libros (esto podría estar en una base de datos, por ejemplo)
let libros = [
    { id: 1, titulo: "El Quijote", disponible: true },
    { id: 2, titulo: "Cien Años de Soledad", disponible: true },
    { id: 3, titulo: "1984", disponible: true }
];

// Arreglo de usuarios
let usuarios = [
    { id: 1, nombre: "Juan", librosPrestados: [] },
    { id: 2, nombre: "Maria", librosPrestados: [] }
];

// Función para prestar un libro
function prestarLibro(idLibro, idUsuario) {
    // Encontrar el libro que queremos prestar
    let libro = libros.find(l => l.id === idLibro);
    // Encontrar al usuario que está pidiendo el libro
    let usuario = usuarios.find(u => u.id === idUsuario);

    // Verificar si el libro existe y si está disponible
    if (!libro) {
        console.log("El libro no existe.");
        return;
    }

    if (!usuario) {
        console.log("El usuario no existe.");
        return;
    }

    if (!libro.disponible) {
        console.log("El libro no está disponible.");
        return;
    }

    // Marcar el libro como no disponible
    libro.disponible = false;

    // Agregar el libro a la lista de libros prestados del usuario
    usuario.librosPrestados.push(libro.id);

    console.log(`El libro "${libro.titulo}" ha sido prestado a ${usuario.nombre}.`);
}

// Ejemplo de uso
prestarLibro(1, 1); // Prestar el libro con ID 1 a Juan
prestarLibro(2, 1); // Prestar el libro con ID 2 a Juan
prestarLibro(3, 2); // Prestar el libro con ID 3 a Maria
prestarLibro(1, 2); // Intentar prestar el libro con ID 1 a Maria (ya no está disponible)
