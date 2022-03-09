
// condicionales

// En programación, una sentencia condicional es una instrucción o
// grupo de instrucciones que se pueden ejecutar o no en función del
// valor de una condición.


// // igualdad
// if (edad == "18") {
//     console.log("es igual")
// } else {
//     console.log("no es igual")
// }

// // diferencia
// if (edad !== "18" ) {
//     console.log("si")
// } else {
//     console.log("no")
// }

// // mayor o menor que
// if (edad >= 18 ) {
//     console.log("si")
// } else {
//     console.log("no")
// }

// if (edad <= 18 ) {
//     console.log("si")
// } else {
//     console.log("no")
// }

// // condicionales anidados
// if(valor == 1) {
//     a + b
// } else if (valor == 2){
//     a - b
// } else if (condicion){

// } else {

// }

// // sentencia switch para evitar hacer muchos else if
// switch(option) {

//     case 1:
//         valor = a + b;
//     case 2:
//         valor = a * b;
//     case 3:
//         valor = a / b;
//     case 4:
//         valor = a - b;

//     default: 
//         console.log("ningun valor cumple la condicion");

//     // return valor;
// }


// // && - ||

// let nombre = "jose";
// let edad = 18;

// if (edad === "18" && nombre == "jose") {
//     console.log("si es igual")
// } else {
//     console.log("no es igual")
// }


// if (edad == 18 || nombre == "jose") {
//     console.log("si es igual")
// } else {
//     console.log("no es igual")
// }

// // condiciones reduntantes o inecesezarias 
// let condicion = 400;

// if (condicion > 300) {

// } else if (condicion > 200) {

// } else {

// }

// condicion = true;

// if (condicion) {

// } else {

// }

let valor = false;

// condicionales taernarios
let valor = (condicion == 1) ? "puede seguir" : "no puede";

let valor = (condicion > 2 && condicion < 4) ? leeNumero() : sumarNumero();

let valor = (condicion === false) && mostrarMensaje();

(condicion > 10) ? condicion2 > 2 ? "hola" : "adios" : "valor incorrecto";



