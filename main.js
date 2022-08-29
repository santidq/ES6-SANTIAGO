// Consignas
// 1. Copiar las funciones en un archivo JavaScript.
// 2. Simplificar la composición de los strings.
// 3. Simplificar escritura de los objetos literales.
// 4. Transformar las funciones básicas en funciones flecha.
// 5. Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.


// ```JS
// function saludar(nombre){
//     let nombre = nombre;
//     return 'Hola ' + nombre;
// }

// Mostrar el resultado por consola
// saludar('Alejandro');
// ```

const saludar = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Santiago'));


// ```JS
// function multiplicar(a, b){
//     const resultado = a + b;
//     return resultado;
// }

// Mostrar el resultado por consola
// multiplicar(3, 15)
// ```
const multiplicar = (numero1, numero2) => {
    let numeros1 = numero1;
    let numeros2 = numero2;
    return numero1 * numero2;
}

console.log(multiplicar(3, 15));






// ```JS
// function crearAlumno(nombre, apellido, edad, materias){
//     let alumno = {
//         nombre: nombre,
//         apellido: apellido,
//         edad: edad,
//         materias: materias
//     }

//     return alumno;
// }

const crearAlumno = (nombre, apellido, edad, materias) => {
    let alumno = ({nombre,apellido,edad,materias})

    return alumno;

}


// Mostrar el resultado por consola.
crearAlumno("Leo", "Messi", "32", ["TLPA","Base de Datos","Inglés"])
console.log(crearAlumno("Leo", "Messi", "32", ["TLPA","Base de Datos","Inglés"]));



// ```JS
// function devolverFecha(){
//     return 'Hoy es ';
// }

// Mostrar el resultado por consola.
// devolverFecha('10','09','2022');
// ```

const devolverFecha = (dia, mes, anio) => {
    let fecha = `Hoy es ${dia}/${mes}/${anio}`;
    return fecha;
}

console.log(devolverFecha('10','09','2022'));

