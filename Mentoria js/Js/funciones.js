// Las funciones son uno de los bloques de construcción fundamentales en JavaScript.
// Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones
// que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función,
// debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

let nombre = "camilo";
// declaracion de funcion
function mostrarMensaje(a , b) {
    // console.log(saludo + " " + nombre + "edad: " + edad);
    // console.log(nombre /saludo);
    // console.log(nombre *saludo);

    // let total = a + b;
    // return total;
}

function obtenerValor(nombre){
    // let valor = mostrarMensaje(nombre);
    console.log(nombre);
}

obtenerValor(nombre);

// expresion de función
const nombreFuncion2 = function(saludo , nombre , edad){ //funcion anonima sin poner el nombre no respeta el tema de hoisting
   
}
// nombreFuncion2( "hola" , "santiago" , 20);


// arrow function
const nombreFuncion3 = mensaje => {
    console.log(mensaje);
};
// nombreFuncion3("Hola mundo");


// el return ¿? -- La sentencia return finaliza la ejecución de la
// función y especifica un valor para ser devuelto a quien llama a la función.


// funciones autoejecutables
( function () {
    let nombre = 'Victor'
    // console.log (`Hola ${nombre}`);
})()

// console.log (`Hola ${nombre}`); //no podemos acceder al valor en este tipo de variable.
