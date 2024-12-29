// Mensajes global y local
// 1. Declara una variables global llamada saludoGlobal con el valor "Hola desde el scope global"
let saludoGlobal = "Hola desde el Scope Global!"

//2. Crear un funcion llamada mostrarMensaje que declare una variable local saludoLocal
function mostrarMensaje () {  
    let saludoLocal = "Hola desde el Scope Local!"
    
    // 3. debe imprimirse ambos mensajes
    console.log(saludoGlobal); 
    console.log(saludoLocal);
}
mostrarMensaje()